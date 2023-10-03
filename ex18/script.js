let lista = []
let final = document.getElementById("final")

function maior(vetor){
    let maior = 0
    for(let i in vetor){
        if(i == 0){
            maior = vetor[i]
        } else if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior
}

function menor(vetor){
    let menor = 0
    for(let i in vetor){
        if(i == 0 || vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return menor
}

function soma(vetor){
    let soma = 0
    for(let i in vetor){
        soma += vetor[i]
    }
    return soma
}

function media(vetor){
    let soma = 0
    for(let i in vetor){
        soma += vetor[i]
    }
    return soma / vetor.length 
}

function Adicionar(){
    let TxtNum = document.getElementById("n1")
    let num = Number(TxtNum.value)
    let item = document.createElement('option')
    let numeros = document.getElementById("finish")
    let k = 0
    final.innerHTML = ''
    for(let i in lista){
        if(lista[i] == num) k = 1
    }
    if(TxtNum.value.length == 0 || num < 1 || num > 100 || k != 0 || lista.indexOf(num) != -1){
        window.alert("Valor inválido ou já adicionado, tente novamente!")
    } else{
        lista.push(num)
        item.text = `Valor ${num} Adicionado` 
        numeros.appendChild(item)
    }
    TxtNum.value = ''
    TxtNum.focus()
}

function Finalizando(){
    if(lista.length != 0){
        final.innerHTML = `<p>Ao todo temos ${lista.length} números cadastrados</p>`
        final.innerHTML += `<p>O maior número informado foi ${maior(lista)}</p>`
        final.innerHTML += `<p>O menor valor informado foi ${menor(lista)}</p>`
        final.innerHTML += `<p>Somando Todos os valores, temos ${soma(lista)}</p>`
        final.innerHTML += `<p>A média dos valores digitados foi ${media(lista)}</p>`
    } else{
        window.alert("ADICIONE VALORES PARA FINALIZAR")
    }
}


