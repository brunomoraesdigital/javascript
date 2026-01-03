// --- VARIÁVEIS GLOBAIS ---

const areaDoJogo = document.getElementById('meuJogo');

const inicio = { x: 0, y: 0 };

const fim = {
    x: areaDoJogo.width,
    y: areaDoJogo.height
};

const contexto = areaDoJogo.getContext('2d');

const alturaChao = 100;
const alturaPersonagem = 50;
const larguraPersonagem = alturaPersonagem;

let personagemPosY = 0;
let velocidadeY = 0;


function desenhar(cor, x, y, largura, altura) {
    contexto.fillStyle = cor;
    contexto.fillRect(x, y, largura, altura);
}

function atualizarFisica(gravidade) {
    velocidadeY = velocidadeY + gravidade;
    personagemPosY = personagemPosY + velocidadeY;

}

function verificarColisao() {
    if (personagemPosY + alturaPersonagem > (fim.y - alturaChao)) {
        personagemPosY = (fim.y - alturaChao) - alturaPersonagem;
        velocidadeY = 0;
    }
}

function loopPrincipal() {

    // 1️⃣ limpar o canvas
    contexto.clearRect(0, 0, fim.x, fim.y);

    // 2️⃣ desenhar o retângulo (ou outros elementos do jogo)

    //contexto.fillRect(0, 540, 360, 100);
    desenhar('green', inicio.x, fim.y - alturaChao, fim.x, alturaChao);
    desenhar('blue', 160, personagemPosY, larguraPersonagem, alturaPersonagem)
    
    // 3️⃣ atualizar posições, lógica, colisões

    atualizarFisica(0.5);
    verificarColisao();

    // 4️⃣ pedir o próximo frame
    requestAnimationFrame(loopPrincipal);

}

loopPrincipal();