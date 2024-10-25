

function nextReverseString(str) {
    return str.split('').reverse().join('');
}

function ispolindrom(str) {
    
    const newString = nextReverseString(str)
    return str.toLowerCase() === newString.toLowerCase()
}
const nextInputString = "Кабак";


const nextResult = ispolindrom(nextInputString);

console.log(nextResult);





