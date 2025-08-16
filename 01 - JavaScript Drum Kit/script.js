function playSoundByKeyCode(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio || !key) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function handleKeyDown(e) {
  playSoundByKeyCode(e.keyCode);
}

function handleClick(e) {
  const keyElement = e.currentTarget;
  const keyCode = keyElement.getAttribute('data-key');
  playSoundByKeyCode(keyCode);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Select all key divs
const keys = document.querySelectorAll('.key');

// this will add the keyboard event
window.addEventListener('keydown', handleKeyDown);

// it'll add the click event to each key when we click
keys.forEach(key => {
  key.addEventListener('click', handleClick);
  key.addEventListener('transitionend', removeTransition);
});
