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

///////////////////////SCROLL FUNCTIONALITY////////////////////////

const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')
const home = document.querySelector('#home')
const portfolio = document.querySelector('#portfolio')
const nav = document.querySelector('.headerDiv')

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -80px 0px',
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

// appearOnScroll.observe(nav)

sliders.forEach((slider) => {
  appearOnScroll.observe(slider)
})

const options = {
  rootMargin: '-150px',
}

$(document).ready(function () {
  let scrollLink = $('.scroll')

  //smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault()
    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000,
    )
  })

  //Active link switching
  $(window).scroll(function () {
    let scrollbarLocation = $(this).scrollTop()
    scrollLink.each(function () {
      let sectionOffset = $(this.hash).offset().top - 20
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active')
        $(this).parent().siblings().removeClass('active')
      }
    })
  })
})
