let numeroParaAdivinhar = Math.round(Math.random() * ((100 - 0) + 0))
let condicao = true
let numeroTentativas = 0
let numeroPalpite

console.log("Vamos Jogar!")

while(condicao){
    numeroPalpite = Number(prompt("Tente adivinhar o número que o computador escolheu entre 0 e 100:"))
    numeroTentativas++
    condicao = numeroParaAdivinhar !== numeroPalpite
    console.log(`O número chutado foi: ${numeroPalpite}`)
    if(!condicao){
        console.log(`Acertou!\nO número de tentativas foi: ${numeroTentativas}`)
    } else if(numeroPalpite < numeroParaAdivinhar){
        console.log("Errou. O número escolhido é maior")
    } else {
        console.log("Errou. O número escolhido é menor")
    }
}