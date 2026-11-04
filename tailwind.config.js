/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef5fa',
          100: '#d4e6f2',
          200: '#a9cdf0',
          300: '#7eb4ed',
          400: '#5a9bd9',
          500: '#3a82c4',
          600: '#2a72a6',
          700: '#21638b',
          800: '#1a5278',
          900: '#144166',
        },
      },
      keyframes: {
        'slide-up': {
          from: { transform: 'translateY(16px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in': {
          from: { transform: 'translateX(-16px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'splash-fill': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.4s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        'bounce-in': 'bounce-in 0.5s ease-out',
        shimmer: 'shimmer 2s linear infinite',
        'splash-fill': 'splash-fill 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
