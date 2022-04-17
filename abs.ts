const isPositive = (num: number) => num > 0 ? true : false
const abs = (num: number) => num > 0 ? num : num * -1

console.log(isPositive(5))
console.log(isPositive(-5))

console.log(abs(5))
console.log(abs(-3))
