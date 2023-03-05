const generateColor = document.querySelector('.generateColor')
const hex = document.querySelector('.hex')


generateColor.addEventListener('click', () => {
  let color = Math.random()
  color = Math.random(16).toString().substring(2,8)
  document.body.style.backgroundColor = `#${color}` 
  hex.innerHTML = `#${color}` 
})

