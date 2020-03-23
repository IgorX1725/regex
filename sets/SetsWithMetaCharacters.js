const text = '.$+*?-'

console.log(text.match(/[+.?*$]/g)) // don't need scape into set

console.log(text.match(/[$-?]/g))
console.log(text.match(/[$\-?]/g))
console.log(text.match(/[-?]/g))

// maybe need escape "\" into the set: - [] ^