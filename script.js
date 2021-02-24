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
    document.getElementById("temporizador").style.display = "none";
    document.getElementById("vivo").style.display = "block";
    document.getElementById("morto").style.display = "block";
    document.getElementById("comeca").style.display = "none";

    if(resposta == indice | resposta == 2) { //Se tiver acertado
        score++;
        document.getElementById("score").innerHTML = "score: " + score;

        iniciaLoop = setInterval(trocaImagem, 113); //Onde acontece a troca de imagem a cada tempo

        document.getElementById("msgErro").innerHTML = "";

        document.getElementById("perdeu").style.display = "none";
    } else { //Se errou
        document.getElementById("msgErro").innerHTML = "Você perdeu!</br>Sua pontuação foi: " + score;
        
        score = 0;
        document.getElementById("score").innerHTML = "score: " + score;

        document.getElementById("perdeu").style.display = "block";

        document.getElementById("vivo").disabled = true;
        document.getElementById("morto").disabled = true;
    }
}

function paraLoop() {
    if(cont > 3) { //condição para imagem parar
        clearInterval(iniciaLoop); //para o loop de troca de imagem

        document.getElementById("temporizador").style.display = "block"; //mostra o temporizador
        document.getElementById("vivo").disabled = false; //Deixa os botões de vivo e mmorto clicaveis
        document.getElementById("morto").disabled = false;
        resposta = 3;

        //Dificuldade aumentando conforme o score
        if(score < 10) {
            iniciaLoop2 = setTimeout("iniciar()", 2500);
            document.getElementById("temporizador").style.animationDuration = "2.5s";
        } else if(score > 8 & score < 16) {
            iniciaLoop2 = setTimeout("iniciar()", 2000);
            document.getElementById("temporizador").style.animationDuration = "2s";
        } else if(score > 16 & score < 24) {
            iniciaLoop2 = setTimeout("iniciar()", 1700);
            document.getElementById("temporizador").style.animationDuration = "1.7s";
        } else if(score > 24 & score < 32) {
            iniciaLoop2 = setTimeout("iniciar()", 1300);
            document.getElementById("temporizador").style.animationDuration = "1.3s";
        } else if(score > 32 & score < 40) {
            iniciaLoop2 = setTimeout("iniciar()", 900);
            document.getElementById("temporizador").style.animationDuration = "0.9s";
        } else {
            iniciaLoop2 = setTimeout("iniciar()", 690);
            document.getElementById("temporizador").style.animationDuration = "0.69s";
        }

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

function jogarNovamente() {
    iniciar();
    document.getElementById("perdeu").style.display = "none";

    document.getElementById("vivo").disabled = false;
    document.getElementById("morto").disabled = false;
}