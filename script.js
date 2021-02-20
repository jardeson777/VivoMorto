var indice = 0; //Para saber qual imagem que vai ser usada
var cont = 0;
var resposta = 2;
var iniciaLoop;
var pararLoop;
var todasImagens = ["./image/abaixado2.png", "./image/levantado2.jpg"];

function trocaImagem() {
    document.getElementById('imagem').src = todasImagens[indice];

    if(indice < 1) {
        indice++;
    } else {
        indice = 0;
    }
    cont = Math.floor(Math.random()*8);
}

function iniciar() {
    if(resposta == indice | resposta == 2) {
        iniciaLoop = setInterval(trocaImagem, 113); //Onde acontece a troca de imagem a cada tempo
    }
}

function paraLoop() {
    if(cont > 3) {
        clearInterval(iniciaLoop);
        cont = 0;
    }
    pararLoop = setTimeout("paraLoop()", 400);
}

function respostaVivo() {
    resposta = 0;
    console.log(indice);
    console.log(resposta);
    iniciar();
}

function respostaMorto() {
    resposta = 1;
    console.log(indice);
    console.log(resposta);
    iniciar();
}

function analisarResposta() {
    if(resposta == indice) {
        setTimeout("iniciar()", 1100);
    } else {
        clearInterval(iniciaLoop);
        clearTimeout(paraLoop);
    }
}