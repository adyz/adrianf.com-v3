module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,ts,tsx,md,mdx}', './remix.config.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorBorder: "var(--colorBorder)",
        colorBrown: "var(--colorBrown)",
        colorLightBrown: "var(--colorLightBrown)",
        colorLigherBrown: "var(--colorLigherBrown)",
        colorSuperLigherBrown: "var(--colorSuperLigherBrown)",
        colorBg: "var(--colorBg)",
        colorRed: "var(--colorRed)",
        colorGreen: "var(--colorGreen)",
        colorWhite: "var(--colorWhite)",
        colorLogoBody: "var(--colorLogoBody)",
        colorLogoLeg: "var(--colorLogoLeg)",
        colorLogoWing: "var(--colorLogoWing)",
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'body': ['Roboto', 'Arial', 'Helvetica', 'sans-serif']
      },
      keyframes: {
        fadeInOut: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        dropFade: {
          '0%': {
            opacity: '0',
            top: 0
          },
          '100%': {
            opacity: '1',
            top: '100%'
          }
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 1s ease',
        dropFade: 'dropFade 1s ease'
      },
      dropShadow: {
        'left-shadow': '-6px -9px 0 rgba(0,0,0,.05)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};