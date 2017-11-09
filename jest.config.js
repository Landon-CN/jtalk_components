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
    // projects: ['./components'],
    setupFiles: ['./enzyme.config.js'],
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.{ts,tsx}']
}