/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'catalyst-bg': '#0a0a0f',
        'catalyst-purple': '#6c63ff',
        'catalyst-cyan': '#38bdf8',
        'catalyst-text': '#f0eeff',
        'catalyst-muted': '#8b8aa8',
        'catalyst-border': 'rgba(255,255,255,0.07)',
      },
    },
  },
  plugins: [],
}
