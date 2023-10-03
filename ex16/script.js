function contar(){
    var txtn1 = document.getElementById("init")
    var txtn2 = document.getElementById("fim")
    var txtk = document.getElementById("passo")
    var n1 = Number.parseInt(txtn1.value)
    var n2 = Number.parseInt(txtn2.value)
    var k = Number.parseInt(txtk.value)
    var resposta = document.getElementById("numeros")
    var cont = document.getElementById("conta")
    if (k < 0) k *= -1
    if(txtn1.value.length == 0 || txtn2.value.length == 0 || txtk.value.length == 0){
        window.alert('Preencha todos os dados corretamente')
    } else if(k == 0){
        window.alert("Passo 0 negado, receberá passo 1")
        k = 1
        if(n1 <= n2){
            while(n1 <= n2){
                resposta.innerHTML += `${n1} \u{1F449} `
                n1 += k 
            }
        } else if(n2 <= n1){
            while(n2 <= n1){
                resposta.innerHTML += `${n1} \u{1F449} `
                n1 -= k 
            }
        }
        resposta.innerHTML += `\u{1F3C1}`
    } else{
        if(n1 <= n2){
            while(n1 <= n2){
                resposta.innerHTML += `${n1} \u{1F449} `
                n1 += k 
            }
        } else if(n2 <= n1){
            while(n2 <= n1){
                resposta.innerHTML += `${n1} \u{1F449} `
                n1 -= k 
            }
        }
        resposta.innerHTML += `\u{1F3C1}`
    }
}