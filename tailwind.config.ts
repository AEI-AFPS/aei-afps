import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Oswald", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // FireGuard Flame palette
        flame: {
          crimson: "hsl(var(--flame-crimson))",
          orange:  "hsl(var(--flame-orange))",
          gold:    "hsl(var(--flame-gold))",
          dark:    "hsl(var(--flame-dark))",
          glow:    "hsl(var(--flame-glow))",
        },
        navy: {
          dark:  "hsl(var(--navy-dark))",
          mid:   "hsl(var(--navy-mid))",
          light: "hsl(var(--navy-light))",
        },
        // Legacy aliases so existing components still compile
        industrial: {
          charcoal: "hsl(var(--navy-mid))",
          steel:    "hsl(var(--steel))",
          concrete: "hsl(var(--concrete))",
          warning:  "hsl(var(--flame-orange))",
          dark:     "hsl(var(--navy-dark))",
        },
        phoenix: {
          DEFAULT: "hsl(var(--flame-crimson))",
          red:     "hsl(var(--flame-crimson))",
          dark:    "hsl(var(--flame-dark))",
          glow:    "hsl(var(--flame-orange))",
          ember:   "hsl(var(--flame-glow))",
        },
        sidebar: {
          DEFAULT:            "hsl(var(--sidebar-background))",
          foreground:         "hsl(var(--sidebar-foreground))",
          primary:            "hsl(var(--sidebar-primary))",
          "primary-foreground":"hsl(var(--sidebar-primary-foreground))",
          accent:             "hsl(var(--sidebar-accent))",
          "accent-foreground":"hsl(var(--sidebar-accent-foreground))",
          border:             "hsl(var(--sidebar-border))",
          ring:               "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-flame": "linear-gradient(135deg, hsl(var(--flame-crimson)) 0%, hsl(var(--flame-orange)) 60%, hsl(var(--flame-gold)) 100%)",
        "gradient-hero":  "linear-gradient(135deg, hsl(var(--navy-dark)) 0%, hsl(var(--navy-mid)) 50%, hsl(var(--navy-light)) 100%)",
        "gradient-radial-flame": "radial-gradient(ellipse at center, hsl(var(--flame-crimson) / 0.4) 0%, transparent 70%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(6 85% 42% / 0.3)" },
          "50%":       { boxShadow: "0 0 50px hsl(6 85% 42% / 0.6), 0 0 80px hsl(29 90% 54% / 0.3)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        spotlight: {
          "0%":   { opacity: "0", transform: "translate(-72%,-62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        "border-beam": {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        ripple: {
          "0%":   { transform: "scale(1)", opacity: "0.3" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-up":        "fade-up 0.7s cubic-bezier(.16,1,.3,1) both",
        "fade-in":        "fade-in 0.5s ease-out both",
        float:            "float 4s ease-in-out infinite",
        "glow-pulse":     "glow-pulse 2.5s ease-in-out infinite",
        shimmer:          "shimmer 2s infinite",
        spotlight:        "spotlight 2s ease forwards",
        "border-beam":    "border-beam 3s linear infinite",
        ripple:           "ripple 1.5s ease-out infinite",
        scroll:           "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      boxShadow: {
        flame:    "0 6px 32px -4px hsl(6 85% 42% / 0.35)",
        glow:     "0 0 40px hsl(6 85% 42% / 0.25)",
        "card-xl":"0 12px 48px -8px hsl(218 28% 14% / 0.18)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
