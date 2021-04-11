let minhaImagem = document.querySelector("img");

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute("src");
    if(meuSrc = minhaImagem.getAttribute("src")){
        minhaImagem.setAttribute("src", "imagens/javascript-logo.png");
    }else{
        minhaImagem.setAttribute("src", "imagens/firefox-logo.png")
    }
}

let meuBotao = document.querySelector("button");
let meuCabecalho = document.querySelector("h1");

function defineNomeUsuario(){
    let meuNome = prompt("Por favor, Digite seu nome.");
    localStorage.setItem("nome", meuNome);
    meuCabecalho.textContent = "Mozila firefox é ótimo, " + meuNome;
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla firefox é ótimo, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
    }
  }

