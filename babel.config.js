module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react', // Make sure this is included
    '@babel/preset-typescript', // If you are using TypeScript
  ],
  plugins: [
    '@babel/plugin-transform-typescript',
    [
      'module:react-native-dotenv',
      {
        path: '.env',
      },
    ],
  ],
};
