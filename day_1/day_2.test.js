const {findSimilarity} = require('./day_2');
const puzzleData = require('./refactored-data');

describe("findSimilarity", () => {
    test("when only number does not appear in right list returns 0", () => {
        const exampleData1 = [[3, 4]];
        expect(findSimilarity(exampleData1)).toBe(0);
    });
    test("when only number does appear once in right list returns same number", () => {
        const exampleData2 = [[3, 3]];
        expect(findSimilarity(exampleData2)).toBe(3);
    });
    test("when only number appears more than once in right list returns correctly multiplied number", () => {
        const exampleData2 = [[3, 4], [2, 3], [0, 3]];
        expect(findSimilarity(exampleData2)).toBe(6);
    });
    test("when number appears multiple times in right list returns correct similarity", () => {
        const exampleData3 = [[3, 4], [4, 3], [2, 5], [1, 3], [3, 9], [3, 3]];
        expect(findSimilarity(exampleData3)).toBe(31);
    });    
    test("when given challenge data returns correct similarity", () => {        
        expect(findSimilarity(puzzleData)).toBe(24941624);
    });  
});