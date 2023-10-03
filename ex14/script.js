var data = new Date()
var horas = data.getHours()
var imagem = window.document.getElementById("imagem")
var mensagem = window.document.getElementById("msg")
var fundo = window.document.getElementById("fundo")

imagem.style.width = "400px" 
imagem.style.borderRadius = "50px"

mensagem.innerHTML = `<p>Agora são ${horas} horas</p>`

if (horas >= 0 && horas < 12){
    imagem.src = "Manhã.jpg"
    mensagem.innerHTML += "<strong>BOM DIA</strong>"
    fundo.style.background = "rgb(153, 153, 179)"
} else if (horas <= 18){
    imagem.src = "evening.jpg"
    mensagem.innerHTML += "<strong>BOA TARDE</strong>"
    fundo.style.background = "rgb(199, 123, 47)"
} else{
    imagem.src = "Night.jpg"
    mensagem.innerHTML += "<strong>BOA NOITE</strong>"
    fundo.style.background = "rgb(10, 10, 107)"
}
