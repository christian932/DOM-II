// Your code goes here
const header = document.querySelector('header.main-navigation');

header.addEventListener('mouseover', e => {
  header.style.backgroundColor = 'cyan';
}
)

header.addEventListener('mouseleave', e => {
  header.style.backgroundColor = '';
}
)

const headerImg = document.querySelector('header img');

headerImg.addEventListener('click', e => {
  headerImg.style.height = '300px';
}
)

headerImg.addEventListener('dblclick', e => {
  headerImg.style.height = '';
}
)

const body = document.querySelector('body');

body.addEventListener('keydown', e => {
  e.key == 'f' ? body.style.backgroundColor = 'lime' : console.log('didnt work');
}
)

body.addEventListener('keyup', e => {
  e.key == 'f' ? body.style.backgroundColor = '' : console.log('didnt work');
}
)

headerImg.addEventListener('load', e => {
  headerImg.style.transition = 'all 3s ease-in-out';
  headerImg.style.transform = 'rotatey(720deg)';
}
)

const para = document.querySelectorAll('p');
console.log(para)

para.forEach(e => {
  e.addEventListener('scroll', event => {
    event.style.color = 'pink';
    console.log('resized');
  }
  )
}
)