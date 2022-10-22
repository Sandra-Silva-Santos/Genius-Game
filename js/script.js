let ordem = [];
let ordemClicada = [];

let pontos = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

// Selecionando os elementos HTML a partir da classe
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");
let verde = document.querySelector("#verde");
let amarelo = document.querySelector("#amarelo");

let gerarOrdem = () => {
  // Gera numero de 0 a 3
  let proximo = Math.floor(Math.random() * 4);

  // Atribui o número ao próximo da ordem
  ordem[ordem.length] = proximo;
  ordemClicada = [];

  // Acende a ordem gerada
  for (let i in ordem) {
    let elementoDiv = elemento(ordem[i]);
    acender(elementoDiv, Number(i) + 1);
  }
}

//Acende o elemento em sequência 
let acender = (elementoDiv, tempo) => {
  tempo = tempo * 500;
  setTimeout(() => {
    elementoDiv.classList.add('selecionado');
  }, tempo - 250);
  setTimeout(() => {
    elementoDiv.classList.remove('selecionado');
  }, tempo);
}

//
let compararOrdem = () => {
  for (let i in ordemClicada) {
    if (ordemClicada[i] != ordem[i]) {
      perdeu();
      break;
    }
  }
  if (ordemClicada.length == ordem.length) {
    alert(`Pontuação: ${pontos}!\nVocê acertou!\nIniciando próximo nível!`);
    proximo();
  }
}

// Chama quando o usuário clica em uma das divs
let clicou = (cor) => {
  ordemClicada[ordemClicada.length] = cor;
  elemento(cor).classList.add("selecionado");

  setTimeout(() => {
    elemento(cor).classList.remove("selecionado");

    compararOrdem();
  }, 250);
}

let elemento = (cor) => {
  if (cor == 0) {
    return verde;
  } else if (cor == 1) {
    return vermelho;
  } else if (cor == 2) {
    return amarelo;
  } else if (cor == 3) {
    return azul;
  }
}

let proximo = () => {
  pontos++;

  gerarOrdem();
}

let perdeu = () => {
  alert(`Pontuação: ${pontos}!\nVocê perdeu!!!\nClique em OK para iniciar um novo jogo.`);

  ordem = [];
  ordemClicada = [];

  iniciar();
}

let iniciar = () => {
  alert("Bem vindo ao Genius!\nClique nas cores na ordem que aparecem!\nClique em OK para iniciar!\nBoa sorte!");

  pontos = 0;

  proximo();
}

verde.onclick = () => clicou(0)
vermelho.onclick = () => clicou(1)
amarelo.onclick = () => clicou(2)
azul.onclick = () => clicou(3)

iniciar();
