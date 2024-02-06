/*
    Write your own code here
    DON'T touch any other files!
*/

document.querySelector('.start_here').classList.add('app')

const all = document.querySelectorAll('br')

all.forEach(doStuff)

function doStuff (elem) {
  elem.remove()
}

const section = document.querySelectorAll('section')

section.forEach(doStuff_2)

function doStuff_2 (elem) {
  elem.classList.add('filled')
}

const before = document.querySelectorAll('previousElementSibling')

before.forEach(doStuff_3)

function doStuff_3 (elem) {
  elem.remove()
}

const sections = document.querySelectorAll('section')

sections.forEach(section => {
  section.classList.add('filled')
  const prevSibling = section.previousElementSibling
  prevSibling.remove()
})
