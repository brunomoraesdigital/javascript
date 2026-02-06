const jogo = "O Oráculo Numérico";
let pontos = 100;

alert(`Jogo: ${jogo} | Pontuação: ${pontos}`);
let numSorteado = Math.floor(Math.random() * 10) + 1;

let nome = prompt(`Qual o seu nome?`);
let cont = 1;

while (pontos > 0) {
  let palpite = prompt(`Tentativa ${cont}\nQual o seu palpite?`);
  let palpiteDoJogador = Number(palpite);
  
  if (numSorteado === palpiteDoJogador) {
    alert(`Pontuação: ${pontos}\nParabéns ${nome}! Você acertou o número.`);
    break;
  } else if (palpiteDoJogador > numSorteado) {
    pontos -= 10;
    alert(`Pontuação: ${pontos}\nO número sorteado é menor`);
  } else {
    pontos -= 10;
    alert(`Pontuação: ${pontos}\nO número sorteado é maior`);
  }
  cont += 1;
}

if (pontos === 0) {
  alert(`Pontuação: ${pontos}\nFim de jogo! O número era ${numSorteado}`);
}