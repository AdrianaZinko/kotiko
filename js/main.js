var swiper = new Swiper(".my-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { 
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".my-swiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: { 
        320: {
            slidesPerView: "auto",
            spaceBetween: 10
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }, 
      }
  });