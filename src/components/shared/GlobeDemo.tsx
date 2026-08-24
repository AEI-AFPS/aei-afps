"use client";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  { lat: 32.2396, lng: 77.1887, src: "/web_logo.webp", label: "Kullu Manali" },
  { lat: 22.2587, lng: 71.1924, src: "/web_logo.webp", label: "Gujarat" },
  { lat: 22.9734, lng: 78.6569, src: "/web_logo.webp", label: "Madhya Pradesh" },
  { lat: 19.7515, lng: 75.7139, src: "/web_logo.webp", label: "Maharashtra" },
  { lat: 15.2993, lng: 74.1240, src: "/web_logo.webp", label: "Goa" },
  { lat: 15.3173, lng: 75.7139, src: "/web_logo.webp", label: "Karnataka" },
  { lat: 17.3850, lng: 78.4867, src: "/house.svg", label: "Telangana" },
  { lat: 15.9129, lng: 79.7400, src: "/web_logo.webp", label: "Andhra Pradesh" },
  { lat: 11.1271, lng: 78.6569, src: "/web_logo.webp", label: "Tamil Nadu" },
  { lat: 20.9517, lng: 85.0985, src: "/web_logo.webp", label: "Odisha" },
  { lat: 21.2787, lng: 81.8661, src: "/web_logo.webp", label: "Chattisgarh" },
  { lat: 23.6102, lng: 85.2799, src: "/web_logo.webp", label: "Jharkhand" },
  { lat: 22.8046, lng: 86.2029, src: "/web_logo.webp", label: "Jamshedpur" },
  { lat: 22.9868, lng: 87.8550, src: "/web_logo.webp", label: "West Bengal" },
  { lat: -13.1339, lng: 27.8493, src: "/web_logo.webp", label: "Zambia" },
  { lat: -0.7893, lng: 113.9213, src: "/web_logo.webp", label: "Indonesia" },
];

export function Globe3DDemo() {
  return (
    <Globe3D
      markers={sampleMarkers}
      config={{
        atmosphereColor: "#4da6ff",
        atmosphereIntensity: 20,
        bumpScale: 5,
        autoRotateSpeed: 0.3,
      }}
      onMarkerClick={(marker) => {
        console.log("Clicked marker:", marker.label);
      }}
      onMarkerHover={(marker) => {
        if (marker) {
          console.log("Hovering:", marker.label);
        }
      }}
    />
  );
}
