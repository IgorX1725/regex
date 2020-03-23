const text = 'ABC [abc] a-c 123'

console.log(text.match(/[a-c]/g))
console.log(text.match(/a-c/g))

console.log(text.match(/[A-z]/g)) // the interval use the order from UNICODE table


// console.log(text.match(/[a-Z]/g))  error because invalid order