function Clicou(){
    var anotxt = document.getElementById("numero")
    var ano = Number(anotxt.value)
    var anoTemp = new Date()
    var anoAtual = Number(anoTemp.getFullYear())
    var idade = anoAtual - ano
    var resp = document.getElementById("resp")
    var imagem = document.getElementById("imagem")
    var sexo = document.getElementsByName("radsex")
    var genero = ""

    resp.style.textAlign = "center"    

    if (sexo[0].checked){
        genero = "Homem"
        resp.innerHTML = `Detectamos um <strong>Homem</strong> com ${idade} anos`
    } else if(sexo[1].checked){
        genero = "Mulher"
        resp.innerHTML = `Detectamos uma <strong>Mulher</strong> com ${idade} anos`
    }

    if (idade <= 15 && genero == "Homem"){
        imagem.src = "bebehomem.jpeg"
    } else if (idade <= 22 && genero == "Homem"){
        imagem.src = "jovemhomem.webp"
    } else if (idade <= 55 && genero == "Homem"){
        imagem.src = "adultohomem.webp"
    } else if (genero == "Homem"){
        imagem.src = "idosohomem.webp"
    } else if (idade <= 15 && genero == "Mulher"){
        imagem.src = "bebemulher.webp"
    } else if (idade <= 22 && genero == "Mulher"){
        imagem.src = "jovemmulher.webp"
    } else if (idade <= 55 && genero == "Mulher"){
        imagem.src = "adultomulher.jpeg"
    } else if (genero == "Mulher"){
        imagem.src = "idosamulher.jpeg"
    }

    imagem.style.width = "400px"
    imagem.style.margin = "auto" 

}