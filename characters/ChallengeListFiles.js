const text = 'lista de arquivos mp3 : jazz.mp3 , rock.mp3 , podcast.mp3 , blues.mp3 '


regexmp3 = /\.mp3/g

console.log(text.match(regexmp3).length)
console.log(text.match(/\w+\.mp3/g))