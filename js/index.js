window.onkeydown = teclaPressionada;
window.onkeyup = teclaSolta;

var pagina = 0;
var quadro = 0;
var pressEsq = false;
var pressDir = false;
var mapaTecla = new Array(); // para otimizar o reconhecimento de tecla pressionada

function teclaPressionada(evento) {
    // padrão ABNT2:a tecla da seta para esquerda tem valor 37 e a seta para direita tem o valor 39
    mapaTecla[evento.keyCode] = true;
}

function teclaSolta(evento) {
    // padrão ABNT2:a tecla da seta para esquerda tem valor 37 e a seta para direita tem o valor 39
    mapaTecla[evento.keyCode] = false;
}

function iniciar() {
    temporizador = setInterval(mainloop, 33);
}

function mainloop() {
    if (mapaTecla[39] == true && quadro < 3) {
        if (!pressDir) {
            pressDir = true; //impede que passe vários quadros ao pressionar a seta direita
            quadro++;
            document.getElementById("f1").style.animationDirection = "normal";
            document.getElementById("f1").style.animationPlayState = "running";
        }
    }

    if (mapaTecla[39] == false) {
        pressDir = false; //permite passar outro quadro ao clicar na seta direita
    }

    if (mapaTecla[37] == true && quadro > 0) {
        if (!pressEsq) {
            pressEsq = true; //impede que passe vários quadros ao pressionar a seta esquerda
            quadro--;
            document.getElementById("f1").style.animationDirection = "reverse"; //nao volta pra trás ainda
            document.getElementById("f1").style.animationPlayState = "running";
        }
    }

    if (mapaTecla[37] == false) {
        pressEsq = false; //permite passar outro quadro ao clicar na seta esquerda
    }
}

function proximo() {
    if (quadro < 3) {
        if (!pressDir) {
            quadro++;
            document.getElementById("f1").style.animationDirection = "normal";
            document.getElementById("f1").style.animationPlayState = "running";
        }
    }
}

function anterior() {
    if (quadro > 0) {
        if (!pressEsq) {
            quadro--;
            document.getElementById("f1").style.animationDirection = "reverse"; //nao volta pra trás ainda
            document.getElementById("f1").style.animationPlayState = "running";
        }
    }
}