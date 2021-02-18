var contador = 0;

var todasImagens = ["./image/abaixado2.png", "./image/levantado2.jpg"];

function trocaImagem() {
    document.getElementById('imagem').src = todasImagens[contador];

    if(contador < 1) {
        contador++;
    } else {
        contador = 0;
    }
    setTimeout("trocaImagem()",95);
}