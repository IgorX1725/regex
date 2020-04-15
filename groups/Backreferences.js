const text1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(text1.match(/<(\w+)>.*<\/\1>/g))

const text2 = 'Lentamente é mente muito lenta.'
console.log(text2.match(/(lenta)(mente).*\2.*\1/gi))
console.log(text2.match(/(?:lenta)(mente).*\1/gi)) // ?:don't save the group in the memory

console.log(text2.match(/(lenta)(mente)/gi))
console.log(text2.match(/(lenta)(mente)?/gi))
console.log(text2.replace(/(lenta)(mente)/gi,'$1'))
console.log(text2.replace(/(lenta)(mente)/gi,'$2'))
console.log(text2.replace(/(lenta)(mente)/gi,'test : $2'))
console.log(text2.replace(/(lenta)(mente)/gi,'$2$1'))