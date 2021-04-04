window.onkeydown = teclaPressionada;
window.onkeyup = teclaSolta;
var contexto;
var canvas;
var pagina = 0;
var quadro = 0;
var pressEsq = false;
var pressDir = false;
var mapaTecla = new Array(); // para otimizar o reconhecimento de tecla pressionada

var des1 = document.getElementById("f1");
var des2 = document.getElementById("f2");
var des3 = document.getElementById("f3");
var des4 = document.getElementById("f4");
var des5 = document.getElementById("f5");
var des6 = document.getElementById("f6");
var des7 = document.getElementById("f7");

var x1 = 200;
var y1 = 50;
var larx1 = 500;
var alt1 = 489;

function pintar() {
    //contexto.clearRect(0, 0, 500, 600);

    //contexto.font = "22pt Arial";
    //contexto.fillStyle = "black";
    switch (pagina) { //trocar do prologo para outras paginas
        case 0: desenharHQ();
            break;
            // case 1: contexto.fillText("Em breve1", 250, 250);
            break;
            // case 2: contexto.fillText("Em breve2", 250, 250);
            break;
            // case 3: contexto.fillText("Em breve3", 250, 250);
            break;
    }
}

function teclaPressionada(evento) {
    // padrão ABNT2:a tecla da seta para esquerda tem valor 37 e a seta para direita tem o valor 39
    mapaTecla[evento.keyCode] = true;
}

function teclaSolta(evento) {
    // padrão ABNT2:a tecla da seta para esquerda tem valor 37 e a seta para direita tem o valor 39
    mapaTecla[evento.keyCode] = false;
}

function iniciar() {
    //canvas = document.getElementById("hqCanvas");
    //contexto = canvas.getContext("2d");

    temporizador = setInterval(mainloop, 33);
}

function mainloop() {
    pintar();

    if (mapaTecla[39] == true && pagina < 3) {
        if (!pressDir) {
            pressDir = true; //impede que passe vários quadros ao pressionar a seta direita
            quadro++;
        }
    }

    if (mapaTecla[37] == true && pagina > 0) {
        if (!pressEsq) {
            pressEsq = true; //impede que passe vários quadros ao pressionar a seta esquerda
            quadro--;
        }
    }

    if (mapaTecla[37] == false) {
        pressEsq = false; //permite passar outro quadro ao clicar na seta esquerda
    }

    if (mapaTecla[39] == false) {
        pressDir = false; //permite passar outro quadro ao clicar na seta direita
    }
}

function desenharHQ() {
    // contexto.drawImage(des1, x1, y1, lar1, alt1); //desenha primeiro quadro

    if (quadro > 0) {
        document.getElementById('f1').style.animation = "spin1";
        //////     contexto.drawImage(des1, 30, 10, 350, 342);
        ////     contexto.drawImage(des2, 380, 15, 200, 217);

    }
}
