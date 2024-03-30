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

    it('4. Should throw exception is input string contains negative numbers', () => {
        const testString = "10,-2,5,1,-4,-5";
        expect(() => add(testString)).toThrowError("Negative number are not allowed -2,-4,-5");
    });

    it('5. should allow new lines between numbers', () => {
        const testString = "1\n2,3";
        const acutalResult = add(testString);
        const expectedResult = 6;

        expect(acutalResult).toBe(expectedResult);
    });

    it('6. Should support change of delimiters', () => {
        const testString = "//;\n1;2";
        const acutalResult = add(testString);
        const expectedResult = 3;

        expect(acutalResult).toBe(expectedResult);
    });
})