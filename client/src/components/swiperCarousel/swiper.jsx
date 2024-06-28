// Import necessary modules
import React from 'react';
import "./swiper.css"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

const SwiperCarousel = () => {
  const slides = [
    { title: "Female Borrowers", value: "80,000", suffix: "+" },
    { title: "Branches", value: "100", suffix: "+" },
    { title: "Female Employees", value: "70", suffix: "% +" },
    { title: "Employees", value: "650", suffix: "+" },
    { title: "Rural-based clients", value: "80", suffix: "% +" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="elementor-element elementor-element-51cde6b e-flex e-con-boxed e-con e-parent">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-4b86a45 elementor-widget elementor-widget-counter">
                <div className="elementor-widget-container">
                  <div className="elementor-counter">
                    <div className="elementor-counter-title">{slide.title}</div>
                    <div className="elementor-counter-number-wrapper">
                      <span className="elementor-counter-number">{slide.value}</span>
                      <span className="elementor-counter-number-suffix">{slide.suffix}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-0373fb9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel ;