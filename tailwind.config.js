/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "413px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgSidebar: "var(--sidebar-bg)",
        textSidebar: "var(--sidebar-text)",
        textSidebarActive: "var(--sidebar-text-active)",
        lightGray: "var(--light-gray)",
        lightGreen: "var(--light-green)",
        lightGratText1: "var(--light-gray-text1)",
        lightGratText2: "var(--light-gray-text2)",
      },
    },
  },
  plugins: [require("daisyui")],
};
