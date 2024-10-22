let soma = 0, i

while(i !== 0){
    i = Number(prompt("Insira um número para o somaratório, digite 0 para sair do somatório:"))
    soma = soma + i
}

console.log(`A soma de todos os número inseridos é: ${soma}`)