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
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          extreme: withOpacity("--color-fill-extreme"),
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          'button-accent': withOpacity("--color-button-accent"),
          'button-muted': withOpacity("--color-button-muted"),
          'button-accent-hover': withOpacity("--color-button-accent-hover"),
          'fill-extreme': withOpacity("--color-fill-extreme"),
        }
      },

      backgroundImage: {
        'blob': `url('./src/assets/animatedblob.gif')`,
        'table': `url('./src/assets/table.svg')`
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(240, 230, 140, 0.35)",
          "0 0px 65px rgba(240, 230, 140, 0.2)"
        ]
      },
      borderColor: {
        skin: {
          base: withOpacity("--color-border-base"),
          muted: withOpacity("--color-text-muted"),
        },
      },

      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
        }
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

