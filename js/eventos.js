
function trocaImg(){
//apenas para cunho de testes
setTimeout(function () {
  if (num == 1)
    {
      img.src = "img/whatsCor.png";
    }
  else if (num == 2)
    {
      img.src = "img/whats.png";
    }
    //garante que num fique alternando entre 1 e 2
    num = (num % 2) + 1;
  }, 1700);
}

function aviso(){
  alert("Olá, só quero avisar que o site está em construção ainda.");
 document.getElementById('manu').innerHTML="O site está em processo de construção";
}