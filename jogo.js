// Lista de animais com dicas
const animais = [
  { nome: "gato", tipo: "mamífero", habitat: "doméstico" },
  { nome: "cachorro", tipo: "mamífero", habitat: "doméstico" },
  { nome: "leao", tipo: "mamífero", habitat: "selva" },
  { nome: "tigre", tipo: "mamífero", habitat: "floresta" },
  { nome: "elefante", tipo: "mamífero", habitat: "savana" },
  { nome: "girafa", tipo: "mamífero", habitat: "savana" },
  { nome: "zebra", tipo: "mamífero", habitat: "savana" },
  { nome: "pombo", tipo: "ave", habitat: "cidade" },
  { nome: "peixe", tipo: "aquático", habitat: "água" },
  { nome: "tartaruga", tipo: "réptil", habitat: "terra/água" }
];

// Sorteia animal
let animalSecreto = animais[Math.floor(Math.random() * animais.length)];

// Tentativas
let tentativas = 3;

// Elementos
const input = document.getElementById("inputNumero");
const mensagem = document.getElementById("mensagem");
const botao = document.querySelector("button");
const botaoReset = document.getElementById("resetar");
const tentativasTexto = document.querySelector(".tentativas");

// Atualiza tentativas
function atualizarTentativas() {
  tentativasTexto.innerText = "Tentativas restantes: " + tentativas;
}

// Reiniciar jogo
function reiniciarJogo() {
  animalSecreto = animais[Math.floor(Math.random() * animais.length)];
  tentativas = 3;

  mensagem.innerText = "🐾 Novo jogo! Descubra o animal!";
  input.value = "";

  botao.disabled = false;

  atualizarTentativas();
}

// Evento do botão "Tentar"
botao.addEventListener("click", function () {
  let palpite = input.value.toLowerCase().trim();

  // Validação
  if (palpite === "") {
    mensagem.innerText = "⚠️ Digite um animal!";
    return;
  }

  // Acertou
  if (palpite === animalSecreto.nome) {
    mensagem.innerText = "🎉 ACERTOU!! Era " + animalSecreto.nome + "!";
    botao.disabled = true;
    return;
  }

  // Errou
  tentativas--;

  if (tentativas > 0) {
    mensagem.innerText =
      "❌ ERROU!!\n" +
      "🔤 Começa com: " + animalSecreto.nome[0].toUpperCase() + "\n" +
      "🔠 Letras: " + animalSecreto.nome.length + "\n" +
      "🐾 Tipo: " + animalSecreto.tipo + "\n" +
      "🌍 Habitat: " + animalSecreto.habitat;
  } else {
    mensagem.innerText = "💀 Fim! O animal era " + animalSecreto.nome;
    botao.disabled = true;
  }

  atualizarTentativas();
});

// Evento do botão "Recomeçar"
botaoReset.addEventListener("click", reiniciarJogo);

// Inicializa
atualizarTentativas();