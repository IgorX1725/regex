const text1 = "O josé Simão é muito engraçado ... hehehehehe"
console.log(text1.match(/(he)+/g))

const text2 = "http://www.site.info www.escola.ninja.br google.com.ag"
console.log(text2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))