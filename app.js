let NumeroSecreto = gerarNumeroAleatorio();
let Tentativas = 0;

function exibirTexto(tag,texto) {
    let campo = document.querySelector(tag);      
        campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto!');
    exibirTexto('p', 'Escolha um numero de 1 a 100');
    
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    Tentativas++;
    if (chute == NumeroSecreto) {
        exibirTexto('h1', 'Acertou, Mandou muito!');
        let palavraTentativa = Tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas = ` Você conseguiu com ${Tentativas} ${palavraTentativa}!`;
        exibirTexto('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > NumeroSecreto){
            exibirTexto ('p', 'O Número Secreto é Menor');
        } else {
            exibirTexto ('p', 'O Número Secreto é Maior');
        }
        limparCampo ();
    }
    console.log(chute == NumeroSecreto);
} 

function gerarNumeroAleatorio() {
   return parseInt(Math.random () * 100 + 1);

}
function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
    
}
function reiniciarJogo() {
    NumeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    Tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
}