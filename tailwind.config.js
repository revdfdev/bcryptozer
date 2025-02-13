/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 2s linear infinite',
      },
      colors: {
        light: "#f2f2f2",
        dark: "#080808",
        brakeLightTrails: {
          50: "#dde11b",
          100: "#e8cc17",
          200: "#f59110",
          300: "#fd4f09",
          400: "#fc0d04",
          500: "#f10230",
          600: "#da0357",
          700: "#b8066b",
          800: "#8e0968",
          900: "#5f0951",
        },
        sambucus: {
          50: "#c32461",
          100: "#ae277c",
          200: "#7d2985",
          300: "#432460",
          400: "#221b42",
          500: "#13152c",
          600: "#0d1220",
          700: "#0a101c",
          800: "#09111e",
          900: "#081224",
        },
        appleCrisp: {
          50: "#7ddf27",
          100: "#9ae530",
          200: "#cfee41",
          300: "#f2e94f",
          400: "#f0c556",
          500: "#e49d55",
          600: "#cd704a",
          700: "#ad4338",
          800: "#86242e",
          900: "#5b1328",
        },
        mammothMountain: {
          50: "#cf27c7",
          100: "#9f2fc4",
          200: "#553ab0",
          300: "#40549c",
          400: "#3f6a89",
          500: "#396e77",
          600: "#2f6666",
          700: "#235753",
          800: "#184946",
          900: "#0e393b",
        },
      },
    },
  },
  plugins: [],
}

