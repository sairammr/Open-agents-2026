/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'agent-active': '#22c55e',
        'agent-sleep': '#6366f1',
        'agent-error': '#ef4444',
      },
    },
  },
  plugins: [],
}
