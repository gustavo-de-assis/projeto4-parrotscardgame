let qtdCartas;
let cartas = [];

let checaAcertos = 0;
let numJogadas = 0;
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
        cartas = cartas.sort(() => Math.random() - 0.5);
       

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
    divjogo.innerHTML = '';
    jogarNovamente = '';
    
    cartas = [];
    clicados = [];
    
    qtdCartas = 0;
    checaAcertos = 0;
    numJogadas = 0;
}

function checaCartas(){

    let carta1 = clicados[0];
    let carta2 = clicados[1];
    
    if(carta1.innerHTML === carta2.innerHTML){
        clicados = [];
        checaAcertos++;
        
    }else{
        
        setTimeout(()=>{
            virarCarta(carta2);
            clicados = [];
            virarCarta(carta1);
            clicados = [];
        }, 500);     
        
    }
    numJogadas += 2;

    clicados = [];
    fimDeJogo();
}

function fimDeJogo(){
    if(checaAcertos === (qtdCartas/2)){
        let mensagem = `Você venceu em ${numJogadas} jogadas!!!`
        alert(mensagem);

        jogarNovamente = prompt('Deseja jogar denovo?');
    }
    if (jogarNovamente === "sim"){
       
        jogo();
    }
}

function jogo(){

    inicializacao();

    insereCartas();

}

jogo();

