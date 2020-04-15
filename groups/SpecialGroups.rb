text = 'supermercado superação hiperMERCADO'

puts text.scan(/(?:super)[\wÀ-ú]/i).join(' ')

#Positive Lookbehind
puts text.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

#Negative Lookbehind
puts text.scan(/(?<!super)mercado/i).join(' ')