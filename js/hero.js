const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 1000,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-arrow-right',
      prevEl: '.swiper-arrow-left',
    },
});