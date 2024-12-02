const hotelOverviewSlider = new Swiper('.hotel-overview__slider', {
    direction: 'horizontal', // Направление слайдов
    loop: true, // Зацикливание слайдов
    effect: 'cube',
    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает точки пагинации кликабельными
    },

    // Навигационные стрелки
    navigation: {
        nextEl: '.swiper__button-right', // Кнопка "вперед"
        prevEl: '.swiper__button-left', // Кнопка "назад"
    },

    // Прокрутка (если нужна)
    scrollbar: {
        el: '.swiper-scrollbar', // Полоса прокрутки
    },

    // Дополнительные параметры
    slidesPerView: 1, // Количество видимых слайдов
    spaceBetween: 20, // Расстояние между слайдами
});

const reviewSlider = new Swiper('.reviews-swipercontainer', {
    direction: 'horizontal', // Направление слайдов
    loop: true, // Зацикливание слайдов
    effect: 'slide',
    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делает точки пагинации кликабельными
    },

    // Навигационные стрелки
    navigation: {
        nextEl: '.reviews__arrow--right', // Кнопка "вперед"
        prevEl: '.reviews__arrow--left', // Кнопка "назад"
    },

    // Прокрутка (если нужна)
    scrollbar: {
        el: '.swiper-scrollbar', // Полоса прокрутки
    },

    // Дополнительные параметры
    slidesPerView: 1, // Количество видимых слайдов
    spaceBetween: 20, // Расстояние между слайдами
});


document.addEventListener('scroll', function () {
    const parallaxBg = document.querySelector('.img-newsletter');
    const scrollPosition = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Чем меньше коэффициент, тем медленнее движение
});




//Активность кнопки* без движения возвращается в scale(1)
document.querySelectorAll('.reviews__arrow').forEach(arrow => {
    let hoverTimeout;

    arrow.addEventListener('mousemove', () => {
        // Удаляем таймер, если мышь продолжает двигаться
        clearTimeout(hoverTimeout);

        // Увеличиваем масштаб
        arrow.style.transform = 'translateY(-50%) scale(1.5)';

        // Сбрасываем масштаб через 1 секунду без активности
        hoverTimeout = setTimeout(() => {
            arrow.style.transform = 'translateY(-50%) scale(1)';
        }, 1000);
    });

    // Сбрасываем масштаб, если курсор уходит с кнопки
    arrow.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout); // Убираем таймер
        arrow.style.transform = 'translateY(-50%) scale(1)';
    });
});

