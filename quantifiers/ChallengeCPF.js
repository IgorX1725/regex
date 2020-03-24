const cpfs = `CPF dos aprovados
 - 600.567.890-12
 - 765.998.345-23
 - 123.123-123.12`

 const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

 console.log(cpfs.match(regex))