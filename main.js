// JavaScript Document
console.log("TRANSPERANCY / PRIVACY");

// variáveis

let botaoP = document.querySelector("#btn1");
let botaoT2 = document.querySelector("#btn2");

let privacy = document.querySelector("#privacy");
let transp = document.querySelector("#transp");

let selectedColor = ["#FF5A08", "#0BD3D8", "#FF0062", "#00FF36"];
let errColor = selectedColor[0];

let main = document.querySelector("main");
let count = 0;

///////////////////////////////////////////////////////////////

// declara função

// botão_ click //

// este código está a dar erros ... não percebo 

/*
function pressP() {                             //  isto funciona bem 
  if (botaoP.className == "btn1") {
    botaoP.textContent = "transparency";
    botaoP.className = "btn2 transp";
    botaoP.style.marginLeft = "150px";
    

  } else if (botaoP.className == "btn2 transp") {       // o hover fica estranho e não grava a resposta
    botaoP.textContent = "privacy";
    botaoP.className = "btn1 privacy";
    botaoP.style.marginLeft = "400px";
    
  }
} 


function pressT2() {                            // não grava a resposta     
  if (botaoP.className == "btn2") {
    botaoP.textContent = "privacy";
    botaoP.className = "btn1 privacy";
    botaoP.style.marginLeft = "400px";
    

  } else if (botaoP.className == "btn2") {
    botaoP.textContent = "privacy";
    botaoP.className = "btn1 privacy";
    botaoP.style.marginLeft = "400px";
    
  }
} 
*/

// este cógio funciona bem 

function pressP() {
  document.querySelector("#btn1 span").textContent = "transparency";
  botaoP.style.marginLeft = "150px";
}

function pressT2() {
  document.querySelector("#btn2 span").textContent = "privacy";
  botaoT2.style.marginRight = "400px";
  botaoT2.style.marginLeft = "400px";
}


///////////////////////////////////////////////////////////////


function start() {
  // criar o elemento
  let appear = document.createElement("span");

  // configurar o elemento… conteúdo, classes, comportamentos…
  appear.innerHTML = "ERROR";

  let x = Math.random() * window.innerWidth + "px";
  let y = Math.random() * window.innerHeight + "px";
  appear.style.left = x;
  appear.style.top = y;

  appear.style.display = "block";
  appear.style.position = "absolute";


  appear.style.color = errColor;
  appear.style.fontFamily = "Roboto Mono ,monospace";
  appear.style.fontSize = '50pt';
  appear.style.fontVariationSettings = "\"wght\" 414, \"ital\" 1"; // não funciona :/

  main.appendChild(appear);
}

let randIndexNumber = Math.floor(Math.random() * selectedColor.length);
console.log("numero da cor sorteada: ", randIndexNumber);

errColor = selectedColor[randIndexNumber];
console.log("valor da cor sorteada: ", errColor);

setInterval(start, 1000);

/* queria colocar as variáveis no ERRO, para criar confusão e distrair o utilizador, mas  over não está a funicionar 
function overE() {
  console.log("ooover aqui");

  appear.style.fontSize = '100pt';
  appear.style.fontFamily = "Roboto Mono ,monospace";
  appear.style.fontStyle = "italic";
  appear.style.fontVariationSettings = "\"wght\" 414, \"ital\" 1";

  main.appendChild(appear);
} */

///////////////////////////////////////////////////////////////

// add listerner

botaoP.addEventListener("click", pressP);

botaoT2.addEventListener("click", pressT2);

appear.addEventListener("mouseover", appear);


