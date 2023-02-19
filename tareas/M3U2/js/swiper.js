var swiper = new Swiper(".slide-content", {
  slidesPerView: 7,  
    spaceBetween: 5,
    slidesPerGroup: 7,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

    