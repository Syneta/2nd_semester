const input = document.getElementById('inputstuff')
console.log(input)
const logInputValue = e => {}

const addToList = () => {
  console.log('adding')
  const ul = document.getElementById('list')
  const li = document.createElement('li')
  li.textContent = 'A list item'
  ul.appendChild(li)
}
