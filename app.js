// Declara variáveis globais
let quiz   = document.querySelector( '.quiz' )
let result = document.querySelector( '.result' )
let answer = document.querySelector( '.answer' )
let frame  = document.querySelector( 'iframe' )

// Cria função para ler a resposta do quiz 
function checkAnswer( event ) {

  // Desativa clique no quiz
  quiz.classList.add( 'inactive' )

  // Cria variável que representa a alternativa clicada
  let alternative = event.target

  // Aplica classe “clicada” para estilizar via CSS
  alternative.classList.add( 'clicked' )

  // Se a <li> clicada contém a classe “correct”
  if ( alternative.classList.contains( 'correct' ) ) {

    // Mostra a resposta positiva 
    result.textContent = 'Você acertou.'

    // Aplica cor "positiva"
    result.style.color = 'YellowGreen'

  //Se não
  } else {

    // Mostra resposta negativa 
    result.textContent = 'Incorreto.'

    // Aplica a cor "negativa"
    result.style.color = 'Salmon'
  }

  // Mostra gráfico para ambos os casos
  frame.style.display = 'initial'
  
  // Mostra .answer para amabos os casos
  answer.style.display = 'initial'

}

// Seleciona todas as <li>
let alternatives = document.querySelectorAll( 'li' )

// Para cada <li>
for ( let alternative of alternatives ) {

  // Ouve o evento de click e roda a função
  alternative.addEventListener( 'click', checkAnswer )

}