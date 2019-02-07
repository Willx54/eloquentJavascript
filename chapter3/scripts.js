

// Minimum
const min = (a,b) => {
    if (a<b) {
        return a
    } else if (b<a) {
        return b
    } else {
        return 'Both numbers are equal';
    }
}

// console.log(min(3,3));

// Recursion
function isEven(num) {
    if (num === 0) return true;
    else if (num === 1) return false;
    else if (num < 0) return isEven(-num);
    else return isEven(num - 2);
}

// console.log(isEven(-10))

// Bean Counting

const countsBs = (theString) => {
    return countChar(theString, 'B')
}

const countChar = (theString, theLetter) => {
    let count = 0;
    for (let i = 0; i < theString.length; i++) {
        console.log(theString[i]);
        if (theString[i] === theLetter) count++;
    }
    return count;
}

console.log(countsBs('BeBeBaBeBabfbfbfbx'));
console.log(countChar('fnnnnrr', 'f'));
