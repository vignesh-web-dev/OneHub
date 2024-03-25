"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import { isMobile, isTablet } from "react-device-detect";

import { useDispatch, useSelector } from "react-redux";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";
import "./testimonial.css";

const Testimonial = () => {
  const [device, setDevice] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if (window.innerWidth < 900) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
    return () => {};
  }, []);
  return (
    <section
      onMouseOver={() => dispatch(modelContrast(false))}
      onMouseLeave={() => dispatch(modelContrast(true))}
      data-scroll-section
      className="w-full bg-yellow py-10 overflow-hidden flex flex-col justify-center items-center"
      // onMouseMove={changePosition}
    >
      <p
        onMouseOver={() => dispatch(modelText(true))}
        onMouseLeave={() => dispatch(modelText(false))}
        className=" text-3xl font-medium font-poppins text-center mb-10 cursor-default titlehover inline-block"
      >
        Our Testimonials
      </p>

      <div className=" w-[90%] mx-auto">
        {device === "desktop" ? (
          <Swiper
            autoHeight={true}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={40}
            modules={[Navigation]}
            className="!overflow-visible testimonial"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 h-fit relative  justify-center md:justify-stretch md:items-stretch items-center">
                <div className="w-[90%] md:w-[100%] mx-auto bg-white rounded-lg px-10 pt-12 pb-8 flex flex-col justify-center">
                  <p className=" text-lg font-lato font-normal">
                    Great selection for corporate gifting! The online portal
                    offers a wide variety of thoughtful gifts, perfect for
                    business partners and clients. Easy navigation and excellent
                    customer service. Personalization was as expected & quality
                    of products are top notch
                  </p>
                  <div>
                    <p className=" font-poppins font-semibold text-2xl  mt-5">
                      Ezhilarasu
                    </p>
                    <p className=" font-poppins font-medium text-base">
                      Head of Engineering
                      <br />
                      Mongrov IT Solutions
                    </p>
                  </div>
                  <Image
                    src="/quatation.svg"
                    alt="quatation"
                    width={3000}
                    height={3000}
                    className=" absolute w-[90px] h-auto -top-10 -left-3 z-10 "
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 h-fit relative justify-center md:justify-stretch md:items-stretch items-center">
                <div className="w-[90%] md:w-[100%] mx-auto bg-white rounded-lg px-10 pt-12 pb-8  flex flex-col justify-center">
                  <p className=" text-lg font-lato font-normal">
                    I am absolutely thrilled with the exceptional service
                    provided by One Hub. From start to finish, they exceeded my
                    expectations in every aspect – from the cost-effectiveness
                    to the top-notch quality of their work. Their commitment to
                    on-time delivery was remarkable, and their professionalism
                    throughout the process was truly commendable. I highly
                    recommend One Hub to anyone seeking excellence in their
                    services.
                  </p>
                  <div>
                    <p className=" font-poppins font-semibold text-2xl  mt-5">
                      Suseendran
                    </p>
                    <p className=" font-poppins font-medium text-base">
                      CRO - India
                      <br />
                      International Water Association
                    </p>
                  </div>
                  <Image
                    alt="dummy"
                    src="/quatation.svg"
                    width={3000}
                    height={3000}
                    className=" absolute w-[90px] h-auto -top-10 -left-3 z-10 "
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 h-fit relative justify-center md:justify-stretch md:items-stretch items-center">
                <div className="w-[90%] md:w-[100%] mx-auto bg-white rounded-lg px-10 pt-12 pb-8  flex flex-col justify-center">
                  <p className=" text-lg font-lato font-normal">
                    I have purached a wifi speaker mini , the price and the
                    customer service is very good and for sure we can recommend
                    this to our friends and family
                  </p>
                  <div>
                    <p className=" font-poppins font-semibold text-2xl  mt-5">
                      Kiran
                    </p>
                    <p className=" font-poppins font-medium text-base">CTS</p>
                  </div>
                  <Image
                    alt="dummy"
                    src="/quatation.svg"
                    width={3000}
                    height={3000}
                    className=" absolute w-[90px] h-auto -top-10 -left-3 z-10 "
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={40}
            grabCursor={true}
            loop={true}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            className="testimonial !overflow-visible"
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 h-full relative  justify-center md:justify-stretch md:items-stretch items-center">
                <div className="w-full mx-auto bg-white rounded-lg px-10 pt-12 pb-8 flex-1">
                  <p className=" text-lg font-lato font-normal">
                    Great selection for corporate gifting! The online portal
                    offers a wide variety of thoughtful gifts, perfect for
                    business partners and clients. Easy navigation and excellent
                    customer service. Personalization was as expected & quality
                    of products are top notch
                  </p>
                  <div className=" flex flex-row justify-start items-center gap-4 mt-7">
                    <div>
                      <p className=" font-poppins font-semibold text-[22px]">
                        Ezhilarasu
                      </p>
                      <p className=" font-poppins font-medium text-base">
                        Head of Engineering
                        <br />
                        Mongrov IT Solutions
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/quatation.svg"
                    alt="quatation"
                    width={3000}
                    height={3000}
                    className=" absolute w-[90px] h-auto -top-10 -left-3 z-10 "
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 h-full relative  justify-center md:justify-stretch md:items-stretch items-center">
                <div className="w-full mx-auto bg-white rounded-lg px-10 pt-12 pb-8 flex-1">
                  <p className=" text-lg font-lato font-normal">
                    I am absolutely thrilled with the exceptional service
                    provided by One Hub. From start to finish, they exceeded my
                    expectations in every aspect – from the cost-effectiveness
                    to the top-notch quality of their work. Their commitment to
                    on-time delivery was remarkable, and their professionalism
                    throughout the process was truly commendable. I highly
                    recommend One Hub to anyone seeking excellence in their
                    services.
                  </p>
                  <div className=" flex flex-row justify-start items-center gap-4 mt-7">
                    <div>
                      <p className=" font-poppins font-semibold text-[22px]">
                        Suseendran
                      </p>
                      <p className=" font-poppins font-medium text-base">
                        CRO - India <br />
                        International Water Association
                      </p>
                    </div>
                  </div>
                  <Image
                    src="/quatation.svg"
                    alt="quatation"
                    width={3000}
                    height={3000}
                    className=" absolute w-[90px] h-auto -top-10 -left-3 z-10 "
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col md:flex-row gap-2 h-full relative  justify-center md:justify-stretch md:items-stretch items-center">
                <div className="w-full mx-auto bg-white rounded-lg px-10 pt-12 pb-8 flex-1">
                  <p className=" text-lg font-lato font-normal">
                    I have purached a wifi speaker mini , the price and the
                    customer service is very good and for sure we can recommend
                    this to our friends and family
                  </p>
                  <div className=" flex flex-row justify-start items-center gap-4 mt-7">
                    <div>
                      <p className=" font-poppins font-semibold text-[22px]">
                        Kiran
                      </p>
                      <p className=" font-poppins font-medium text-base">CTS</p>
                    </div>
                  </div>
                  <Image
                    src="/quatation.svg"
                    alt="quatation"
                    width={3000}
                    height={3000}
                    className=" absolute w-[90px] h-auto -top-10 -left-3 z-10 "
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
