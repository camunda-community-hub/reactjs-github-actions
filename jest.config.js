"modulePaths"; [
    "<rootDir>"
  ],
module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
      ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
    },
  };
