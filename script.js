let qtdCartas;

function virarCarta(elemento){
    elemento.classList.add("carta-virada");

}

function insereCartas(){
    qtdCartas = Number(prompt("Com quantas cartas voce gostaria de jogar? (numero par entre 4 e 14)"));

    if(qtdCartas%2 === 1 || qtdCartas > 14 || qtdCartas < 4){
        alert('Valor invalido! favor entrar com numero par entre 4 e 14.');
        insereCartas(qtdCartas);
    }

}

insereCartas();
console.log(qtdCartas);