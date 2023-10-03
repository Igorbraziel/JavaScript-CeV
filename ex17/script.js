function tabuada(){
    var txtnum = document.getElementById("n1")
    var num = Number.parseInt(txtnum.value)
    var resp = document.getElementById("resp")
    if(txtnum.value.length == 0){
        window.alert('Preencha todos os dados corretamente!')
    } else{
        resp.innerHTML = ""
        for(var i = 1; i < 11; i++){
            var item = document.createElement("option")
            item.text = `${num} x ${i} = ${num * i}` 
            item.value = `tab${i}`
            resp.appendChild(item)
        }
    }
    
}