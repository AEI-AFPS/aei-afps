import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useSpring } from "react-spring";

export interface GlobeMarker {
  lat: number;
  lng: number;
  src?: string;
  label?: string;
}

export interface GlobeConfig {
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
}

export function Globe3D({
  markers = [],
  config = {},
  onMarkerClick,
  onMarkerHover,
}: {
  markers?: GlobeMarker[];
  config?: GlobeConfig;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let phi = 0;
    let currentWidth = 0;
    let globe: any = null;

    const initGlobe = () => {
      if (!canvasRef.current || currentWidth === 0) return;

      const cobeMarkers = markers.map((marker) => ({
        location: [marker.lat, marker.lng] as [number, number],
        size: 0.05,
      }));

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: currentWidth * 2,
        height: currentWidth * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.1, 0.1, 0.2],
        markerColor: [1, 0.4, 0],
        glowColor: [0.2, 0.2, 0.4],
        markers: cobeMarkers,
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += config.autoRotateSpeed !== undefined ? config.autoRotateSpeed * 0.01 : 0.005;
          }
          state.phi = phi + r.get();
          state.width = currentWidth * 2;
          state.height = currentWidth * 2;
        },
      });
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          currentWidth = entry.contentRect.width;
          setWidth(currentWidth);
          if (!globe) {
            initGlobe();
          }
        }
      }
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (globe) globe.destroy();
      resizeObserver.disconnect();
    };
  }, [r, markers, config.autoRotateSpeed]);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto overflow-hidden rounded-full">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-1000 ease-in-out"
        style={{
          width: "100%",
          height: "100%",
          opacity: width > 0 ? 1 : 0,
        }}
      />
    </div>
  );
}
