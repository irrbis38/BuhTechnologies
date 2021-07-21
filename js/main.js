// смена содержимого слайдов в ability
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

let body = document.querySelector("body");

for (let i = 0; i < reviewHovers.length; i++) {
  reviewHovers[i].addEventListener("click", function() {
    reviewsBlackBlackgrounds[i].classList.add("active");
    reviewsFullSizeImages[i].classList.add("active");
    body.classList.add("lock");
  });
}

for (let i = 0; i < reviewsBlackBlackgrounds.length; i++) {
  reviewsBlackBlackgrounds[i].addEventListener("click", function() {
    reviewsBlackBlackgrounds[i].classList.remove("active");
    reviewsFullSizeImages[i].classList.remove("active");
    body.classList.remove("lock");
  });
}

for (let i = 0; i < reviewCloseAll.length; i++) {
  reviewCloseAll[i].addEventListener("click", function() {
    reviewsBlackBlackgrounds[i].classList.remove("active");
    reviewsFullSizeImages[i].classList.remove("active");
    body.classList.remove("lock");
  });
}

// slider в reviews

let reviewSlider = new Swiper('.reviews__slider', {

  loop: false,
  slidesPerView: 3,
  spaceBetween: 28,
  grabCursor: true,
  pagination: {
    el: '.reviews__dots',
    type: 'bullets',
    clickable: true,
    bulletClass: 'reviews__dot',
    bulletActiveClass: 'reviews__dot--active'
  }
});

// slider в team

let teamSlider = new Swiper('.team__slider-container', {

  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.team__next',
    prevEl: '.team__prev',
  }
});

let teamPrev = document.querySelector('.team__prev');
let teamNext = document.querySelector('.team__next');

teamSlider.on('activeIndexChange', function () {
  if (teamSlider.activeIndex==0) {
    teamPrev.classList.add('hidden');
  } else {
    teamPrev.classList.remove('hidden');
  }
});

teamSlider.on('activeIndexChange', function () {
  if (teamSlider.activeIndex==4) {
    teamNext.classList.add('hidden');
  } else {
    teamNext.classList.remove('hidden');
  }
});

// аккордеон в faq

let faqItems = document.querySelectorAll('.faq__item');
let faqHeadingAll = document.querySelectorAll('.faq__heading');

faqHeadingAll.forEach(el => {
  el.addEventListener('click', () => {
    faqItems.forEach(el => { el.classList.remove('active') });

    if (el.classList.contains('active'))
      el.classList.remove('active');
    else {
      el.parentElement.classList.add('active');
      el.classList.add('active');
    }
  });
});