import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#1A2A4A',
          mid: '#234F7E',
          light: '#1D4370',
        },
        cream: {
          soft: '#F5F8FC',
          gray: '#E6EBF2',
        },
        eagles: {
          green: '#004C54',
          silver: '#A5ACAF',
        },
        liberty: {
          red: '#990000',
          navy: '#002868',
        },
        olga: {
          wood: '#8B6914',
          teal: '#2D9596',
        },
        luke: {
          gold: '#C9A84C',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
