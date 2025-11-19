// Variáveis de Estado do Jogo
let numeroSecreto = 0
let tentativasRestantes = 10
let historicoChutes = []

// Elementos do DOM
const inputChute = document.getElementById('chute')
const btnTentar = document.getElementById('btn-tentar')
const btnReiniciar = document.getElementById('btn-reiniciar')
const pDica = document.getElementById('dica')
const pTentativas = document.getElementById('tentativas')
const pHistorico = document.getElementById('historico')

// 1. Função para iniciar ou reiniciar o jogo
function iniciarJogo() {
    // Gera um número aleatório entre 1 e 100
    numeroSecreto = Math.floor(Math.random() * 100) + 1
    tentativasRestantes = 10
    historicoChutes = []

    // Atualiza o DOM
    pDica.textContent = 'Tente acertar o número entre 1 e 100!'
    pTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`
    pHistorico.textContent = 'Histórico de chutes: '
    inputChute.value = ''
    inputChute.disabled = false
    btnTentar.style.display = 'inline-block'
    btnReiniciar.style.display = 'none'
}

// 2. Função principal para processar a tentativa
function processarTentativa() {
    const chute = parseInt(inputChute.value)

    // Validação básica
    if (isNaN(chute) || chute < 1 || chute > 100) {
        pDica.textContent = 'Por favor, digite um número válido entre 1 e 100.'
        return
    }

    // Adiciona o chute ao histórico (Array)
    historicoChutes.push(chute)
    tentativasRestantes--

    // Atualiza o DOM (Loops e Arrays)
    pTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`
    pHistorico.textContent = `Histórico de chutes: ${historicoChutes.join(', ')}`

    // 3. Condições (if/else if/else) para dar a dica
    if (chute === numeroSecreto) {
        pDica.textContent = `🎉 Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${10 - tentativasRestantes} tentativas!`
        fimDeJogo(true)
    } else if (tentativasRestantes === 0) {
        pDica.textContent = `Game Over! O número secreto era ${numeroSecreto}.`
        fimDeJogo(false)
    } else if (chute < numeroSecreto) {
        pDica.textContent = 'Seu chute foi muito baixo. Tente um número maior.'
    } else {
        pDica.textContent = 'Seu chute foi muito alto. Tente um número menor.'
    }

    // Limpa o campo de entrada
    inputChute.value = ''
}

// 4. Função para finalizar o jogo
function fimDeJogo(vitoria) {
    inputChute.disabled = true
    btnTentar.style.display = 'none'
    btnReiniciar.style.display = 'inline-block'
}

// 5. Adiciona Listeners
btnTentar.addEventListener('click', processarTentativa)
btnReiniciar.addEventListener('click', iniciarJogo)

// Inicia o jogo ao carregar a página
iniciarJogo()
