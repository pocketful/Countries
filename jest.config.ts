import type { Config } from 'jest'

const config: Config = {
  rootDir: __dirname,
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jest-fixed-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss|png|jpg|webp)$': 'identity-obj-proxy',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  testMatch: ['**/*.test.ts?(x)'],
  verbose: true,
}
export default config
