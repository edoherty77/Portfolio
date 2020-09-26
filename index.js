// Toggle mobile menu
const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
console.log(menu)

function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active')
    toggle.innerHTML = "<i class='fas fa-bars'></i>"
  } else {
    menu.classList.add('active')
    toggle.innerHTML = "<i class='fa fa-times'></i>"
  }
}

$('.carousel').carousel()
