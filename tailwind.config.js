module.exports = {
    mode: 'jit',
    purge: ['./app/**/*.{js,ts,tsx,md,mdx}', './remix.config.js'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          colorBorder: "var(--colorBorder)",
          colorBrown: "var(--colorBrown)",
          colorBrownActive: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--colorBrown), ${opacityValue})`
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--colorBrown), var(${opacityVariable}, 1))`
            }
            return `rgb(var(--colorBrown))`
          },
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
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };