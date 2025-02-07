const title = document.querySelector('.title');
const btnContainer = document.querySelector('.btn-container');
const btnYes = document.querySelector('.btn-yes');
const btnNo = document.querySelector('.btn-no');

btnYes.addEventListener('click', () => {
  title.textContent = 'Yay! 💖';
  btnContainer.remove();

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      confetti();
    }, i * 250);
  }
});

btnNo.addEventListener('click', () => {
  const fontSize = getComputedStyle(btnYes).getPropertyValue('--font-size');
  const padding = getComputedStyle(btnYes).getPropertyValue('--padding');
  const borderRadius = getComputedStyle(btnYes).getPropertyValue('--border-radius');

  const currentFontSize = +fontSize.substring(0, fontSize.indexOf('rem'));
  const currentPadding = +padding.substring(0, padding.indexOf('rem'));
  const currentBorderRadius = +borderRadius.substring(0, borderRadius.indexOf('px'));

  btnYes.style.setProperty('--font-size', `${currentFontSize * 1.25}rem`);
  btnYes.style.setProperty('--padding', `${currentPadding * 1.25}rem`);
  btnYes.style.setProperty('--border-radius', `${currentBorderRadius * 1.25}px`);
});
