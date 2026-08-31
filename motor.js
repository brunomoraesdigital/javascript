
const VIDA_MAX_PERSONAGEM = 100;
const ATAQUE_PERSONAGEM = 10;
const DEFESA_PERSONAGEM = 5;

let vidaAtualPersonagem = VIDA_MAX_PERSONAGEM;

const PERSONAGEM = {
    nome: "Heroi",
    vidaMax: 20,
    ataque: 10,
    defesa: 5 
}

const CRIATURA = {
    nome: "Heroi",
    vidaMax: 20,
    ataque: 10,
    defesa: 5 
}

const CRIATURA = "Slime";

const VIDA_MAX_CRIATURA = Math.floor(Math.random() * 15) + 1;
const ATAQUE_CRIATURA = 8;
const DEFESA_CRIATURA = 3;

let vidaAtualCriatura = VIDA_MAX_CRIATURA;

let rodada = 1;

function calcularDano(ataque, defesa) {

    let dano = ataque - defesa;

    if (dano < 0) {
        dano = 0;
    }

    return dano;
}

function calcularVida(vidaAtual, danoInfrigido) {
    let vida = vidaAtual - danoInfrigido;

    if (vida < 0) {
        vida = 0;
    }
    return vida;
}



// Início do combate

console.log("=================================");
console.log("        INÍCIO DO COMBATE");
console.log("=================================");

console.log(`${PERSONAGEM} encontrou um ${CRIATURA}!`);

console.log(`${PERSONAGEM} possui ${vidaAtualPersonagem} de vida`);

console.log(`${CRIATURA} possui ${vidaAtualCriatura} de vida`);


// Combate

while (vidaAtualPersonagem > 0 && vidaAtualCriatura > 0) {

    console.log("---------------------------------");
    console.log(`RODADA ${rodada++}`);
    console.log("---------------------------------");


    // Ataque do Herói

    console.log(`${PERSONAGEM} decidiu atacar!`);



    let danoPersonagem = calcularDano(ATAQUE_PERSONAGEM, DEFESA_CRIATURA)

    console.log(`${PERSONAGEM} causou ${danoPersonagem} de dano!`);

    vidaAtualCriatura = calcularVida(vidaAtualCriatura, danoPersonagem);

    console.log(`${CRIATURA} agora possui ${vidaAtualCriatura} de vida.`);


    // Verifica se a criatura morreu

    if (vidaAtualCriatura <= 0) {

        console.log(`${CRIATURA} foi derrotada!`);

    } else {

        // Ataque da criatura

        console.log("---------------------------------");
        console.log(`${CRIATURA} decidiu atacar!`);

        let danoCriatura = calcularDano(ATAQUE_CRIATURA, DEFESA_PERSONAGEM);


        console.log(`${CRIATURA} causou ${danoCriatura} de dano`);

        vidaAtualPersonagem = calcularVida(vidaAtualPersonagem, danoCriatura);

        console.log(`${PERSONAGEM} agora possui ${vidaAtualPersonagem} de vida`);


        // Verifica se o Herói morreu

        if (vidaAtualPersonagem <= 0) {

            console.log(`${PERSONAGEM} foi derrotado!`);

        } else {

            console.log(`${PERSONAGEM} sobreviveu ao ataque!`);
        }
    }
}


// Resultado final

console.log("=================================");
console.log("        FIM DO COMBATE");
console.log("=================================");

if (vidaAtualPersonagem <= 0) {

    console.log(`${CRIATURA} venceu a batalha!`);

} else if (vidaAtualCriatura <= 0) {

    console.log(`${PERSONAGEM} venceu a batalha!`);
}