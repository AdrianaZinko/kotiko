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

  document.querySelectorAll('.accordion__trigger').forEach(item=>{
    item.addEventListener('click',()=>{
      const parent =item.parentNode
      if(parent.classList.contains('accordion__item--active')){
        parent.classList.remove('accordion__item--active')
      }else{
        document.querySelectorAll('.accordion__item')
        .forEach(child=>child.classList.remove('accordion__item--active'))
        parent.classList.toggle('accordion__item--active')
      }
    })
  })
  function createMarker(place) {

    new google.maps.Marker({
        position: place.geometry.location,
        map: map
    });
}
var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(59.974671, 30.411188 );

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: sydney, zoom: 15});

  var request = {
    query: 'г. Санкт-Петербург ул. Ключевая, д.32',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

document.querySelector('.address__btn').addEventListener('click',()=>{
  let copyText= document.querySelector('.address__text').textContent
   
  navigator.clipboard.writeText(copyText);
 
}) 