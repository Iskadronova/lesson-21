var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // Управление с клавиатуры
  keyboard: {
    enabled: true,
  },
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "ya-map",
      {
        center: [7.574318, 79.803669],
        zoom: 10,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject(
      {
        // Описание геометрии.
        geometry: {
          type: "Point",
          coordinates: [7.574318, 79.803669],
        },
      },
      {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: "islands#blackStretchyIcon",
        // Метку можно перемещать.
        draggable: true,
      }
    );

  myMap.geoObjects.add(myGeoObject).add(myPieChart);
}
