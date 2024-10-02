import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  automock: false,
  rootDir: "./src",
  coverageDirectory: "../coverage",
  testRegex: ".test.ts$",
};
export default config;
