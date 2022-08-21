let qtdCartas;
let cartas = [];

let clicados = [];

function virarCarta(elemento){
    const frente = elemento.querySelector(".frente");
    const verso = elemento.querySelector(".verso");
    
    elemento.classList.toggle("carta-virada");

    
    frente.classList.toggle("escondido");
    verso.classList.toggle("escondido");

}
/*
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
            <div class="cartas" onclick="virarCarta(this)">
                <div class="face frente">
                    <img src="./img/front.png" />
                </div>
                <div class="face verso escondido">
                    <img class="${cartas[i]}" src="./img/${'carta'+cartas[i]}.gif" />
                </div>
            </div>
            `;
          }

    }

}

function checaCartas(){
    let carta1 = clicados[0].parentNode; 
    let carta2 = clicados[1].parentNode;
    
    if(clicados[0].innerHTML === clicados[1].innerHTML){
            console.log('acertou miserávi!');
            clicados = [];
        }
        else{
            
        }

        clicados = [];

}


insereCartas();
*/