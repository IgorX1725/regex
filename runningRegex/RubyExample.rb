text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

# first way
regexNine = Regexp::new('9')
puts regexNine.match(text)

# secound way
regexNine = %r{9}
puts regexNine.match(text)

#return true or false
puts regexNine =~ '894'

regexLetters = /[a-f]/
puts text.scan(regexLetters).join(' ')

puts text.split(/,/).join(' ')

print text.split(/[aeiou]/)