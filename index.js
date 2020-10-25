const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')
  const navbar = document.querySelector('#navbar')
  let portfolio = $('#portfolio')
  let section = portfolio.offset().top - 100

  //Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    //Burger Animation
    burger.classList.toggle('toggle')

    //Change color of navbar
    if (section <= scrollbarLocation) navbar.classList.toggle('white')

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
    //Parallax for background image
    $('#home').css('background-position', 'left ' + scrolledY + 'px')

    let portfolio = $('#portfolio')
    let section = portfolio.offset().top - 100
    //Change color of navbar
    if (section <= scrollbarLocation) {
      $('#navbar').addClass('white')
    } else {
      $('#navbar').removeClass('white')
    }

    scrollLink.each(function () {
      let sectionOffset = $(this.hash).offset().top - 100
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active')
        $(this).parent().siblings().removeClass('active')
      }
    })
  })
})

//Logo functionality

dragElement(document.getElementById('scrolldiv'))

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown(e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.preventDefault()
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null
    document.onmousemove = null
  }
}
