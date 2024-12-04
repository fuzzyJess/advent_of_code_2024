function findSimilarity(lists) {
    const leftNumbers = [];
    const rightNumbers = [];
    let similarities = 0;
    let totalSimilarity = 0;

    function splitLists(lists) {
        lists.forEach((pair) => {
            leftNumbers.push(pair[0]);
            rightNumbers.push(pair[1]);
        });
    }
    splitLists(lists);
    leftNumbers.forEach((number) => {
        rightNumbers.forEach((rightNumber) => {
            if (number == rightNumber) {
                similarities++;
            }
        });
        totalSimilarity += similarities * number;
        similarities = 0;
    });

    return totalSimilarity;
}
exporting: module.exports = {findSimilarity};