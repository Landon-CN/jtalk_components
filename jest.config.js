const collectCoverage = process.argv[process.argv.length - 1] !== '--watchAll';

module.exports = {
    transform: {
        "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
        "^.+\\.js?$": '<rootDir>/node_modules/babel-jest',
        "^.+\\.(css|less)$": "./jest/less.js"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    setupFiles: ['./enzyme.config.js'],
    collectCoverage: collectCoverage,
    collectCoverageFrom: ['components/**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: ['components/index.ts'],
    mapCoverage: true
}