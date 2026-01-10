// --- VARIÁVEIS GLOBAIS ---

const areaDoJogo = document.getElementById('meuJogo');

const inicio = { x: 0, y: 0 };

const fim = {
    x: areaDoJogo.width,
    y: areaDoJogo.height
};

const coordAreaJogo = { inicio, fim };

const contexto = areaDoJogo.getContext('2d');

/* ------------- */

const alturaChao = 100;
const gravidade = 0.5;

let personagem = {
    cor: 'blue',
    altura: 50,
    largura: 50,
    posX: 160,
    posY: 0,
    velX: 0,
    velY: 0,
    colisao: function() {
        return {
            ldEsq: this.posX,
            ldDir: this.posX + this.largura,
            ldTopo: this.posY,
            ldBase: this.posY + this.altura
        };
    }
};

let chao = {
    cor: 'green',
    altura: alturaChao,
    largura: coordAreaJogo.fim.x,
    posX: coordAreaJogo.inicio.x,
    posY: coordAreaJogo.fim.y - alturaChao,
    velX: 0,
    velY: 0,
    colisao: function() {
        return {
            ldEsq: this.posX,
            ldDir: this.posX + this.largura,
            ldTopo: this.posY,
            ldBase: this.posY + this.altura
        };
    }
}

function desenhar(cor, x, y, largura, altura) {
    contexto.fillStyle = cor;
    contexto.fillRect(x, y, largura, altura);
}

function atualizarFisica(gravidade) {
    personagem.velY += gravidade;
    personagem.posY += personagem.velY;
}

function verificarColisao() {
    
    let limitesPersonagem = personagem.colisao();
    let limitesChao = chao.colisao();
    
    if (limitesPersonagem.ldBase > limitesChao.ldTopo) {
        personagem.posY = limitesChao.ldTopo - personagem.altura;
        personagem.velY = 0;
    }
    if (true) {
        console.log("foi");
        personagem.velY += gravidade;
    personagem.posY += -personagem.velY;
    }
}

function loopPrincipal() {
    
    // 1️⃣ limpar o canvas
    contexto.clearRect(0, 0, fim.x, fim.y);
    
    // 2️⃣ desenhar o retângulo (ou outros elementos do jogo)
    
    desenhar(chao.cor, chao.posX, chao.posY, chao.largura, chao.altura);
    desenhar(personagem.cor, personagem.posX, personagem.posY, personagem.largura, personagem.altura);
    
    // 3️⃣ atualizar posições, lógica, colisões
    
    atualizarFisica(0.5);
    verificarColisao();
    
    // 4️⃣ pedir o próximo frame
    requestAnimationFrame(loopPrincipal);
    
}

loopPrincipal();