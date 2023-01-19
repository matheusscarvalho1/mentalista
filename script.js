var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3
while (tentativas>0){
  var chute = parseInt(prompt ("Você tem 3 chances de adivinhar o número de 1 a 10 que eu estou pensado:"))

      if (chute == numeroSecreto){
        alert ("Acertou!")
        break
        }
        else if (chute > numeroSecreto){
        alert ("O número secreto é menor que: " +chute)
        tentativas = tentativas - 1
        }
          else if (chute < numeroSecreto){
          alert ("O número secreto é maior que: " +chute)
          tentativas = tentativas - 1
          }
}

if (chute != numeroSecreto)
    {
    alert ("Suas tentativas acabaram, o número era: "+numeroSecreto)
    }