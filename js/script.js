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
