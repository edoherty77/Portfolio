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

const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px',
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll,
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})
