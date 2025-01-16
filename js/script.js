
$(document).ready(function () {
    $('.slider-container').slick({
        arrows: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        touchThreshold: 10,
        centerMode: true,
        focusOnSelect: true,
        dots: true,
    });
});


// модалка с видео начало
let modalVideo = document.querySelector('.modal-video');
let videoClose = document.querySelector('.video-close');
let videoElement = document.querySelector('.modal-video video');
let videoSource = document.querySelector('.modal-video video source');
let videoBtn = document.querySelector('.button-video-container');

videoBtn.addEventListener('click', () => {
    videoSource.src = `./media/video-mini.mp4`;
    videoElement.load();
    modalVideo.classList.add('modal-video-active');
    modalVideo.classList.remove('modal-video-disactive');
    videoElement.play();

});

videoClose.addEventListener('click', () => {
    modalVideo.classList.add('modal-video-disactive');
    modalVideo.classList.remove('modal-video-active');
    videoElement.pause();
    videoElement.currentTime = 0;
});
// модалка с видео конец

// Аккордион Start
let accordeons = document.querySelectorAll('.accordion-item');
accordeons.forEach(function (accord) {
    accord.addEventListener('click', function (elem) {
        let action = elem.target;
        let currentAccordElem = action.closest('.accordion-item');//определяем текущий бокс
        let currentContent = action.nextElementSibling; // находим скрытый контент
        currentAccordElem.classList.toggle("active"); //присваиваем основному контейнеру флаг активности   
        if (currentAccordElem.classList.contains("active")) {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px";
            //Обратить внимание чтоб стили были присвоены классу .accordion-collapse
        }
        else {
            currentContent.style.maxHeight = 0;
        }
    });
});
// Аккордион End

let menu = document.querySelector('.menu-mobile');
let menuList = document.querySelector('.menu-mobile-list');

menu.addEventListener('click', function () {
    menuList.classList.toggle('mobile-active');

});
