var indice = 0; //Para saber qual imagem que vai ser usada
var cont = 0;
var todasImagens = ["./image/abaixado2.png", "./image/levantado2.jpg"];

function trocaImagem() {
    document.getElementById('imagem').src = todasImagens[indice];

    if(indice < 1) {
        indice++;
    } else {
        indice = 0;
    }
    cont++;
    console.log(cont);
}

function paraLoop() {
    if(cont >=7) {
        clearInterval(loop);
        cont = 0;
    }
    setTimeout("paraLoop()", 400);
}

function iniciar() {
    loop = setInterval(trocaImagem, 100); //Onde acontece a troca de imagem a cada tempo
}