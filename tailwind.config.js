/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0F0F0F',
        espresso: '#121212',
        'toasted-gold': '#C4A484',
        'creamy-white': '#F5F5F5',

        // Brand Colors
        'fro-pink': '#C08497',      // Text catchlight
        'fro-mocha': '#8D6E63',     // Coffee splashes
        'fro-bean': '#3E2723',      // Dark contrast
        'fro-bg': '#C88EA7',        // Global Background
        'fro-dark': '#5D4037',      // Buttons/accents
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        script: ['"Playfair Display"', 'serif'], // Implicitly adding serif for "Best to go with" title validation
      },
      backgroundImage: {
        'grain': "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
      keyframes: {
        'marquee-reverse': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      }
    },
  },
  plugins: [],
}
