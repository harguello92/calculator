import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/']
};

export default config;
