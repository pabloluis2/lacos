function imprimeArray(arrayP = []){
    for(let item of arrayP){
        console.log(item)
    }
}
function imprimeArrayDivDez(arrayP = []){
    for(let item of arrayP){
        console.log(item/10)
    }
}

function criaArrayPar(arrayP = []){
    let novoArray = []
    for(let item of arrayP){
        if(item % 2 === 0){
            novoArray.push(item)
        }
    }
    imprimeArray(novoArray)
}

function criaArrayStringIndex(arrayP = []){
    let novoArray = []
    for(let i = 0 ; i < arrayP.length ; i++){
        novoArray.push(`O elemento do índex ${i} é ${arrayP[i]}`)
    }
    imprimeArray(novoArray)
}

function maiorMenorArray(arrayP = []){
    let maior, menor
    for(let i = 0 ; i < arrayP.length ; i++){
        if(maior === undefined || maior < arrayP[i]){
            maior = arrayP[i]
        }
        if(menor === undefined || menor > arrayP[i]){
            menor = arrayP[i]
        }
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`)
}

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

imprimeArray(array)
imprimeArrayDivDez(array)
criaArrayPar(array)
criaArrayStringIndex(array)
maiorMenorArray(array)