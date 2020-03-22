// one byte (8 bits) - 256 characteres
// Symbols, punctuation, A-Z, a-z, 0,9

// two bytes (16 bits) - 65500 + characteres
// +Symbols, +punctuation, A-Z, a-z, 0-9

//https://unicode-table.com/

const text ='aʬc௵d'

console.log(text.match(/\u02Ac|\u0BF5/g))