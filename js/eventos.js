<html>
<body>
<img id="teste" src="codigoHTML.jpg" width="160" height="120" onLoad="trocaImg();">

<script>
var num = 2;
var img = document.getElementById("teste");
function trocaImg(){
//apenas para cunho de testes
setTimeout(function () {
  if (num == 1)
    {
      img.src = "codigo.jpg";
    }
  else if (num == 2)
    {
      img.src = "codigoHTML.jpg";
    }
    //garante que num fique alternando entre 1 e 2
    num = (num % 2) + 1;
    }, 2500);
}
</script>
</body>
</html>