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
  slidesPerView: 1.12,
  spaceBetween: 0,
  grabCursor: true,
  pagination: {
    el: '.reviews__dots',
    type: 'bullets',
    clickable: true,
    bulletClass: 'reviews__dot',
    bulletActiveClass: 'reviews__dot--active'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});

// slider в team

let teamSlider = new Swiper('.team__slider-container', {

  loop: false,
  slidesPerView: 1.20,
  spaceBetween: 40,
  grabCursor: true,
  breakpoints: {
    576: {
      slidesPerView: 1.2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 1.25,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 1.2,
      spaceBetween: 40
    }
  },

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

// карта на весь экран

let map = document.querySelector('.info__map');

let mapBG = document.querySelector('.info__bg');
let mapCloser = document.querySelector('.info__closer');

let mapClose = (event) => {
  event.stopPropagation();
  map.classList.remove('active');
  body.classList.remove('lock');
};

map.addEventListener('click', () => {
  map.classList.add('active');
  body.classList.add('lock');
});

mapBG.addEventListener('click', mapClose);
mapCloser.addEventListener('click', mapClose);

// burger menu

let burger = document.querySelector('.header__burger');
let burgerNav = document.querySelector('.burger__nav');
let burgerBG = document.querySelector('.burger__bg');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  burgerNav.classList.toggle('active');
  burgerBG.classList.toggle('active');
  body.classList.toggle('lock');
});

burgerBG.addEventListener('click', () => {
  burger.classList.remove('active');
  burgerNav.classList.remove('active');
  burgerBG.classList.remove('active');
  body.classList.remove('lock');
});


// валидация форм

const firstForm = document.querySelector('.first__form');
const firstPhone = document.querySelector('.first__phone');
const firstError = document.querySelector('.first__error');
const secondForm = document.querySelector('.second__form');
const secondPhone = document.querySelector('.second__phone');
const secondError = document.querySelector('.second__error');
const thirdForm = document.querySelector('.third__form');
const thirdPhone = document.querySelector('.third__phone');
const thirdError = document.querySelector('.third__error');
const confirmSend = document.querySelector('.application__popup');
const confirmBackground = document.querySelector('.application__bg');
const popupOk = document.querySelector('.popup__btn');
const popupCloser = document.querySelector('.popup__closer');
const allPhoneInput = document.querySelectorAll('.input__phone');
const introPopup = document.querySelector('.intro__popup');

const showFirstError = () => {
  firstError.classList.add('error');
  firstPhone.classList.add('error');

  if(firstPhone.validity.valueMissing) {
    firstError.textContent = 'Поле обязательно для заполнения';
  } else if(firstPhone.validity.tooShort) {
    firstError.textContent = `Минимальное количество символов ${ firstPhone.minLength }. Вы ввели ${ firstPhone.value.length }.`;
  } else if(firstPhone.validity.tooLong) {
    firstError.textContent = `Максимальное количество символов ${ firstPhone.maxLength }. Вы ввели ${ firstPhone.value.length }.`;
  }
}

const showSecondError = () => {
  secondError.classList.add('error');
  secondPhone.classList.add('error');

  if(secondPhone.validity.valueMissing) {
    secondError.textContent = 'Поле обязательно для заполнения';
  } else if(secondPhone.validity.tooShort) {
    secondError.textContent = `Минимальное количество символов ${ secondPhone.minLength }. Вы ввели ${ secondPhone.value.length }.`;
  } else if(secondPhone.validity.tooLong) {
    secondError.textContent = `Максимальное количество символов ${ secondPhone.maxLength }. Вы ввели ${ secondPhone.value.length }.`;
  }
}

const showThirdError = () => {
  thirdError.classList.add('error');
  thirdPhone.classList.add('error');

  if(thirdPhone.validity.valueMissing) {
    thirdError.textContent = 'Поле обязательно для заполнения';
  } else if(thirdPhone.validity.tooShort) {
    thirdError.textContent = `Минимальное количество символов ${ thirdPhone.minLength }. Вы ввели ${ thirdPhone.value.length }.`;
  } else if(thirdPhone.validity.tooLong) {
    thirdError.textContent = `Максимальное количество символов ${ thirdPhone.maxLength }. Вы ввели ${ thirdPhone.value.length }.`;
  }
}

const showPopup = () => {
  confirmSend.classList.add('active');
  confirmBackground.classList.add('active');
  body.classList.add('lock');
  // !!! Очищение формы. Удалить после добавления ajax-отправки.
  allPhoneInput.forEach(el => el.value = '');
  // !!! Очищение формы. Удалить после добавления ajax-отправки.
};

const hidePopup = () => {
  confirmSend.classList.remove('active');
  confirmBackground.classList.remove('active');
  body.classList.remove('lock');
  introPopup.classList.remove('active');
};

firstForm.addEventListener('submit', function (event) {
  if(!firstPhone.validity.valid) {
    showFirstError();
    event.preventDefault();
  } else {
    showPopup();
  }
});

firstPhone.addEventListener('focus', function (event) {
  firstError.classList.remove('error');
  firstPhone.classList.remove('error');
});

secondForm.addEventListener('submit', function (event) {
  if(!secondPhone.validity.valid) {
    showSecondError();
    event.preventDefault();
  } else {
    showPopup();
  }
});

secondPhone.addEventListener('focus', function (event) {
  secondError.classList.remove('error');
  secondPhone.classList.remove('error');
});

thirdForm.addEventListener('submit', function (event) {
  if(!thirdPhone.validity.valid) {
    showThirdError();
    event.preventDefault();
  } else {
    hideOrder();
    showPopup();
  }
});

thirdPhone.addEventListener('focus', function (event) {
  thirdError.classList.remove('error');
  thirdPhone.classList.remove('error');
});

confirmBackground.addEventListener('click', hidePopup);
popupOk.addEventListener('click', hidePopup);
popupCloser.addEventListener('click', hidePopup);

// появление всплывающего окна при нажатии на кнопку "заказать"

const introOrder = document.querySelector('.intro__order');
const introCloser = document.querySelector('.intro__closer');
const tariffsOrders = document.querySelectorAll('.tariffs__btn');

const showOrder = () => {
  introPopup.classList.add('active');
  confirmBackground.classList.add('active');
  body.classList.add('lock');
};

const hideOrder = () => {
  introPopup.classList.remove('active');
  confirmBackground.classList.remove('active');
  body.classList.remove('lock');
};

introOrder.addEventListener('click', showOrder);
tariffsOrders.forEach(el => el.addEventListener('click', showOrder));
introCloser.addEventListener('click', hideOrder);