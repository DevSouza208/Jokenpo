let jogador = 0;
let pc = 0;
let jPNT = 0;
let pcPNT = 0;
const opcoes = ["🪨", "🧻", "✂️"];
const main = document.querySelector("main");
const conteudoOriginal = main.innerHTML;

function escolha(n) {
  jogador = opcoes[n];
  pc = opcoes[Math.floor(Math.random() * 3)];
  document.querySelector("main").innerHTML = `
    <h3 class="jogador">Jogador</h3>
    <input type="button" value="${jogador}" class="bt">
    <input type="button" value="${pc}" class="bt">
    <h3 class="pc">Cpu</h3>
    <br>
    <input type='button' value='Jogar Novamente' class='restart' onclick='restart()'>
  `;
  placar();
}

function restart() {
  document.querySelector("main").innerHTML = conteudoOriginal;
  document.getElementById("playerPNT").innerHTML = jPNT;
  document.getElementById("cpuPNT").innerHTML = pcPNT;
}

function placar() {
  if (
    (jogador == "🪨" && pc == "✂️") ||
    (jogador == "🧻" && pc == "🪨") ||
    (jogador == "✂️" && pc == "🧻")
  ) {
    jPNT += 1;
  } else if (
    (pc == "🪨" && jogador == "✂️") ||
    (pc == "🧻" && jogador == "🪨") ||
    (pc == "✂️" && jogador == "🧻")
  ) {
    pcPNT += 1;
  }
}
