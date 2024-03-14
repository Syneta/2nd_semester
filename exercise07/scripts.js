let number = 0
let text = "\!bOoMm\!"
let condition = 35

const numberTag = document.getElementById('number')
const textTag = document.getElementById('text')




const onIncrementClick = () => {
  number = number + 5
  console.log(number)
  numberTag.textContent = number
  if(number > condition){
    textTag.textContent = text
  }
}

const onDecrementClick = () => {
  number = number - 5
  if(number < -condition){
    textTag.textContent = text
  }
  numberTag.textContent = number
  console.log(incrementValue)
}

