let text = ["situação: triste","situação: cantor","situação: estudante","situação: genio"]
let fotos = document.querySelector("#fotos")
let textos = document.querySelector("#text2")
let imagens = ["./assets/img/w1.jpg","./assets/img/w2.jpg","./assets/img/w3.jpg","./assets/img/w4.jpg",]

function alteraTexto(){
if(textos.innerText  === text[0]){
    textos.innerText = text[1]
    fotos.src = imagens[1]
}else if (textos.innerText  === text[1]){
    textos.innerText = text[2]
    fotos.src = imagens[2]
}else if (textos.innerText  === text[2]){
    textos.innerText = text[3]
    fotos.src = imagens[3]
}else { textos.innerText = text[0]
    fotos.src = imagens[0]}
}




