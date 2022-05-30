const menu = document.querySelector('.menu')
const hideMenu = document.querySelector('.hide-menu')

menu.addEventListener('click', function () {
  hideMenu.classList.toggle('show-menu')
})

console.log(menu)