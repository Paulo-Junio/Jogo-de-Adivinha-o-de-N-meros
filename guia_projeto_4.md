# Guia de Execução: Projeto 4 - Jogo de Adivinhação de Números

## 🎲 Objetivo do Projeto

Criar um jogo simples que gera um número aleatório e usa **Condições (`if`)** e **Arrays** para gerenciar as tentativas do jogador.

### Conteúdos Revisados

| Conteúdo | Onde é Usado |
| :--- | :--- |
| **HTML** | Estrutura básica, tags de formulário (`<input>`, `<button>`). |
| **CSS** | Estilização, centralização de elementos. |
| **JavaScript** | Funções, `Math.random()` (números aleatórios), `parseInt()`. |
| **DOM** | Selecionar botões e campos, atualizar textos (`textContent`). |
| **Eventos** | Usar o evento `click` nos botões. |
| **Condições** | Usar `if/else if/else` para dar dicas (maior/menor). |
| **Arrays** | Usar o Array `historicoChutes` para guardar as tentativas. |
| **Variáveis** | Usar `let` para `numeroSecreto`, `tentativasRestantes` e `historicoChutes`. |

## 🛠️ Passos para a Execução

### 1. Estrutura HTML (`index.html`)

O HTML contém o campo de entrada (`input`), os botões (`Tentar` e `Reiniciar`) e os parágrafos (`<p>`) para mostrar a dica, as tentativas restantes e o histórico.

### 2. Estilização CSS (`style.css`)

O CSS centraliza o jogo na tela e estiliza os botões e o campo de entrada para um visual de jogo simples.

### 3. A Magia do JavaScript (`script.js`)

O código JavaScript gerencia toda a lógica do jogo:

#### A. Variáveis de Estado:

-   `let numeroSecreto`: Guarda o número que o jogador deve adivinhar.
-   `let tentativasRestantes`: Contador que diminui a cada chute.
-   `let historicoChutes`: Um **Array** que guarda todos os números que o jogador já tentou.

#### B. Iniciar o Jogo (`iniciarJogo`):

-   Usa `Math.random()` para gerar o número secreto.
-   **Reinicia** as variáveis de estado e o Array `historicoChutes`.
-   Atualiza o DOM para o estado inicial.

#### C. Processar a Tentativa (`processarTentativa`):

-   Pega o valor do `input` e o transforma em número inteiro (`parseInt`).
-   **Condições (`if/else if/else`)** comparam o chute com o `numeroSecreto` e dão a dica (maior ou menor).
-   Adiciona o chute ao **Array** `historicoChutes` usando `.push()`.
-   Atualiza o histórico no DOM usando `historicoChutes.join(', ')` para transformar o Array em uma string separada por vírgulas.

#### D. Fim de Jogo (`fimDeJogo`):

-   Desabilita o campo de entrada e o botão `Tentar`.
-   Mostra o botão `Reiniciar`.

## 💡 Dica de Desafio

Tente adicionar um **Loop `for`** para mostrar o histórico de chutes de uma forma mais organizada, talvez em uma lista (`<ul>`) em vez de apenas uma string. (Isso exigirá criar elementos `<li>` e usar o `for` para percorrer o Array `historicoChutes`).
