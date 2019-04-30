(function init() {
  let carouselContainerElem = document.getElementsByClassName('carousel')[0];
  let dotsContainerElem = carouselContainerElem.getElementsByClassName('carousel-dots')[0];
  carousel(
    carouselContainerElem.getElementsByClassName('carousel__item'),
    dotsContainerElem,
    dotsContainerElem.getElementsByClassName('carousel-dots__dot'),
    function(target) {
      return target.matches('.carousel-dots__dot');
    },
    carouselContainerElem.getElementsByClassName('carousel__navigation--prev')[0],
    carouselContainerElem.getElementsByClassName('carousel__navigation--next')[0]
  ).init();
})();
