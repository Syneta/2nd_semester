// Runs after the entirety of the code has been initialized
window.onload = () => {
  //   console.log('window finished loading')
}

let number = 0

const numberTag = document.getElementById('number')

const comparisonOne = 100 >= 10 // true
const comparisonTwo = 100 > 100 // false
const comparisonThree = 100 === 100 // true

const onIncrementClick = () => {
  number = number + 1
  if (number % 2 === 0) {
    console.log('number is even!')
  }
  console.log(number)
}

const onDecrementClick = () => {
  number = number - 1
}

const saveToLocalStorage = () => {
  sessionStorage.setItem('number', number)
  console.log('saved number', number)
}

const getItemFromLocalStorage = () => {
  const savedNumber = sessionStorage.getItem('number')
  console.log(savedNumber)
}

const input = document.getElementById('input')
const inputValue = document.getElementById('input-value')

input.addEventListener('click', event => {
  inputValue.textContent = event.target.value
})

const randomPersonButton = document.getElementById(
  'select-random-person-button'
)

const randomPersonText = document.getElementById('random-person')

personArray = ['harry', 'ron', 'hermoine']

randomPersonButton.addEventListener('click', event => {
  const randomNumber = Math.floor(Math.random() * 3)
  randomPersonText.textContent = personArray[randomNumber]
})
