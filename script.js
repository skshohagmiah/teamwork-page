const navber= document.querySelector('.links')
const hambergur = document.querySelector('.hambergur')
const close = document.querySelector('.close')
console.log(navber,hambergur)

hambergur.addEventListener('click', (e) => {
    navber.classList.add('open')
})

close.addEventListener('click', (e) => {
    navber.classList.remove('open')
})