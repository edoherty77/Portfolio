// Toggle mobile menu
const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
console.log(menu)

const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')

  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`
      }
    })

    //Burger Animation
    burger.classList.toggle('toggle')
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.toggle('nav-active')
      burger.classList.toggle('toggle')
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.4
          }s`
        }
      })
    })
  })
}

navSlide()

//Submit Button functionality

function submitMessage() {
  alert('yo')
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
    var scrolledY = $(window).scrollTop()
    $('#home').css('background-position', 'left ' + scrolledY + 'px')
    scrollLink.each(function () {
      let sectionOffset = $(this.hash).offset().top - 20
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active')
        $(this).parent().siblings().removeClass('active')
      }
    })
  })
})
