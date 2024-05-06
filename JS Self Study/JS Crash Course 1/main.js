console.log('you done fed up now');
console.error('error biatch')
console.warn('u been warned')

//var, let const

//var globally scoped
//let locally scoped

// let can be reassigned
let age = 23;
age = 24;

//const cannot be reassigned
console.log(age)
const name = 'harry'
name - 'hank'
console.log(name)



//DATA TYPES
//string, number, boolean, null, undefined, symbol
const name1 = 'harry';
const age1 = 23
const bool = isCrusher = true
const gpa = 3.99
const x = null
const y = undefined
const interests = 'coding, climbing, cooking, chess'
console.log(typeof y)

//STRINGS
//concat
console.log(name1 + 'is ' +age1 +' years old')
const greeting = (`my name is ${name1} and my gpa is ${gpa}`)
console.log(greeting)

//parantheses for methods, no parantheses for properties
console.log(greeting.length)
console.log(name1.toUpperCase())
console.log(greeting.substring(0,10))
console.log(name1.split(''))
console.log(interests.split(','))

//ARRAYS
//in JS arrays can be multi-type, loosely typed
const favFoods = ['kimchi', 'olives', 'parsley', 2]
favFoods.push('yogurt')
favFoods.unshift('naan')
favFoods.pop()
console.log(favFoods)
console.log(favFoods.indexOf('olives'))

//OBJECTS
const person = {
    name2: 'harry',
    age2: 23,
    interests: ['coding', 'climbing', 'cooking', 'chess'],
    address: {
        street: '123 main st',
        city: 'boulder',
        state: 'co'
    }
}

console.log(person.address.state)
console.log(person.interests[1])
const {name2, age2, address: {city}} = person
console.log(name2)

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    }
]
console.log(todos[1].text)
todoJSON = JSON.stringify(todos)
console.log(todoJSON)

//LOOPS
for (let i = 0; i < 10; i++){
    console.log(i)
}

todos.forEach(element => {
    console.log(element.text)
    
});

for(let todo of todos){
    console.log(todo.isCompleted)
}


// map returns a variable, in this case an array
//todos.map means for each todo, return the text
todoText = todos.map(function(todo){
    return todo.text
})
console.log(todoText)

//filter returns a variable, in this case an array
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;

    //.map returns the array which meet the above criteria
}).map(function(todo){
    return todo.text
})
console.log(todoCompleted)

//CONDITIONALS

const x1 = 10;

if(x1 == 10){
    console.log('x is 10')
}

a = 0
//double equals does not check for data type
if (a == false){
    console.log('a is false')
}

//triple equals checks for data type
if (a === false){
    console.log('a is false')
}
else{
    console.log('a is not false')
}

//ternary operator
const b = 10;
const color = x > 10 ? 'red' : 'blue'   
console.log(color)

//switch
switch(color){
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    default:
        console.log('color is not red or blue')
        break;
}

//FUNCTIONS

function addNums(a,b){
    return a+b
}
console.log(addNums(2,3))

const subtractNums = (a,b) => console.log(a-b)
subtractNums(10,5)


//constructor
function Person(firstName,lastName,DOB) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = new Date(DOB);
    
    this.getBirthYear = function (){
        return this.DOB.getFullYear()
    }
}


//prototype method better practice
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}


p1 = new Person('harry', 'crusher', '12-12-1996')
p2 = new Person('hank', 'tank', '10-10-1990')

console.log(p1.DOB)
console.log(p2.DOB)
console.log(p2.getBirthYear())
console.log(p2.getFullName())

//class definition
class Dog {
    constructor(name3,size){
        this.name3 = name3
        this.size = size
    }
    getSize(){
        return `${this.name3} is size ${this.size}`
    }
}

fido = new Dog('fido', 'small')
console.log(fido.getSize())