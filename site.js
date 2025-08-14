const perguntas = [
  {
    pergunta: "Você prefere refeições rápidas ou experiências demoradas?",
    opcoes: [
      { texto: "Rápidas e práticas", valor: 1 },
      { texto: "Demoradas e elaboradas", valor: 2 },
      { texto: "Não sei", valor: 0 }
    ]
  },
  {
    pergunta: "Você gosta de experimentar sabores diferentes?",
    opcoes: [
      { texto: "Prefiro o que já conheço", valor: 1 },
      { texto: "Amo provar coisas novas", valor: 2 },
      { texto: "Não sei", valor: 0 }
    ]
  },
  {
    pergunta: "Você gosta mais de ambientes informais ou sofisticados?",
    opcoes: [
      { texto: "Informais", valor: 1 },
      { texto: "Sofisticados", valor: 2 },
      { texto: "Não sei", valor: 0 }
    ]
  },
  {
    pergunta: "Um cardápio com opções apimentadas?",
    opcoes: [
      { texto: "Sim", valor: 1 },
      { texto: "Não", valor: 2 },
      { texto: "Não sei", valor: 0 }
    ]
  },
  {
    pergunta: "Você prefere comer sozinho(a) ou acompanhado(a)?",
    opcoes: [
      { texto: "Sozinho(a)", valor: 1 },
      { texto: "Acompanhado(a)", valor: 2 },
      { texto: "Não sei", valor: 0 }
    ]
  },
  {
    pergunta: "O que é mais importante para você?",
    opcoes: [
      { texto: "Rapidez no atendimento", valor: 1 },
      { texto: "Apresentação e sofisticação dos pratos", valor: 2 },
      { texto: "Não sei", valor: 0 }
    ]
  }
];

const restaurantes = [
  { nome: "Pizzaria", img: "pizza.webp" },
  { nome: "Restaurante Japonês", img: "comida japonesa.jpg" },
  { nome: "Churrascaria", img: "churrasco.jpg" },
  { nome: "Restaurante Mexicano", img: "comida mexicana.jpg" },
  { nome: "Restaurante Árabe", img: "BARUK - GRUPO BENVINDA.jpg" },
  { nome: "Fast food", img: "fast food.jpeg" }
];

let indice = 0;
let pontuacao = 0;
let usouNaoSei = false;

function mostrarPergunta() {
  if (indice < perguntas.length) {
    const p = perguntas[indice];
    let html = `<div class="pergunta"><p><strong>${p.pergunta}</strong></p>`;
    p.opcoes.forEach(opcao => {
      html += `<button onclick="responder(${opcao.valor})">${opcao.texto}</button>`;
    });
    html += `</div>`;
    document.getElementById("quiz").innerHTML = html;
  } else {
    mostrarResultado();
  }
}

function responder(valor) {
  if (valor === 0) usouNaoSei = true;
  else pontuacao += valor;
  indice++;
  mostrarPergunta();
}

function mostrarResultado() {
  document.getElementById("quiz").innerHTML = "";

  let resultado;
  if (usouNaoSei) {
    resultado = restaurantes[Math.floor(Math.random() * restaurantes.length)];
  } else {
    if (pontuacao <= 6) {
      resultado = restaurantes[0];
    } else if (pontuacao <= 9) {
      resultado = restaurantes[1];
    } else if (pontuacao <= 12) {
      resultado = restaurantes[2];
    } else if (pontuacao <= 14) {
      resultado = restaurantes[3];
    } else if (pontuacao <= 16) {
      resultado = restaurantes[4];
    } else {
      resultado = restaurantes[5];
    }
  }

  document.getElementById("resultado").innerHTML = `
    <p>Você combina com: <strong>${resultado.nome}</strong></p>
    <img src="${resultado.img}" alt="${resultado.nome}" />
  `;
}

mostrarPergunta();