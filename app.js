let user_score = 0
let computer_score = 0
let total_games = 0

const user_score_element = document.getElementById('user-score')
const computer_score_element = document.getElementById('comp-score')
const total_games_element = document.getElementById('total-games')
const result_element = document.getElementsByClassName('result')[0]
const reset_game_element = document.getElementById('reset-game')

const rock_element = document.getElementById('rock')
const paper_element = document.getElementById('paper')
const scissors_element = document.getElementById('scissors')

function computer_choice() {
  const choices = ['rock', 'paper', 'scissors']
  const choice = choices[Math.floor(Math.random() * 3)]
  return choice
}

function win(user_choice) {
  user_score++
  user_score_element.innerHTML = user_score
  result_element.innerHTML = '<p>You win!</p>'
  document.getElementById(user_choice).classList.add('green-glow')
  setTimeout(() => {
    document.getElementById(user_choice).classList.remove('green-glow')
  }, 500)
}

function lose(user_choice) {
  computer_score++
  computer_score_element.innerHTML = computer_score
  result_element.innerHTML = '<p>You lose!</p>'
  document.getElementById(user_choice).classList.add('red-glow')
  setTimeout(() => {
    document.getElementById(user_choice).classList.remove('red-glow')
  }, 500)
}

function draw(user_choice) {
  result_element.innerHTML = '<p>Its a draw!</p>'
  document.getElementById(user_choice).classList.add('gray-glow')
  setTimeout(() => {
    document.getElementById(user_choice).classList.remove('gray-glow')
  }, 500)
}

function game(user_choice) {
  total_games++
  total_games_element.innerHTML = total_games
  switch (`${user_choice}_${computer_choice()}`) {
    case 'rock_scissors':
    case 'scissors_paper':
    case 'paper_rock':
      win(user_choice)
      break
    case 'scissors_rock':
    case 'paper_scissors':
    case 'rock_paper':
      lose(user_choice)
      break
    default:
      draw(user_choice)
      break
  }
}

function main() {
  rock_element.addEventListener('click', () => {
    game('rock')
  })
  paper_element.addEventListener('click', () => {
    game('paper')
  })
  scissors_element.addEventListener('click', () => {
    game('scissors')
  })

  reset_game_element.addEventListener('click', () => {
    result_element.innerHTML = '<p>Start the game!</p>'
    user_score_element.innerHTML = 0
    computer_score_element.innerHTML = 0
    total_games_element.innerHTML = 0

    user_score = 0
    computer_score = 0
    total_games = 0
  })
}

main()
