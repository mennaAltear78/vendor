import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Scroller = ({ items, Component ,hightdiv ,numberCardShown,spaceBetween=10}) => {
  const prevRef = useRef(null); // Reference for the previous button
  const nextRef = useRef(null); // Reference for the next button

  return (
    <div className="relative w-full ml-[17px] sm:ml-0 ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={4}
        navigation={{
          prevEl: prevRef.current, // Use the ref for the previous button
          nextEl: nextRef.current, // Use the ref for the next button
        }}
        onBeforeInit={(swiper) => {
          // Assign the navigation buttons to Swiper before initialization
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: numberCardShown},
          1024: { slidesPerView: numberCardShown },
          1280: { slidesPerView: numberCardShown },
        }}
        className="py-4"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`min-w-[350px] ${hightdiv} bg-gradient-to-tr shadow-md  bg-[white] text-[black] rounded-xl flex text-lg font-semibold transition-transform hover:scale-105`}>
              <Component {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      {/* <button
        ref={prevRef}
        className="swiper-button-prev absolute border-none left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent text-blue-500 p-2 rounded-full"
        aria-label="Scroll left"
      >
        ‹
      </button>
      <button
        ref={nextRef}
        className="swiper-button-next border-none absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent text-blue-500 p-2 rounded-full"
        aria-label="Scroll right"
      >
        ›
      </button> */}
    </div>
  );
};

export default Scroller;
