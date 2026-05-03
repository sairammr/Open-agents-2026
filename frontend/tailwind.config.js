/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper:       '#E6E7DF',
        'paper-warm':'#ECEAE0',
        'paper-pure':'#F2F2EC',
        ink:         '#0E0E0C',
        'ink-soft':  '#2A2A26',
        'ink-mute':  '#6B6B63',
        'ink-faint': '#A8A89F',
        sage:        '#A8C9A1',
        lavender:    '#C9B8E5',
        peach:       '#F5A574',
        butter:      '#F0D060',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        ui:      ['var(--font-ui)', '-apple-system', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
