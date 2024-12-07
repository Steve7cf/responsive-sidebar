// toggle side bar

const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('.toggler')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle("collapsed")
})