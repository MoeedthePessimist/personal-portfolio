/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#0c0c0f",
          secondary: "#111117",
          card: "#16161e",
        },
        accent: {
          amber: "#f59e0b",
          cyan: "#22d3ee",
          rose: "#fb7185",
          violet: "#a78bfa",
          lime: "#84cc16",
          orange: "#fb923c",
        },
      },
      backgroundImage: {
        "grad-amber": "linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)",
        "grad-cyan": "linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)",
        "grad-rose": "linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)",
        "mesh-hero":
          "radial-gradient(at 20% 20%, #f59e0b22 0px, transparent 50%), radial-gradient(at 80% 80%, #22d3ee15 0px, transparent 50%), radial-gradient(at 50% 50%, #a78bfa10 0px, transparent 60%)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-ring": {
          "0%": {
            transform: "scale(0.95)",
            boxShadow: "0 0 0 0 rgba(245,158,11,0.5)",
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 10px rgba(245,158,11,0)",
          },
          "100%": {
            transform: "scale(0.95)",
            boxShadow: "0 0 0 0 rgba(245,158,11,0)",
          },
        },
      },
    },
  },
  plugins: [],
};
