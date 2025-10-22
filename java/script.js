const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const caixaResultados = document.querySelector(".texto-resultado");
const caixaResultados = document.querySelector(".botao-jogar-novamente");
const caixaResultados = document.querySelector(".novamente-botao");
const telaInicial = document.querySelector(".tela-inicial");
const botaoInicial = document.querySelector(".iniciar-botao");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
 
botaoIniciar.addEventListener('click,iniciaJogo')