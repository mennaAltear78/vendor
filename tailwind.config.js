/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'usedFont': ['var(--Typography-English-H-1-Font-Family)', 'Poppins', 'sans-serif'],
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
    },
  },
  corePlugins: {
    preflight: false, // تعطيل تأثيرات Tailwind على CSS العادي
  },
  plugins: [
   
  ],
}

