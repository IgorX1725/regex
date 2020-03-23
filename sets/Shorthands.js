const text = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(text.match(/\d/g)) // numbers [0-9]
console.log(text.match(/\D/g)) //non-numbers [^0-9]

console.log(text.match(/\w/g)) //characters [a-zA-Z0-9_]
console.log(text.match(/\W/g)) // non-characters [^a-zA-Z0-9_]

console.log(text.match(/\s/g)) //spaces [ \t\n\r\f]
console.log(text.match(/\S/g)) //spaces [^ \t\n\r\f]