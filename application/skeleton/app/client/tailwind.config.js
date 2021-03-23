/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const tailwindConfig = require('@inviqa/viper-ui/tailwind.config');

const { theme } = tailwindConfig;

tailwindConfig.purge = {
  content: [
    './src/**/*.{tsx,css,mdx}',
    `${path.dirname(require.resolve('@inviqa/viper-ui/package.json'))}/src/**/*.{tsx,css}`
  ]
};

tailwindConfig.theme = {
  ...theme,
  colors: {
    ...theme.colors,
    button: {
      ...theme.colors.button,
      'primary-alt': theme.colors['brand-alt'].accent
    },
    panels: {
      accent: {
        DEFAULT: theme.colors['brand-alt'].primary,
        text: theme.colors.white
      }
    }
  },
  zIndex: {
    ...theme.zIndex,
    header: 1,
    menu: 11,
    'footer-bg': -1
  },
  extend: {
    gridTemplateColumns: {
      footer: '1fr 2fr 1fr'
    },
    backgroundImage: () => ({
      'footer-logo': 'url("/images/logo.svg")',
      'footer-bg': 'url("/images/houndstooth.svg")'
    }),
    backgroundSize: () => ({
      20: '5rem',
      40: '10rem'
    }),
    backgroundPosition: () => ({
      'center-bottom': 'center 100%'
    })
  }
};
module.exports = tailwindConfig;
