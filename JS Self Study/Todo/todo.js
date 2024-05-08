class Todo{
    constructor(text,isDone){
        this.text = text
        this.isDone = false
    }
}



//setting local variables equal to components queried from the DOM
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todotext')
const todoList =document.querySelector('#todos')
const doneTodoList = document.querySelector('#doneTodoList')



let todos = [];
let doneTodos = [];

todoForm.addEventListener('submit',onsubmit)
function onsubmit(e){
    e.preventDefault()
    console.log (todoInput.value)
    if (todoInput.value === ''){
        alert('Please enter a value')
    }else{
        const newTodo = new Todo(todoInput.value,false)
        todos.push(newTodo); // Add the new todo to the todos array

        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${newTodo.text}`))
        
        const icon = document.createElement('i')
        icon.className = 'fas fa-check';
        li.appendChild(icon)
        
        todoList.appendChild(li)

        todoInput.value = ''

        icon.addEventListener('click',function(){
            // Move the todo from the todos array to the doneTodos array
            const index = todos.indexOf(newTodo);
            if (index > -1) {
                todos.splice(index, 1);
                doneTodos.push(newTodo);
            }

            doneTodoList.appendChild(li);
            todoList.removeChild(li);
        })
    }
}