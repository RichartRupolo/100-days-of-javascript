const count = document.querySelector('.count')
const subract = document.querySelector('.subract')
const reset = document.querySelector('.reset')
const add = document.querySelector('.add')


add.addEventListener('click', () => {
    count.innerHTML ++;
})


subract.addEventListener('click', () => {
    count.innerHTML --;
})

reset.addEventListener('click', () => {
    count.innerHTML = 0;
})