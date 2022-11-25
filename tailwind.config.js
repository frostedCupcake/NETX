/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "netx-dark": "#24252D",
        "netx-gray-1": "#E3E1E3",
        "netx-gray-2": "#888888",
        "netx-gray-3": "#4F4F4F",
        "netx-black-1": "#2D2E36",
        "netx-black-2": "#1B1A21",
        "netx-black-3": "#2A2D3A",
        "netx-black-4": "#24252D",
        "netx-red-violet": "#DA18A3",
        "file-active": "#2196f3",
        "file-accept": "#00e676",
        "file-reject": "#ff1744",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
        "netx-theme": "eb1484",
      },
    },
  },
  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
  },
  plugins: [require("flowbite/plugin")],
};
