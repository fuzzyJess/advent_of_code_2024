const {findDifference} = require('./day_1');
const puzzleData = require('./refactored-data');

describe("findDifference", () => {
    test("when array contains only one pair returns correct difference", () => {
        const exampleData1 = [[3, 4]];
        expect(findDifference(exampleData1)).toBe(1);
    });
    test("when array contains two pairs returns correct difference", () => {
        const exampleData2 = [[3, 4], [4, 3]];
        expect(findDifference(exampleData2)).toBe(0);
    });
    test("when array contains multiple pairs returns correct difference", () => {
        const exampleData3 = [[3, 4], [4, 3], [2, 5], [1, 3], [3, 9], [3, 3]];
        expect(findDifference(exampleData3)).toBe(11);
    });
    test.only("when array contains complete challenge data returns correct difference", () => {
        expect(findDifference(puzzleData)).toBe(2086478);
    });
});