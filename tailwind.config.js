/** @type {import('tailwindcss').Config} */

function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${varName}), ${opacityValue})`
    } else return `rgb(var(${varName})`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'blob': `url('./src/assets/animatedblob.gif')`,
        'table': `url('./src/assets/table.svg')`,
        'not-found': 'url(./src/assets/notfound.gif)',
        'wavy-lines': 'url(./src/assets/backgrounds/wavy-lines.svg)',
        'wavy-lines2': 'url(./src/assets/backgrounds/wavy-lines2.svg)',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(240, 230, 140, 0.35)",
          "0 0px 65px rgba(240, 230, 140, 0.2)"
        ]
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
        }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
