let qtdCartas;
let cartas = [];

let contador = 0;
let clicados = [];

let jogarNovamente = '';

const divjogo = document.querySelector(".jogo");

function virarCarta(elemento){
    const frente = elemento.querySelector(".frente");
    const verso = elemento.querySelector(".verso");
    
    elemento.classList.toggle("carta-virada");

    
    frente.classList.toggle("escondido");
    verso.classList.toggle("escondido");

    clicados.push(elemento);

    if(clicados[1] === elemento){
        checaCartas();
    }
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
        //const elemento = document.querySelector('.jogo');

        for (let i = 0; i < qtdCartas; i++) {
            divjogo.innerHTML += `
            <div class="carta" onclick="virarCarta(this)">
                <div class="face frente escondido">
                    <img class="${cartas[i]}" src="./img/${'carta'+cartas[i]}.gif" />
                </div>
                <div class="face verso">
                    
                </div>
            </div>
            `;
          }

    }

}

function inicializacao(){
    qtdCartas = 0;
    cartas = [];
    contador = 0;
    clicados = [];
    jogarNovamente = '';
}

function checaCartas(){

    alert("entrou na checagem");

    let carta1 = clicados[0];
    let carta2 = clicados[1];
    
    if(carta1.innerHTML === carta2.innerHTML){
        console.log('acertou miserávi!');
        clicados = [];
        contador+=2;
        
    }else{
        
        setTimeout(()=>{
            virarCarta(carta2);
            clicados = [];
            virarCarta(carta1);
            clicados = [];
        }, 500);
        if(contador !== 0)
            contador-=2;
        
    }
    clicados = [];
    console.log(contador);
    fimDeJogo();
}

function fimDeJogo(){
    if(contador === qtdCartas){
        jogarNovamente = prompt('Você venceu!!! Deseja jogar denovo?');
    }
    if (jogarNovamente === "sim"){
        divjogo.innerHTML = '';
        jogo();
    }
}

function jogo(){

    inicializacao();

    insereCartas();

}

jogo();

