"use client";
import React, { useEffect, useRef, useState } from "react";
import OurstoryMainSvg from "./story";
import "./style.css";
import Button from "@/components/button";
import Stayintouch from "@/components/Stayintouch";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Cursor from "@/components/cursor1";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";
import { modelFilter } from "../Redux/Corporate/corporateSlice";

const Page = () => {
  const scroll = useLocomotiveScroll();
  scroll.multiplier = 0.3;
  const ref = useRef(null);

  const dispatch = useDispatch();

  const options = {
    smooth: true,
  };
  useEffect(() => {
    dispatch(modelFilter([]));
  }, []);

  return (
    <>
      <Cursor />
      <>
        <section
          className="pt-28"
          onMouseOver={() => dispatch(modelContrast(false))}
          onMouseLeave={() => dispatch(modelContrast(true))}
          data-scroll-section
          data-scroll
        >
          <div className=" max-w-6xl mx-auto w-[90%] md:w-full flex gap-3 flex-col justify-center items-center">
            <p
              onMouseOver={() => dispatch(modelText(true))}
              onMouseLeave={() => dispatch(modelText(false))}
              className=" text-3xl font-poppins font-medium"
            >
              Our Story
            </p>
            <p className=" max-w-[770px] text-center text-lg font-normal font-lato">
              Our journey began with a simple desire– to find the perfect
              personalized gifts that ticked all the boxes for various
              occasions. While we stumbled upon a few gems, a challenge
              lingered: how to seamlessly blend customization, quality,
              packaging and affordability into one delightful package.
            </p>
            <p className=" max-w-[770px] text-center text-lg font-normal font-lato">
              Channeled by the belief that gifting should be an art, we embarked
              on a mission. With insights from extensive market research, we
              identified the gaps and committed ourselves to filling them with a
              diverse range of unique, high-end products.
            </p>
            <p className=" max-w-[770px] text-center text-lg font-normal font-lato">
              Fast forward to 2022- One Hub was born with the hope to reshape
              the gifting landscape with thoughtfully curated gifts and here we
              are, weaving our tale in the vibrant city of Chennai.
            </p>
            <p className=" max-w-[770px] text-center text-lg font-normal font-lato">
              Our motto, &ldquo;Keep up the commitment; every customer is our
              prime customer,&rdquo; became our guiding star. We don&apos;t just
              offer products; we craft experiences. From custom-branded
              packaging to competitive pricing, worldwide shipping and
              best-in-class customer service, we&apos;re on a mission to
              redefine gifting with a touch of elegance and thoughtfulness.
            </p>
            <div className="w-full flex justify-center items-center mt-5 md:mt-10">
              <OurstoryMainSvg></OurstoryMainSvg>
            </div>
          </div>
        </section>
        <Stayintouch></Stayintouch>
        <Footer></Footer>
      </>
    </>
  );
};

export default Page;
