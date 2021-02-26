/* eslint-disable */
/* global Swiper */

import Swiper from 'swiper/swiper-bundle.esm';

let mySwiper;

/* activate swiper slider only for mobile  */
const breakpoint = window.matchMedia('(min-width:992px)');
function breakpointChecker() {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined && mySwiper.initialized) {
      mySwiper.destroy(true, true);
    }
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
  return true;
}

function enableSwiper() {
  const features = document.querySelector('.features .swiper-container');

  // if (features !== null || features !== undefined) {
  //   mySwiper = new Swiper(features, {
  //     slidesPerView: 1.5,
  //     spaceBetween: 9,
  //   });
  // }
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();
