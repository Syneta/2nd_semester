// const argsSpread = (...args) => {
//     console.log('logging all arguments', args)
// }

// argsSpread(1, 2, 3, 4, 5)


// const a = {
//     name: 'gunnsteinn'
// }

// Object assigning
// const b = Object.assign({}, a)
// Spread operator
// const b = { ...a }

// b.middleName = 'aron'

// Spread operator to destructure array
// const array = [1, 2, 3, 4, 5]

// const [one, two, ...rest] = array

// console.log(one)
// console.log(two)
// console.log(rest)

// Spread operator to destructure object
// const person = {
//     name: 'foo',
//     age: 10,
//     food: 'bar',
//     eye: 'blue',
// }

// const { eye } = person

// const logEyeColorOfPerson = (person) => {
//     const { eye } = person
//     console.log(eye)
// }

// logEyeColorOfPerson(person)


// Exercise example
// const userOne = {
//     name: 'paul',
//     age: 20,
//     salary: 600000,
//     job: 'software developer'
// }

// const userTwo = {
//     name: 'lisa',
//     age: 30,
//     salary: 900000,
//     job: 'senior software developer'
// }


// const calcAverageAgeAndSalary = (personOne, personTwo) => {
//     const averageAge = (personOne.age + personTwo.age) / 2
//     const averageSalary = (personOne.salary + personTwo.salary) / 2

//     const averageAgeAndSalary = {
//         avgAge: averageAge,
//         avgSalary: averageSalary
//     }

//     return averageAgeAndSalary
// }

// const output = calcAverageAgeAndSalary(userOne, userTwo)

// Shorter version, achieves the same
// const calcAverageAgeAndSalary = (personOne, personTwo) => ({
//     avgAge: (personOne.age + personTwo.age) / 2,
//     avgSalary: (personOne.salary + personTwo.salary) / 2
// })


// array methods
// const array = [10, 20, 30, 40, 50]

// array.forEach((item, index) => {
//     const foo = item
//     console.log(foo, index)
// })


// const list = document.getElementById('list')
// console.log(list)
// const listItem = document.createElement('li');
// listItem.textContent = 'A list item'
// list.style.cssText = 'color: red'

// list.appendChild(listItem)


const harry = {
    name: 'Harry Potter',
    hair: 'black',
}

const hermoine = {
    name: 'Hermoine Granger',
    hair: 'brown',
}

const ron = {
    name: 'Ron Weasley',
    hair: 'red',
}

// =>

const array = [
    {
        name: 'Harry Potter',
        hair: 'black',
    },
    {
        name: 'Hermoine Granger',
        hair: 'brown',
    },
    {
        name: 'Ron Weasley',
        hair: 'red',
    }
]

// ... some code to create the function that iterates over the array, e.g. renderTheWizards()

// call renderTheWizards() to render the website as desired



