//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num < max && num > secondMax) {
            secondMax = num;
        }
    }

    return secondMax;
}

