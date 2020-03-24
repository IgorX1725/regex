const text1 = 'De longe avistei o fogo e uma pessoa gritando: FOGOOOO'
const text2 = 'There is a big fog in NYC'

// + -> one or more 

const regex = /fogo+/gi

console.log(text1.match(regex))
console.log(text2.match(regex))

const text3 = 'Os núeros: 0123456789.'

console.log(text3.match(/[0-9]/g))
console.log(text3.match(/[0-9]+/g))