/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        graphite: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#c8c8c8',
          300: '#a0a0a0',
          400: '#6e6e6e',
          500: '#4a4a4a',
          600: '#2f2f2f',
          700: '#222222',
          800: '#1a1a1a',
          900: '#141414',
          950: '#0d0d0d',
        },
        copper: {
          50: '#fbf5ef',
          100: '#f3e2d3',
          200: '#e6c4a8',
          300: '#d4a17a',
          400: '#c4844f',
          500: '#b8732e',
          600: '#a05c25',
          700: '#834a20',
          800: '#6b3d1e',
          900: '#523218',
        },
        ivory: {
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#ede7dc',
          400: '#e0d8ca',
          500: '#d0c5b3',
        },
        steel: {
          50: '#f0f2f4',
          100: '#dfe3e7',
          200: '#c4cbd1',
          300: '#9fa9b2',
          400: '#788490',
          500: '#5e6a76',
          600: '#4a545f',
          700: '#3d4650',
          800: '#2e353d',
          900: '#1f242a',
        },
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
