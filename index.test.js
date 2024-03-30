const { add } = require("./index");
const TEST_CASES = require("./tests/scenarios/SUCCESS_CASES.json")
const EXCEPTION_CASES = require("./tests/scenarios/EXCEPTION_CASES.json")

describe("String Calculator Success Cases", () => {

    for(const CASE of TEST_CASES) {
        it(`${CASE.name}`, () => {
            const testString = CASE.scenario;
            const acutalResult = add(testString);
            const expectedResult = CASE.expectedResult;
    
            expect(acutalResult).toBe(expectedResult);
        });
    }
})

describe("String Calculator Exception Cases", () => {

    for(const CASE of EXCEPTION_CASES) {
        it(`${CASE.name}`, () => {
            const testString = CASE.scenario;
            const expectedResult = CASE.expectedResult;
    
            expect(() => add(testString)).toThrowError(expectedResult);
        });
    }
})