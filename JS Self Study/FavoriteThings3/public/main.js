document.querySelector('#button1').addEventListener('click',() => {
    console.log('clicked')
})

//THING DEFINITION
class Thing{
    constructor(text,image){
        this.text = text
        this.image = image
    }
}

//STORAGE

//UI
class UI {
    static displayThings() {
        const things = [
            {
                text: "olives",
                image: "https://texashillcountryoliveco.com/cdn/shop/articles/stuffed-olives-garlic-to-feta-recipes-benefits-explored-966479.jpg?v=1687220153"
            },
            {
                text: "kimchi",
                image: "https://cdn.apartmenttherapy.info/image/upload/v1700248264/k/Photo/Series/2023-11-how-to-make-kimchi/how-to-make-kimchi-269.jpg"
            }
        ];
        things.forEach((thing) => UI.addThingToList(thing));
    }
    static addThingToList(thing){
        const list = document.querySelector('#thingList')
        const row = document.createElement('tr')

        row.innerHTML = `
    <td>
    <div class='border-2 border-black w-52 ' style='background-image: url("${thing.image}");'>
    <span>${thing.text}</span>
            <button id='button2' class='bg-cyan-500 text-white
             hover:bg-cyan-700 font-bold py-1 px-2 rounded-lg'>X</button>
        </div>
    </td>
`;
        list.appendChild(row)
        console.log('add')

    }

    static clearFields(){
        const thingInput = document.querySelector('#thing').value = ''
        const imageInput = document.querySelector('#image').value = ''
    }

    static deleteThing(del){


        const row = del.parentElement.parentElement
        if (del.id === 'button2'){

            row.remove()

        }

    }
}




//event: display things
document.addEventListener('DOMContentLoaded',UI.displayThings)

//event: add thing
const thingSubmit = document.querySelector('#addThingButton')
document.querySelector('#thingForm').addEventListener('submit',(e) =>
{
    e.preventDefault()

const thing = document.querySelector('#thing').value
const image = document.querySelector('#image').value

if(thing === ''){
    alert('come on')
}else{
    const newThing = new Thing(thing,image)
    UI.addThingToList(newThing)
    UI.clearFields()


    
}

})


const thingDelete = document.querySelector('#thingList').addEventListener('click',(e)=> {
    UI.deleteThing(e.target)

}


)
