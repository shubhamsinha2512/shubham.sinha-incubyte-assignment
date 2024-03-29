const { add } = require("./index");

describe("String Calculator", () => {

    it('1. Should return 0 for an empty string', () => {
        const testString = "";
        const acutalResult = add(testString);
        const expectedResult = 0;

        expect(acutalResult).toBe(expectedResult);
    });

    it('2. Should return the number itself for a single number', () => {
        const testString = "1";
        const acutalResult = add(testString);
        const expectedResult = 1;

        expect(acutalResult).toBe(expectedResult);
    });

    it('3. Should return the sum of two numbers separated by comma', () => {
        const testString = "10,20";
        const acutalResult = add(testString);
        const expectedResult = 30;

        expect(acutalResult).toBe(expectedResult);
    });
})