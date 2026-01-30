// import { useEffect, useRef } from "react";
// import Swiper from "swiper";
// import { Navigation } from "swiper/modules";
// import lightGallery from "lightgallery";
// import "../css/gallerySwiper.css"

// import banner from "../images/banner/bannermain/imgi_30_61v3Website_Main_Display_Banner_3842_x_1500_3842_x_1500.jpg"
// import banner2 from "../images/banner/bannermain/imgi_18_FW24_Q3_Unstoppable_Wovens_Site_3_1_M_1.jpg"
// import banner3 from "../images/banner/bannermain/imgi_298_1a597377ae0a72bbc522c722d7999e3cdf6fa316-6000x2167.jpg"
// import banner4 from "../images/banner/bannermain/imgi_42_UAV2Website_Main_Display_Banner_3842_x_1500_3842_x_1500.jpg"
// import banner5 from "../images/banner/imgi_48_image.jpg"
// import banner6 from "../images/banner/imgi_50_image.jpg"
// import banner7 from "../images/banner/nikebanner2.webp"
// import banner8 from "../images/banner/Nike-Header-min.jpg"
// const GallerySwiper = () => {
//   const swiperRef = useRef(null);
//   const lgRef = useRef(null);

//   useEffect(() => {
//     let swiperInstance;
//     let lgInstance;

//     if (swiperRef.current) {
//       swiperInstance = new Swiper(swiperRef.current, {
//         modules: [Navigation],
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         on: {
//           init() {
//             lgInstance = lightGallery(lgRef.current);

//             lgRef.current.addEventListener("lgBeforeClose", () => {
//               swiperInstance.slideTo(lgInstance.index, 0);
//             });
//           },
//         },
//       });
//     }

//     return () => {
//       swiperInstance?.destroy();
//       lgInstance?.destroy();
//     };
//   }, []);

//   return (
//     <div className="swiper-lg-wrap">
//       <div className="swiper" ref={swiperRef}>
//         <div className="swiper-wrapper" ref={lgRef}>
//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="../images/imgi_2_web-banners.jpg"
//           >
//             <img src={banner} alt="shoe 1" />
//           </a>

//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="/img/doitanyway.png"
//           >
//             <img src={banner2} alt="shoe 2" />
//           </a>
//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="/img/img2.jpg"
//           >
//             <img src={banner3} alt="shoe 2" />
//           </a>
//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="/img/img2.jpg"
//           >
//             <img src={banner4} alt="shoe 2" />
//           </a>
//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="/img/img2.jpg"
//           >
//             <img src={banner5} alt="shoe 2" />
//           </a>
//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="/img/img2.jpg"
//           >
//             <img src={banner6} alt="shoe 2" />
//           </a>
//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="/img/img2.jpg"
//           >
//             <img src={banner7} alt="shoe 2" />
//           </a>
//           <a
//             className="swiper-slide"
//             data-lg-size="1600-1200"
//             href="/img/img2.jpg"
//           >
//             <img src={banner8} alt="shoe 2" />
//           </a>


//         </div>

//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </div>
//     </div>
//   );
// };-

// export default GallerySwiper;

import { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import lightGallery from "lightgallery";

import "swiper/css";
import "swiper/css/navigation";
import "lightgallery/css/lightgallery.css";

import "../css/gallerySwiper.css";

import banner from "../images/banner/bannermain/imgi_30_61v3Website_Main_Display_Banner_3842_x_1500_3842_x_1500.jpg";
import banner2 from "../images/banner/bannermain/imgi_18_FW24_Q3_Unstoppable_Wovens_Site_3_1_M_1.jpg";
import banner3 from "../images/banner/bannermain/imgi_298_1a597377ae0a72bbc522c722d7999e3cdf6fa316-6000x2167.jpg";
import banner4 from "../images/banner/bannermain/imgi_42_UAV2Website_Main_Display_Banner_3842_x_1500_3842_x_1500.jpg";
import banner5 from "../images/banner/imgi_48_image.jpg";
import banner6 from "../images/banner/imgi_50_image.jpg";
import banner7 from "../images/banner/nikebanner2.webp";
import banner8 from "../images/banner/Nike-Header-min.jpg";

const GallerySwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const lgInstance = lightGallery(swiperRef.current, {
      selector: ".swiper-slide",
    });

    return () => {
      swiperInstance.destroy();
      lgInstance.destroy();
    };
  }, []);

  return (
    <div className="swiper-lg-wrap">
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {[banner, banner2, banner3, banner4, banner5, banner6, banner7, banner8].map(
            (img, index) => (
              <a
                key={index}
                className="swiper-slide"
                href={img}
              >
                <img src={img} alt={`banner-${index}`} />
              </a>
            )
          )}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default GallerySwiper;
