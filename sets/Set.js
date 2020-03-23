// to define a class (or set) from characters use []

const text = '1,2,3,4,5,6,a.b c!d?e[f'

const regexPairs = /[02468]/g

console.log(text.match(regexPairs))


text2 = 'João não vai passear na moto.'
const regexAccent = /n[aã]/g

console.log(text2.match(regexAccent))