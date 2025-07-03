
const style = document.createElement('style');
style.textContent = `
  body {
    opacity: 0;
    transition: opacity 0.8s ease;
  }
`;
document.head.appendChild(style);


window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});


document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = href;
      }, 800);
    });
  }
});
function mostrarMensagem() {
  document.getElementById("mensagem").textContent = "No there is no way back";
}
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas);            
console.log(frutas[0]);         
console.log(frutas.length);     
frutas.push("uva");

console.log(frutas);
function mostrarMensagem() {
  document.getElementById("caixa").value = "Why?";
}

const texto = document.querySelector("h1");
const botao = document.querySelector("button");
let usandoVerde = true;
botao.addEventListener("click", () => {
  if (usandoVerde) {
    texto.style.color = "darkred"; // vinho
  } else {
    texto.style.color = "rgb(18, 78, 6)"; // verde escuro
  }
  usandoVerde = !usandoVerde;
});



const button = document.getElementById('toggleColorBtn');
const body = document.body;

const COR_VINHO = 'rgb(128, 0, 32)';
const COR_VERDE = 'rgb(18, 78, 6)';


function aplicarCorSalva() {
  const corSalva = localStorage.getItem('corFonte');
  if (corSalva) {
    body.style.color = corSalva;
  } else {
  
    body.style.color = COR_VERDE;
  }
}

function alternarCor() {
  const corAtual = body.style.color;
  if (corAtual === COR_VINHO) {
    body.style.color = COR_VERDE;
    localStorage.setItem('corFonte', COR_VERDE);
  } else {
    body.style.color = COR_VINHO;
    localStorage.setItem('corFonte', COR_VINHO);
  }
}

button.addEventListener('click', alternarCor);


aplicarCorSalva();



