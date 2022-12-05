const playBtn = document.querySelectorAll('.example-track__button');
const audio = new Audio('../sounds/juicy.mp3');
let playing = false;


playBtn.forEach(element => {
  audio.preload = "auto";
  audio.addEventListener('ended', function() {playing = false});
  element.addEventListener('click', ()=> {
    let imgSource = element.querySelector('img');
    playBtn.forEach(el => {
      let imgSource = el.querySelector('img');
      imgSource.setAttribute('src', '../img/icons/arrow-btn.svg')
    })
    if (playing) {
      audio.pause();
      imgSource.setAttribute('src', '../img/icons/arrow-btn.svg')
    } else {
      audio.play();
      imgSource.setAttribute('src', '../img/icons/pause-btn.svg')
    }
    playing = !playing;
  });
})

const priceItem = document.querySelectorAll('.price__item');

priceItem.forEach(element => {
  let checkButton = document.querySelectorAll('.price__item input');
  element.addEventListener('click', ()=> {
    checkButton.forEach(checkElement => {
      checkElement.removeAttribute('checked')
    })
    let checkItem = element.querySelector('input');
    priceItem.forEach(el => {
      el.classList.remove('price__item_active')
    })
    if (element.childElementCount < 1) {
      return
    }
    element.classList.add('price__item_active')
    checkItem.setAttribute('checked', '');
  })
})