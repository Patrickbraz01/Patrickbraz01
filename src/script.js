var numeroSecreto = parseInt(Math.random() * 101);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  }
  if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Errou, o número é menor que " + chute;
  }
  if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Errou, o número é maior que " + chute;
  } else if (chute > 100 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  }
}
