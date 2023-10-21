/** @type {import('tailwindcss').Config} */
function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${varName}), ${opacityValue})`
    }
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
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity("--color-fill"),
        }
      },
      borderColor: {
        skin: {
          base: withOpacity("--color-border-base"),
          muted: withOpacity("--color-text-muted"),
        },
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

