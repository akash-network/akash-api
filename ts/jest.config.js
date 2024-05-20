const common = {
  transform: {
    "^.+\\.(t|j)s$": ["ts-jest", { tsconfig: "./tsconfig.json" }],
  },
  rootDir: ".",
  setupFiles: ["./test/setup.ts"],
};

module.exports = {
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,ts}",
    "!<rootDir>/src/generated/**/*",
    "!<rootDir>/src/deprecated/**/*",
    "!<rootDir>/src/patch/index.*",
    "!<rootDir>/src/index.*",
  ],
  projects: [
    {
      displayName: "unit",
      ...common,
      testMatch: ["<rootDir>/src/**/*.spec.ts"],
      setupFilesAfterEnv: ["./test/setup-unit-tests.ts"],
    },
    {
      displayName: "functional",
      ...common,
      testMatch: ["<rootDir>/test/functional/**/*.spec.ts"],
      setupFilesAfterEnv: ["./test/setup-functional-tests.ts"],
    },
  ],
};
