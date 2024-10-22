let numeroParaAdivinhar = Number(prompt("Jogador 1, qual o número o jogador 2 deve adivinhar:"))
let condicao = true
let numeroTentativas = 0
let numeroPalpite

console.log("Vamos Jogar!")

while(condicao){
    numeroPalpite = Number(prompt("Tente adivinhar o número que o jogador 1 escolheu:"))
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