const card = document.querySelector('.card');
const mainLink = document.querySelector('.main-link');

function handleClick() {
  const isTextSelected = window.getSelection().toString();
  if (!isTextSelected) {
    mainLink.click();
  }
}

card.addEventListener('click', handleClick);

// You might want to add common class like 'clickable' on all elements and use that for the query selector.
const clickableElements = Array.from(card.querySelectorAll('a'));

clickableElements.forEach(ele =>
  ele.addEventListener('click', e => e.stopPropagation())
);
