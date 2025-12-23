/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00F0FF',
          dim: '#40C4FF',
          glow: 'rgba(0, 240, 255, 0.5)',
        },
        navy: {
          950: '#0A0E14', 
          900: '#1B2430',
          800: '#2A3645',
        },
        slate: {
          100: '#F0F4F8',
          200: '#E1E8ED',
          300: '#D2DCE6',
          400: '#8D99AE',
          500: '#6C7A8F',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        cyan: {
          400: '#40C4FF',
          500: '#00F0FF',
        }
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        cursive: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'marquee': 'marquee 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(10, 14, 20, 0.7)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border-bottom': '1px solid rgba(240, 244, 248, 0.05)',
        },
        '.text-glow': {
          'text-shadow': '0 0 10px rgba(0, 240, 255, 0.5)',
        },
        '.box-glow': {
          'box-shadow': '0 0 20px rgba(0, 240, 255, 0.15)',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
      })
    }
  ]
}
