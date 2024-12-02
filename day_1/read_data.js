const fs = require('fs');
// creates new file called refactored-data.txt to hold move info in separate arrays.

try {
    const data = fs.readFileSync('./data.txt', 'utf-8');
    const arr = data.split(/\r?\n/);
    const arrPairs = [];
    for (let i = 0; i < arr.length; i++) {
        arrPairs.push(arr[i].split("   "));
    }
    // arrPairs now contains arrays of the two pairs from each list
    const stringyPairs = JSON.stringify(arrPairs);
    fs.writeFileSync("refactored-data.txt", stringyPairs)
} catch (err) {
    console.error(err);
}