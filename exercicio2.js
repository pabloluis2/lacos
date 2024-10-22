function maiorNumero(numeros = []){
    let retorno
    for (let i = 0; i < numeros.length; i++){
        if(retorno < numeros[i] || retorno === undefined){
            retorno = numeros[i]
        }
    }
    return retorno
}

let listaNum = [11,15,18,14,12,13]

if(prompt("Gostaria de preencher o array? Y/N").toUpperCase() === "Y"){
    listaNum = []
    while(listaNum[listaNum.length - 1] !== 0){
        listaNum.push(Number(prompt("Informe um número para inserir no array, digite 0 para parar:")))
    }
    console.log(`Array customizado inserido: ${listaNum}`)
}

console.log(`O maior número é: ${maiorNumero(listaNum)}`)