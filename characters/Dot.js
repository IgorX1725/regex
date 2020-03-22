// . is a joker, valid to just a position

const text = '1,2,3,4,5,6,7,8,9'

console.log(text.match(/1.2/g))
console.log(text.match(/1..2/g))
console.log(text.match(/1..,/g))

const scores = '8.3,7.1,8.8,10.0'

console.log(scores.match(/8../g))

console.log(scores.match(/.\../g))