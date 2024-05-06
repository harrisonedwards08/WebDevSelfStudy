// console.log(window)

// //Single Element 
// const form1 = document.getElementById('my-form')
// console.log(form1)

// const class1 = document.querySelector('h1')
// console.log(class1)

// //Multiple Element
// console.log (document.querySelectorAll('.item'))
// console.log(document.getElementsByTagName( 'h1'))

// const items = document.querySelectorAll('.item')
// items.forEach((item) => console.log(item))


// //DOM manipulation
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'biatch'
// ul.children[1].innerText = 'fers'
// ul.lastElementChild.innerHTML = '<h1>Bitch</h1>'


// const btn = document.querySelector('.btn')
// btn.style.background = 'violet'

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e.target.className)
//     document.querySelector('#my-form').style.background = '#aaa';

//     document.querySelector('body').classList.add('bg-mine')
//     document.querySelector('h1').innerText = 'working?'
//     document.querySelector('.items').lastElementChild.innerHTML = '<h2>ayo</h2>'
// })


//# means ID
//. means class
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onsubmit)
function onsubmit(e){
    e.preventDefault()
    console.log(nameInput.value)
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = "pls don't hurt me"
        // alert('bitch')

        setTimeout(() => msg.remove(),1500)
    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}`))
        userList.appendChild(li)

        nameInput.value = ''
        emailInput.value = ''
    }
}