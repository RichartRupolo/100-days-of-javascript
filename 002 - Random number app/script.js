const number = document.querySelector('.number')
const generateNumber = document.querySelector('.generateNumber')


generateNumber.addEventListener('click', () => {
    const min = -10;
    const max =  10;
    const randomInt  = Math.floor(Math.random() * (max - min + 1)) + min;
    number.innerHTML = randomInt;
})

