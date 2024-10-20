let mainText = document.querySelector('.main h1')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  console.log('scrollY', value)

  if (value > 300) {
    mainText.style.animation = 'back 1s ease-out forwards'
  } else {
    mainText.style.animation = 'slide 1s ease-out'
  }
})

let secondText = document.querySelector('.main .nav')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  console.log('scrollY', value)

  if (value > 700) {
    secondText.style.animation = 'rback 1s ease-out forwards'
  } else {
    secondText.style.animation = 'rslide 1s ease-out'
  }
})

let threeText = document.querySelector('.main .tt')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  console.log('scrollY', value)

  if (value > 700) {
    threeText.style.animation = 'slide 1s ease-out forwards'
  } else {
    threeText.style.animation = 'back 1s ease-out'
  }
})

document.getElementById('time').innerHTML = new Date().toLocaleString()
