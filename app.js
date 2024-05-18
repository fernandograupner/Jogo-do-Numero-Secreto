
// Aqui foi criado 2 variaveis titulo e paragrafo para escrever frase dentro da tag principal h1 e p do html
// usado as plavavras reservadas document para alterar a tag e querySelector seleciona a tag
// e innerHTML para incluir o valor na tag.
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
// Criando função responsavel por executar uma ação. Nesse caso ação do botão chutar

// criando uma lista vazia (Array)
let listaDeNumerosSorteados = []; 
let numeroLimite = 10;

//declaração variavem numero secreto recebendo o valor que a função retorna nesse caso numero aleatorio.
let numeroSecreto = gerarNumeroAleatorio();
// variavel criada para realizar contador
let tentativas = 1;

// Função criada com paramentros para exibir os textos nas telas.
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}
// Função para exibir os textos nas telas. Com os parametros declarados
function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo do Número Secreto' );
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
// chamando a função sempre precisa ter uma chamada inicial para funcionar
exibirMensagemInicial();
// funcção para ação do botão chute
function verificarChute(){
    //criada variavel chute e inputou o valor pegando o valor e comparando
    let chute = document.querySelector('input').value;
        if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou');
            let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
            let mensagemTentativas = `Você descobriu numero secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            // habilitado o botão de novo jogo
            document.getElementById('reiniciar').removeAttribute('disabled');
    
        }else {
            if (chute > numeroSecreto){
                exibirTextoNaTela('p', 'O numero secreto e menor');
            }else{
                exibirTextoNaTela('p', 'O numero secreto e maior');
            }
            tentativas++;
            limparCampo();
        }
        
}
// função para gerar o numero aleatorio usando Função Math.Random
function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElemntosNaLista = listaDeNumerosSorteados.length
    if ( quantidadeDeElemntosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
     // verificando se o numnero escolhido esta na lista ou não usando metodo includes
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }

   }
// criado uma função para limpar o campo
function limparCampo(){
    // essa linha esta selecionando o campo chute
    chute = document.querySelector('input');
    // essa linha vai pegar o campo e zerar
    chute.value = '';
}
// função criada para fazer o botão novo chute zerar o jogo
// vai gerar outro numero, limpar o campo, zerar tentativas e atualizar as mensagens iniciais
// e desabilitar o botão novo jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true);
}

