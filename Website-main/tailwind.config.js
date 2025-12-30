/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7', // Brand Core
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          400: '#fbbf24', // Warm Accent
          500: '#f59e0b',
          600: '#d97706',
        },
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
      screens: {
        'xs': '375px',
        'sm': '481px',
        'md': '769px',
        'lg': '1281px',
        'xl': '1536px',
        '2xl': '1600px',
      },
      maxWidth: {
        container: '1280px',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "grid-flow": "grid-flow 15s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        orbit3d: "orbit3d var(--duration, 4s) linear infinite",
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "grid-flow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        orbit3d: {
          "0%": { transform: "rotateX(20deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(20deg) rotateY(-360deg)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotateX(10deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(-10deg) rotateY(10deg)" },
        },
      },
    },
  },
  plugins: [],
}

