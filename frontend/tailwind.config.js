/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui:{
    themes: [
      {
        think: {
          primary: "#2563eb", // blue-600
          secondary: "#1f2937", // gray-800
          accent: "#3b82f6", // blue-500
          neutral: "#0b0f14", // near-black
          "base-100": "#0b0f14", // app background
          "base-200": "#111827", // gray-900
          "base-300": "#1f2937", // gray-800
          "base-content": "#e5e7eb", // gray-200
          info: "#60a5fa",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      "dark",
    ],
  }
} 