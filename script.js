let qtdCartas;
let cartas = [];
function virarCarta(elemento){
    elemento.classList.add("carta-virada");

}

function insereCartas(){
    
    qtdCartas = Number(prompt("Com quantas cartas voce gostaria de jogar? (numero par entre 4 e 14)"));

    if(qtdCartas%2 === 1 || qtdCartas > 14 || qtdCartas < 4){
        alert('Valor invalido! favor entrar com numero par entre 4 e 14.');
        insereCartas();
    } else{
        let idCarta = 0;
        for(let i = 0; i < qtdCartas ;i++){
            cartas[i] = idCarta;
            if(i%2 === 1){
                idCarta++;
            }
        }
        cartas = cartas.sort(() => Math.random() - 0.5)
        console.log(cartas);
        const elemento = document.querySelector('.jogo');

        for (let i = 0; i < qtdCartas; i++) {
            elemento.innerHTML += `
            <div class="cartas ${'carta'+cartas[i]}" onclick="virarCarta(this)">
            <img src="./img/front.png" />
            </div>
            `;
          }

    }

}

insereCartas();
console.log(qtdCartas);