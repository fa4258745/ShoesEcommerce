import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";

import "../css/GallerySwiper2.css";

import banner from "../images/banner/bannermain/imgi_36_145-41713-20036.jpg";
import banner2 from "../images/banner/bannermain/imgi_37_145-42708-19664.jpg";
import banner3 from "../images/banner/bannermain/imgi_38_145-81662-20149.jpg";

const GallerySwiper = () => {
  const swiperRef = useRef(null);
  const lgRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      loop: true,
      speed: 900,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      on: {
        init() {
          lightGallery(lgRef.current);
        },
      },
    });

    return () => {
      swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-lg-wrap2">
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper" ref={lgRef}>
          <a className="swiper-slide" href={banner}>
            <img src={banner} alt="shoe 1" />
          </a>
          <a className="swiper-slide" href={banner2}>
            <img src={banner2} alt="shoe 2" />
          </a>
          <a className="swiper-slide" href={banner3}>
            <img src={banner3} alt="shoe 3" />
          </a>
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default GallerySwiper;
