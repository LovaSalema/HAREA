/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFiles: [
    "<rootDir>/src/setupTests.ts"
  ],
  moduleNameMapper: {
    "@_types(.*)$": "<rootDir>/src/types$1",
    "@graphql(.*)$": "<rootDir>/src/graphql$1",
    "@models(.*)$": "<rootDir>/src/models$1",
    "@hooks(.*)$": "<rootDir>/src/hooks$1",
  }
};
