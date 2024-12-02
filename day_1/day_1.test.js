const {findDifference} = require('./day_1');

describe("findDifference", () => {
    test("when array contains only one pair returns correct difference", () => {
        const exampleData = [[3, 4]];
        expect(findDifference(exampleData)).toBe(1);
    });
    test("when array contains two pairs returns correct difference", () => {
        const exampleData = [[3, 4], [4, 3]];
        expect(findDifference(exampleData)).toBe(0);
    });
    test.only("when array contains multiple pairs returns correct difference", () => {
        const exampleData = [[3, 4], [4, 3], [2, 5], [1, 3], [3, 9], [3, 3]];
        expect(findDifference(exampleData)).toBe(11);
    });
});