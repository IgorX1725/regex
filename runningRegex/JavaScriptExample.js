const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regxNine = RegExp('9')

console.log('Methods of RegExp...')
console.log(regxNine.test(text))
console.log(regxNine.exec(text))

const regexLetters = /[a-f]/g
console.log("Methods of String...")
console.log(text.match(regexLetters))
console.log(text.search(regexLetters))
console.log(text.replace(regexLetters, "I found"))
console.log(text.split(regexLetters))

