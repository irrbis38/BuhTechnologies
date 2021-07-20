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


// аккордеон в reviews

let reviewArrows = document.querySelectorAll(".review__arrow");

for (let i = 0; i < reviewArrows.length; i++) {
  reviewArrows[i].addEventListener("click", function() {
    let panel = this.previousElementSibling;
    if (panel.classList.contains('active')) {
      panel.style.maxHeight = "134px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";      
    }
    this.classList.toggle("active");
    panel.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  });
}

// благодарственное письмо на весь экран

let reviewHovers = document.querySelectorAll(".reviews__hover");

let reviewsBlackBlackgrounds = document.querySelectorAll(".reviews__black-bg");

let reviewsFullSizeImages = document.querySelectorAll(".review__img-fullscreen");

let reviewCloseAll = document.querySelectorAll(".review__close");

for (let i = 0; i < reviewHovers.length; i++) {
  reviewHovers[i].addEventListener("click", function() {
    reviewsBlackBlackgrounds[i].classList.add("active");
    reviewsFullSizeImages[i].classList.add("active");
  });
}

for (let i = 0; i < reviewsBlackBlackgrounds.length; i++) {
  reviewsBlackBlackgrounds[i].addEventListener("click", function() {
    reviewsBlackBlackgrounds[i].classList.remove("active");
    reviewsFullSizeImages[i].classList.remove("active");
  });
}

for (let i = 0; i < reviewCloseAll.length; i++) {
  reviewCloseAll[i].addEventListener("click", function() {
    reviewsBlackBlackgrounds[i].classList.remove("active");
    reviewsFullSizeImages[i].classList.remove("active");
  });
}