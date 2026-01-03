const areaDoJogo = document.getElementById('meuJogo');

const inicio = { x: 0, y: 0 };

const fim = {
    x: areaDoJogo.width,
    y: areaDoJogo.height
};

const contexto = areaDoJogo.getContext('2d');

const alturaRetangulo = 100;

let yJogador = 0;

function loopPrincipal() {

    // 1️⃣ limpar o canvas
    contexto.clearRect(0, 0, fim.x, fim.y);

    // 2️⃣ desenhar o retângulo (ou outros elementos do jogo)

    contexto.fillStyle = '#00ff00';

    //contexto.fillRect(x, y, largura, altura);
    contexto.fillRect(inicio.x, fim.y - alturaRetangulo, fim.x, alturaRetangulo);

    contexto.fillStyle = 'blue';
    contexto.fillRect(160, yJogador, 50, 50);

    // 3️⃣ atualizar posições, lógica, colisões

    yJogador = yJogador + 2;

    // 4️⃣ pedir o próximo frame
    requestAnimationFrame(loopPrincipal);

}

loopPrincipal();