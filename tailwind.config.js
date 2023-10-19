/** @type {import('tailwindcss').Config} */

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
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
        }
      },
      backgroundImage: {
        'blob': `url('./src/assets/animatedblob.gif')`,
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-fill)',
        }
      },
      borderColor: {
        skin: {
          base: 'var(--color-border-base)',
          muted: 'var(--color-text-muted)',
        },
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

