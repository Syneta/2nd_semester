const wizardsArray = [
    {
        name: 'Harry Potter',
        hair: 'black',
    },
    {
        name: 'Hermione Granger',
        hair: 'brown',
    },
    {
        name: 'Ron Weasley',
        hair: 'red',
    },
    {
        name: 'Luna Lovegood',
        hair: 'yellow',
    },
    {
        name: 'Dumbledore',
        hair: 'gray',
    },
]


const wizardList = document.getElementById('snape')

function renderTheWizards() {
    wizardsArray.forEach((wizard) => {
        console.log(wizard)
        const listItem = document.createElement('li')
        listItem.textContent = wizard.name
        listItem.style.color = wizard.hair
        wizardList.appendChild(listItem)
    })
}
renderTheWizards()



