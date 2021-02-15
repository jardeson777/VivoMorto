var contador = 0;

function trocaImagem(){
    document.getElementById("abaixado").style.display = "none";
    document.getElementById("levantado").style.display = "flex";

    var troca = setTimeout(function altera() {
        document.getElementById("levantado").style.display = "none";
        document.getElementById("abaixado").style.display = "flex";
    }, 400);
    window.setInterval('trocaImagem()', 800); 
    
    contador++;
    console.log(contador);
}