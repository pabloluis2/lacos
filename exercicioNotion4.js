let qtdPets = Number(prompt("Quantos pets você tem?"))
let nomePets = []

if(qtdPets > 0){
    for(let i = 0; i < qtdPets; i++){
        nomePets.push(prompt(`Informe no nome do pet ${i+1}`))
    }
    console.log(`Esse é o nome dos seus pets: ${nomePets.join(", ")}`)
} else {
    console.log("Que pena! Você pode adotar um pet!")
}
