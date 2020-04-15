const text = "João é calmo, mas no transito fica nervoso."

console.log(text.match(/[\wÀ-ú]+/gi))

//Positive lookahead
console.log(text.match(/[\wÀ-ú]+(?=,)/gi))
console.log(text.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(text.match(/[\wÀ-ú]+(?=\, mas)/gi))

//Negative lookahead
console.log(text.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(text.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))