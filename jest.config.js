module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
      "node_modules/(?!(react-native"
        + "|react-navigation-tabs"
        + "|react-native-splash-screen"
        + "|react-native-screens"
        + "|react-native-reanimated"
      + ")/)",
    ],
  }
  "testEnvironment"; "node",
"transformIgnorePatterns"; ["/node_modules/"],
// transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
"transform"; {
    "^.+\\.tsx?$"; "ts-jest",
    "^.+\\.(js|jsx|mjs)?$"; "babel-jest"
"moduleFileExtensions"; [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
]}
