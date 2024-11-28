listaDeNumerosSorteados=[]
let numeroLimite=10
let numeroSecreto = geraNumeroAleatorio();
let tentativas=1

function exibirTextoNaTela(tag, texto){
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial()

function verificarChute(){
    let chute=document.querySelector('input').value;
    if (chute==numeroSecreto){
        palavraTentativas= tentativas>1? 'tentativas' : 'tentativa';
        mensagemTentativas= `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute>numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

function geraNumeroAleatorio(){
    let numeroEscolhido=parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista=listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista==numeroLimite){
        listaDeNumerosSorteados=[];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';

}

function reiniciarJogo(){
    numeroSecreto=geraNumeroAleatorio();
    limparCampo();
    tentativas=1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}