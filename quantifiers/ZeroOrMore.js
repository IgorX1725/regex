const text1 = 'De longe avistei o fogo e uma pessoa gritando: FOGOOOO'
const text2 = 'There is a big fog in NYC'

// * -> zero or more (optional)

const regex = /fogo*/gi

console.log(text1.match(regex))
console.log(text2.match(regex))