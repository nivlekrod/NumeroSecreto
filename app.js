const mensagemDeBoasVindas = 'Boas vindas ao jogo do número secreto';
alert(mensagemDeBoasVindas);
let numeroDeTentativas = 5;
let numeroSecreto = Math.floor(Math.random() * 101);
let numeroChute

while (numeroDeTentativas > 0) {
    numeroChute = parseInt(prompt(`Digite o seu palpite do número secreto (0 a 100). Você tem ${numeroDeTentativas} tentativas`));

    if (numeroChute === numeroSecreto){
        alert(`Parabéns! Você acertou o número secreto, é ${numeroSecreto}`)
    } else {
        numeroDeTentativas -= 1;
        if (numeroDeTentativas > 0) {
            alert(`Poxa, você errou o número :(`);
            alert(`Mas relaxe! Você ainda tem ${numeroDeTentativas} tentativas`);
            if (numeroDeTentativas === 1) {
                alert(`Essa é a sua última tentativa!`);
            }
        } else {
            alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
        }
    }
}

if (numeroChute !== numeroSecreto) {
    alert(`Fim de jogo! Suas tentativas acabaram. O número secreto era ${numeroSecreto}.`);
}