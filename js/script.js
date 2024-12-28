
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

//~ Запуск видеоплеера Start
let videoElements = document.querySelectorAll('video');
let buttonsVideo = document.querySelectorAll('.video-button')

buttonsVideo.forEach((buttonVideo) => {
    buttonVideo.addEventListener('click', function () {
        videoElements.forEach((videoElem) => {
            if (buttonVideo.dataset.video == videoElem.dataset.video) {
                if (videoElem.paused) {
                    videoElem.play();
                    videoPlay(buttonVideo);
                } else {
                    videoElem.pause();
                    videoPause(buttonVideo);
                }
            }
        })
    });

});
