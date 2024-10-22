let listaPalavras = ["Olá,","tudo","bem","com","você?"], textoCompleto

for(let palavra of listaPalavras){
    if(textoCompleto === undefined){
        textoCompleto = palavra
    } else {
        textoCompleto += " " + palavra
    }
}

console.log(textoCompleto)