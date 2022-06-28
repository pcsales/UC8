let lista = []
let opcao = 's'

while (opcao =='s')
{
    let nome = prompt("Digite o nome do participante: ")
    let idade = prompt("Digite a idade do participante: ")
    if(idade > 18){
        if(lista.lengh <100){
            console.log("Cadastro permitido")
            lista.push(nome)
        }
        else{
            console.log("Cadastro não permitido, lista cheia.")
        }
    }else{
        console.log("Cadastro não permitido, participante menor que 18 anos.")

    }
opcao = prompt("Deseja cadastrar outro participante? (S ou N) ")
}

console.log(lista)