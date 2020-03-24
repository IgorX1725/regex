const phoneNumbers = `Lista de contatos:
- (11) 98756-1212
- 78765-4321
- (85) 99988-7766
- (21) 3261-8899
- (12) 3261-8899`

const regex = /(\(\d{2}\))? \d{4,5}-\d{4}/g


console.log(phoneNumbers.match(regex).map(e=>e.trim()))