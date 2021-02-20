var indice = 0; //Para saber qual imagem que vai ser usada
var cont = 0;
var resposta = 2;
var iniciaLoop;
var iniciaLoop2;
var pararLoop;
var score = -1;
var todasImagens = ["./image/abaixado2.png", "./image/levantado2.jpg"];

function trocaImagem() {
    document.getElementById('imagem').src = todasImagens[indice];

    if(indice < 1) {
        indice++;
    } else {
        indice = 0;
    }
    document.getElementById("vivo").disabled = true;
    document.getElementById("morto").disabled = true;
    cont = Math.floor(Math.random()*8); //Gera um valor aleatorio, se esse valor for maior que 3 as imagens vão parar de ficar alternando
}

function iniciar() {
    if(resposta == indice | resposta == 2) {
        score++;
        document.getElementById("score").innerHTML = "score: " + score;
        iniciaLoop = setInterval(trocaImagem, 113); //Onde acontece a troca de imagem a cada tempo
        document.getElementById("msgErro").innerHTML = "";
    } else {
        document.getElementById("msgErro").innerHTML = "Você perdeu!</br>Sua pontuação foi: " + score;
        score = 0;
        document.getElementById("score").innerHTML = "score: " + score;
    }
}

function paraLoop() {
    if(cont > 3) {
        clearInterval(iniciaLoop);
        document.getElementById("vivo").disabled = false;
        document.getElementById("morto").disabled = false;
        resposta = 3;
        iniciaLoop2 = setTimeout("iniciar()", 1000);
        cont = 0;
    }
    pararLoop = setTimeout("paraLoop()", 400);
}

function respostaVivo() {
    resposta = 0;
    console.log(indice);
    console.log(resposta);
    clearTimeout(iniciaLoop2);
    iniciar();
}

function respostaMorto() {
    resposta = 1;
    console.log(indice);
    console.log(resposta);
    clearTimeout(iniciaLoop2);
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