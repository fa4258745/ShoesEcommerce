import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import lightGallery from "lightgallery";
import "../css/gallerySwiper.css"
import banner from "../images/banner/bannermain/imgi_300_c03f5db8b2b0b4497db814e00a453abd84ab95e1-6000x2167.jpg"
import banner2 from "../images/banner/bannermain/imgi_18_FW24_Q3_Unstoppable_Wovens_Site_3_1_M_1.jpg"
import banner3 from "../images/banner/bannermain/imgi_298_1a597377ae0a72bbc522c722d7999e3cdf6fa316-6000x2167.jpg"
const GallerySwiper = () => {
  const swiperRef = useRef(null);
  const lgRef = useRef(null);

  useEffect(() => {
    let swiperInstance;
    let lgInstance;

    if (swiperRef.current) {
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Navigation],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          init() {
            lgInstance = lightGallery(lgRef.current);

            lgRef.current.addEventListener("lgBeforeClose", () => {
              swiperInstance.slideTo(lgInstance.index, 0);
            });
          },
        },
      });
    }

    return () => {
      swiperInstance?.destroy();
      lgInstance?.destroy();
    };
  }, []);

  return (
    <div className="swiper-lg-wrap">
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper" ref={lgRef}>
          <a
            className="swiper-slide"
            data-lg-size="1600-1200"
            href="../images/imgi_2_web-banners.jpg"
          >
            <img src={banner} alt="shoe 1" />
          </a>

          <a
            className="swiper-slide"
            data-lg-size="1600-1200"
            href="/img/doitanyway.png"
          >
            <img src={banner2} alt="shoe 2" />
          </a>
          <a
            className="swiper-slide"
            data-lg-size="1600-1200"
            href="/img/img2.jpg"
          >
            <img src={banner3} alt="shoe 2" />
          </a>
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default GallerySwiper;
