import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C49A3C',
          hover: '#E8C76A',
          surface: '#1A1A1A',
          panel: '#242424',
          text: '#F5F0E8',
          muted: '#888888',
        },
      },
      boxShadow: {
        premium: '0 20px 80px rgba(0, 0, 0, 0.35)',
        glow: '0 0 35px rgba(196, 154, 60, 0.18)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(196,154,60,0.18), transparent 28%)',
        'hero-fade': 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05), transparent 18%)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Barlow', 'Barlow Condensed', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
