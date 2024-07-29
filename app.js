const express = require('express')
const app = express()
const port = 3000

function sendMail(name, email, subject, message) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.set('Authorization', 'Basic ' + btoa('9bb82eb51bcd3c934ee1e112942555ca'+":" +'d5435c09bb4fb03a67d6011a89689cbf'));
  
  
  const data = JSON.stringify({
     "Messages": [{
      "From": {"Email": "<vcarvalhoestanislau@gmail.com>", "Name": "<Vinicius>"},
      "To": [{"Email": email, "Name": name}],
      "Subject": subject,
      "TextPart": message,
      
    }]
  });
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };
  
  fetch("https://api.mailjet.com/v3.1/send", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
//auth: {username: '<9bb82eb51bcd3c934ee1e112942555ca>', password: '<d5435c09bb4fb03a67d6011a89689cbf>'},

//gerar número
function gerarNumeroAleatorio (){return Math.floor(Math.random() * 10000) + 99999 };

app.get('/api/sendemail/', function (req, res) {
  // Desestruturando os campos do objeto req.body
// Implemente sua proteção contra spam ou outras verificações aqui.

  var armazenado = gerarNumeroAleatorio();
  sendMail('vinicius', 'vcarvalhoestanislau@gmail.com', 'CODIGO DE VERIFICAÇÃO','Seu codigo é' + armazenado);
});
app.use((request, response, next)=>{
  response.header("Acces-Control-Allow-Origin", "*")
  response.header("Acces-Control-Allow-Methods", "GET, HEAD, OPTIONS,POST,PATCH,DELETE");
  response.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept,Authorization");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})