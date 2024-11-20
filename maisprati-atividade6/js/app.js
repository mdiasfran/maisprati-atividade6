document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,

        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });
});

const btnLogin = document.querySelector("#loginBtn");
const modal = document.querySelector(".modal-container");
const btnModalClose = document.querySelector(".btn-modal-close");

btnLogin.onclick = function () {
    modal.classList.add('show-modal')
}

btnModalClose.onclick = function () {
    modal.classList.remove('show-modal')
}
