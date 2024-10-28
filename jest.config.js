module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/ios/',
    '<rootDir>/android/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-button)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
