// Uma boa prática é evitar a repetição de código com funções.

let listaDosNumerosSortidos= []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativa = 1


// Função tem parametro mas não tem retorno.
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto")
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10")
}

exibirMensagemInicial()

// Função que não tem parametro e não tem retorno.
// Operador booleano que é true e false.
function verificarChute() {
    let chute = document.querySelector("input").value
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Você Acertou")
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tantativa"
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`
        exibirTextoNaTela("p", mensagemTentativa)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor")
        } else {
            exibirTextoNaTela("p", "O número secreto é maior")
        }
        tentativa++
        limparCampo()
    }
}

// Função que não tem parametro mas tem retorno.
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 )
   let quantitadeDeElementosNaLista = listaDosNumerosSortidos.length

   if (quantitadeDeElementosNaLista == numeroLimite) {
    listaDosNumerosSortidos = []
   }
   // Includes = vai verificar o que está na lista, caso esteja true caso não false.
   if (listaDosNumerosSortidos.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
   } else {
    listaDosNumerosSortidos.push(numeroEscolhido)
    return numeroEscolhido
   }
}

function limparCampo() {
    chute = document.querySelector("input")
    chute.value = " "
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativa = 1
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true)
}