function findGCD(a, b) {
let min = Math.min(a,b) 
let result = 1
for (let i=2; i<=min; i++) {
if (a%i===0 &&  b%i===0) {
result = i
}
}
return result 
}
console.log(findGCD(48,18)) 