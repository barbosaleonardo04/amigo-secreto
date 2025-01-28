//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Selecionar elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = []; // Lista de amigos
let sorteados = []; // Lista de amigos já sorteados

// Função para adicionar amigos
function adicionarAmigo() {
  const nome = inputAmigo.value.trim(); // Remove espaços extras

  // Verificar se o nome é válido
  if (nome === '') {
    alert('Nome inválido! Por favor, insira um nome.');
    return;
  }

  // Verificar se o nome já foi adicionado
  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado!');
    inputAmigo.value = ''; // Limpa o campo
    return;
  }

  // Adicionar o nome à lista
  amigos.push(nome);
  atualizarLista();
  inputAmigo.value = ''; // Limpar o campo de entrada
}

// Atualizar lista de amigos na interface
function atualizarLista() {
  listaAmigos.innerHTML = ''; // Limpar lista antes de atualizar

  amigos.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}

// Função para sortear amigos
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Nenhum nome disponível para sortear!');
    return;
  }

  if (sorteados.length === amigos.length) {
    alert('Todos os amigos já foram sorteados!');
    return;
  }

  let nomeSorteado;

  do {
    const indice = Math.floor(Math.random() * amigos.length);
    nomeSorteado = amigos[indice];
  } while (sorteados.includes(nomeSorteado)); // Garante que o sorteado ainda não foi escolhido

  // Adicionar o sorteado à lista de sorteados
  sorteados.push(nomeSorteado);

  // Mostrar o nome sorteado no resultado
  resultado.innerHTML = `<p>Sorteado: <strong>${nomeSorteado}</strong></p>`;
}
