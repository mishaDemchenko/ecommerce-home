const swiper = new Swiper('.swiper', {
  
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides:true,
    initialSlide: 2,


    autoplay: {
        delay: 3500,
        disableOnInteraction:false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2
        },
        // desktop >= 991
        991: {
            slidesPerView: 3
        },
        1241: {
            slidesPerView: 4,
        }
    }
    });
        
// ------------------------------------------------
const burger = document.querySelector('.burger');
const link = document.querySelector('.links');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    link.classList.toggle('open');
    body.classList.toggle('lock');
});