/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0a0a0f',
        'space-dark': '#12121a',
        'space-gray': '#1a1a2e',
        'neon-cyan': '#00fff5',
        'neon-purple': '#bf00ff',
        'electric-blue': '#4d7cff',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b0',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'syne': ['Syne', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 245, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 255, 245, 0.8)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}
