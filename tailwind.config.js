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
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };