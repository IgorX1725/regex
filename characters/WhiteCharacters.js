// \t tab
// \n linebreak
// \s space

const text = `
ca	r
r	o s!
`

regexWhiteCharacters = /ca\tr\nr\to\ss!/

console.log(text.match(regexWhiteCharacters))