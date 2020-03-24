const emails = `
O email dos convidados são:
- fulano@email.com.br
- xico@gmail.com.br
- 2xico@gmail.com
- rafa.cardoso@email.br
- felipe_figado@thereemail.info.br
`

const regex = /[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g

console.log(emails.match(regex))