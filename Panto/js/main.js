const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// клик по подсказке
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint )
}

function showHint (e) {
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none');

}
// закрыть подсказку при клике вне элемента
document.addEventListener('click', closeHints);

function closeHints () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}
// хуйпойми
for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation() );
}
// swiper-slider
const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode:true,

    slidesPerView: 1,
    spaceBetween: 42,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
});


//  tabs

const tabBtns = document.querySelectorAll('[data-tab]');
const tabProducts = document.querySelectorAll('[data-tab-value]')
console.log(tabBtns);


for (let btn of tabBtns) {

    btn.addEventListener ('click', function () {

        // remove active on all
        for (let btn of tabBtns) {
            btn.classList.remove('tab-controls__btn--active')
        }

        // add active on selected
        this.classList.add('tab-controls__btn--active')

        // recieve category value
        this.dataset.tab

        // отобразить и скрыть лишнее
        for (let product of tabProducts) {

            // проверка отображения всех слайдов

            if (this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                if(product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
    
                } else {
                    product.classList.add('none');
                }
            }

        }
        // swiper-update
        swiper.update();


    })
}

// mobile nav

const MobWrap = document.querySelector('.mobile__wrapper');
const navOpen = document.querySelector('#open-mobile-btn');
const navClose = document.querySelector('#mobile__close');

navOpen.onclick = function(){
    MobWrap.classList.add('mobile__wrapper--open')
}
navClose.onclick = function(){
    MobWrap.classList.remove('mobile__wrapper--open')
}