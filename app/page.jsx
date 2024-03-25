"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Cursor from "@/components/cursor1";
import { gifts } from "../Model/data";
import { products } from "@/Model/ProductData";
import Link from "next/link";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { isMobile, isTablet } from "react-device-detect";
import Button from "@/components/button";

import Stayintouch from "@/components/Stayintouch";
// import NormalButton from "@/components/NormalButton";

import { useDispatch, useSelector } from "react-redux";
import {
  modelText,
  modelButton,
  modelContrast,
} from "./Redux/Cursor/cursorSlice";
import { modelFilter } from "./Redux/Corporate/corporateSlice";
import Chat from "@/components/chat";
import HomeScroll from "@/components/HomeScroll";
import { useParams } from "next/navigation";

// import { Lenis } from "lenis";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const [device, setDevice] = useState(null);
  const cursor = useRef(null);
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };
  const app = useRef(null);
  const wrap = useRef(null);

  const ref = useRef(null);
  const data = products
    .filter((item) => item.isTopSelling === true)
    .slice(0, 5);

  const [isHoverText, setHoverText] = useState(false);
  const [isContrast, setContrast] = useState(false);
  const [isButtonHover, setButtonHover] = useState(false);

  const options = {
    smooth: true,
  };

  const dispatch = useDispatch();
  const params = useParams();
  const [renderComplete, setRenderComplete] = useState(false);

  useEffect(() => {
    setRenderComplete(true);
  }, [params]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window?.location.hash.substring(1);
      debugger;
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [renderComplete]);

  useEffect(() => {
    dispatch(modelFilter([]))
    if (isMobile || isTablet) {
      setDevice(isMobile ? "mobile" : "tablet");
    } else {
      setDevice("desktop");
    }
    return () => {};
  }, []);
  if (device != null) {
    return (
      <>
        <Cursor />
        <main>
          <section
            onMouseOver={() => dispatch(modelContrast(false))}
            onMouseLeave={() => dispatch(modelContrast(true))}
            className=" mx-auto w-full bg-white max-w-[2000px] pt-16 md:pt-28"
          >
            <HomeScroll></HomeScroll>
          </section>

          <section
            onMouseOver={() => dispatch(modelContrast(false))}
            onMouseLeave={() => dispatch(modelContrast(true))}
            ref={wrap}
            className=" mx-auto max-w-6xl w-[90%] my-10 flex flex-col justify-center items-center bg-white relative"
          >
            <span
              className=" absolute -z-10 opacity-0 -top-[100px] md:-top-[150px] bg-black "
              id="ourbusiness"
            ></span>
            <h1
              onMouseOver={() => dispatch(modelText(true))}
              onMouseLeave={() => dispatch(modelText(false))}
              className=" text-3xl font-poppins font-medium text-center inline-block bg-white mb-2"
            >
              Our Business
            </h1>
            <div className="mt-5 flex flex-col md:flex-row gap-12 justify-center items-center">
              <div
                ref={app}
                className=" w-full h-[400px] max-h-fit md:w-1/2 flex justify-center items-center rounded-[30px]  p-7 relative shadow-[inset_2px_2px_26px_-6px_rgba(0,0,0,0.25)]"
              >
                <Image
                  alt="dummy"
                  height={3000}
                  width={3000}
                  className="h-full w-auto"
                  src="/Home/online.png"
                ></Image>
              </div>
              <div className=" w-full md:w-1/2 h-full flex flex-col justify-start items-start gap-7">
                <p className=" text-xl font-lato font-normal">
                  Welcome to One Hub gifting, your destination for exquisitely
                  curated gifts that capture the essence of your special
                  occasions, making each moment unforgettable. &ldquo;Commitment
                  is not just a promise; it&apos;s our motto&rdquo;.
                </p>
                <Button
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  text="OUR STORY"
                  link="/ourstory"
                  backgroundColor="black"
                ></Button>
              </div>
            </div>
          </section>
          <section
            onMouseOver={() => dispatch(modelContrast(true))}
            onMouseLeave={() => dispatch(modelContrast(false))}
            className=" bg-black w-full relative"
          >
            <span
              className=" absolute -z-10 opacity-0 -top-[100px] bg-black "
              id="top-selling"
            ></span>
            <div className="mx-auto max-w-6xl flex flex-col justify-center items-center w-[90%] py-10">
              <h1
                onMouseOver={() => dispatch(modelText(true))}
                onMouseLeave={() => dispatch(modelText(false))}
                className=" text-3xl font-poppins font-medium text-center text-white mb-8  titlehover inline-block"
              >
                Our Top Selling
              </h1>
              <div className=" grid grid-cols-1 sm:grid-cols-2  md:!grid-cols-3 gap-x-6 gap-y-12">
                {data &&
                  data.map((item, index) => (
                    <Link
                      key={index}
                      href={{
                        pathname: `/product/${item?.id}`,
                        query: { id: item.id },
                      }}
                      className=" flex flex-col w-full "
                    >
                      {item.isVariable == true ? (
                        <Image
                          alt={item.name}
                          src={"/products/" + item.images[0].source[0]}
                          height={3000}
                          width={3000}
                          className=" rounded-[20px] w-full h-auto"
                        ></Image>
                      ) : (
                        <Image
                          alt={item.name}
                          src={"/products/" + item.images[0]}
                          height={3000}
                          width={3000}
                          className=" rounded-[20px] w-full h-auto"
                        ></Image>
                      )}
                      {/* </div> */}
                      <p className=" font-poppins text-xl font-medium text-white mt-5 mb-1 text-center">
                        {item.name}
                      </p>
                    </Link>
                  ))}
              </div>
              <div className="flex justify-center w-full mt-14">
                <Button
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  text="Explore Products"
                  link="/corporate-gifts"
                ></Button>
              </div>
            </div>
          </section>
          <Testimonial></Testimonial>

          <Stayintouch></Stayintouch>

          <Footer></Footer>
        </main>
      </>
    );
  }
}
