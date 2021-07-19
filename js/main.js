const abilityBtn = document.querySelector('.ability__btn');
const unabilityBtn = document.querySelector('.unability__btn');
const abilityContentAll = document.querySelectorAll('.ability__content');

const activateAbilityButtons = () => {
  if (!abilityBtn.classList.contains('active')) {
    abilityBtn.classList.add('active');
    unabilityBtn.classList.remove('active');
    abilityContentAll.forEach(el => el.classList.remove('active'));
  }
};

const activateUnabilityButtons = () => {
  if (!unabilityBtn.classList.contains('active')) {
    unabilityBtn.classList.add('active');
    abilityBtn.classList.remove('active');
    abilityContentAll.forEach(el => el.classList.add('active'));
  }
};

abilityBtn.addEventListener('click', activateAbilityButtons);
unabilityBtn.addEventListener('click', activateUnabilityButtons);