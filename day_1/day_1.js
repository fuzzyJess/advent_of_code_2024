const leftNumbers = [];
const rightNumbers = [];
const differences = [];

function splitLists(lists) {
    lists.forEach((pair) => {
        leftNumbers.push(pair[0]);
        rightNumbers.push(pair[1]);
    });
}

function getLowestNumbers(){
    const lowestLeft = Math.min(...leftNumbers);
    const lowestRight = Math.min(...rightNumbers);
    // find where these numbers are...
    let lowestLeftIndex = leftNumbers.findIndex((number) => number === lowestLeft);
    let lowestRightIndex = rightNumbers.findIndex((number) => number === lowestRight);
    /// ...and remove from arrays
    leftNumbers.splice(lowestLeftIndex, 1);
    rightNumbers.splice(lowestRightIndex, 1);
    return [lowestLeft, lowestRight];
}

function findDifference(pairs) {
    splitLists(pairs);
    console.log(leftNumbers, "<-- leftNumbers");
    console.log(rightNumbers, "<-- rightNumbers");
    let lowestNumbers = [];
    for (let i = 0; i < pairs.length; i++) {
        lowestNumbers = getLowestNumbers();
        console.log(lowestNumbers, "<-- lowestNumbers");
        differences.push(Math.abs(lowestNumbers[0] - lowestNumbers[1]));
    };
    console.log(differences, "<-- differences");
    return differences.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

exporting: module.exports = {findDifference};