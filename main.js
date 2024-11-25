const hotelOverviewSlider = new Swiper('.hotel-overview__slider', {
    direction: 'horizontal', // Направление слайдов
    loop: true, // Зацикливание слайдов
    effect: 'coverflow',
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
