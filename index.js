let arr = ['bread', 'cheese', 'egg', 'juice', 'butter', 'tomato']

let ul = document.querySelector('ul')
let isClicked= false

const showList = () => {
    arr.forEach((item) =>{
        let li = document.createElement('li')
        li.innerText = item

        li.addEventListener('click', ()=>{
            if(!isClicked){
                li.style.textDecoration = 'line-through';
                isClicked = true
            }
        })
        ul.appendChild(li)
    })
}
showList()