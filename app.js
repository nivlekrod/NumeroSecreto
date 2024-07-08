// const mensagemDeBoasVindas = "Boas vindas ao jogo do número secreto";
// // alert(mensagemDeBoasVindas);
// let numeroDeTentativas = 5;
// let tentativas = 1;
// let numeroMax = 100;
// let numeroSecreto = Math.floor(Math.random() * numeroMax + 1);
// console.log(numeroSecreto);

// let numeroChute;

// while (numeroDeTentativas > 0) {
//   numeroChute = parseInt(
//     prompt(
//       `Digite o seu palpite do número secreto (0 a ${numeroMax}). Você tem ${numeroDeTentativas} tentativas`
//     )
//   );

//   if (numeroChute === numeroSecreto) {
//       let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
//       alert(
//           `Parabéns! Você acertou o número secreto, é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
//       );
//     break;
//   } else {
// if (numeroChute > numeroSecreto) {
//   alert(`O número secreto é menor que o ${numeroChute}`);
// } else {
//   alert(`O número secreto é maior que o ${numeroChute}`);
// }

//     tentativas++;
//     numeroDeTentativas--;

//     if (numeroDeTentativas > 0) {
//       alert(
//         `Poxa, você errou o número :(\nMas relaxe! Você ainda tem ${numeroDeTentativas} tentativas`
//       );
//       if (numeroDeTentativas === 1) {
//         alert(`Essa é a sua última tentativa!`);
//       }
//     }
// }
// }

// if (numeroChute !== numeroSecreto) {
//   alert(
//     `Fim de jogo! Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`
//   );
// }

let numeroMax = 100;
let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 5;
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirTextoInicial() {
  exibirTexto("h1", "JS Game — Número Secreto");
  exibirTexto("p", `Digite o seu palpite do número secreto (0 a ${numeroMax})`);
}

exibirTextoInicial();

function verificarChute() { //adicionar numeroDeTentivas
  let numeroChute = parseInt(document.querySelector("input").value);

  if (numeroChute === numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    exibirTexto("h1", `Parabéns! Você acertou o número secreto!`);
    exibirTexto(
      "p",
      `Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
    );
    // Quero trocar passar para outra página/imagem posteriormente
    // alert(`Parabéns! Você acertou o número secreto, é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)
    document.getElementById("reiniciar").removeAttribute("disable");
  } else {
    if (numeroChute > numeroSecreto) {
      exibirTexto("p", `O número secreto é menor que o ${numeroChute}`);
    } else {
      exibirTexto("p", `O número secreto é maior que o ${numeroChute}`);
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * numeroMax + 1);
}

function limparCampo() {
  numeroChute = document.querySelector("input");
  numeroChute.value = "";
}

function novoJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirTextoInicial();
}
