return new Promise((resolve, reject) => {

  const xhr = new XMLHttpRequest();
  
  xhr.open(
    "GET",
    "http://localhost:3000/api/sendemail",
    true
);
  xhr.onreadystatechange = function(){
    console.log(this.responseText);
  };
  xhr.send();
})

 // 1--GUARDAR AS INFORMAÇOES 
 let email = document.getElementById('email')
 let nome = document.getElementById('name')
 //2--GERAR UM NÚMERO
 function gerarNumeroAleatorio() {
     return Math.floor(Math.random() * 10000) + 99999;
    }
    let armazenado = gerarNumeroAleatorio()
    //3--FAZER O BOTÃO FUNCIONAR
    function continuar(){
      if(email.value ==0 || nome.value == 0){
        alert('[ERRO] coloque seus dados abaixo')
      } else{
        //4--CRIA UMA NOVA PAGINA
        window.location.href = 'index2.html' ; 
      }
    }
    //5-- VERIFICIANDO SE A PESSOA COLOCOU O EMAIL CERTO $index2.html
       function abrir(){
        let na = document.getElementById('na')
        na.innerHTML = 'O usuario ' + nome +' Utiliza o email ' + email +'?'
}
       
        //5--ENVIANDO O CODIGO PARA O USUARIO
        function ver(){
        window.location.href = 'app.js' ; 
        let res = document.getElementById('res')
        res.innerHTML = 'Seu codigo é ' + armazenado
      }      
 //6--VERIFICAR SE O NÚMERO ENVIADO FOI O QUE A PESSOA DIGITOU
  let verificar = document.getElementById('verificação')
  function proximo(){
  if(verificar.value == armazenado){
    alert('Vc passou')
    //7--APÓS VERIFICAR ABRIR OUTRA PAGINA
    window.location.href = 'index3.html' ; 
    function abrir(){
        let resposta = document.getElementById('res1')
        resposta.innerHTML = 'Olá' + nome
    }
  } else if(verificar.value == 0){
    alert('[ERRO] digite algum codigo')
  } else{
    alert('[ERRO] o codigo está errado, tente novamente')
}
}
