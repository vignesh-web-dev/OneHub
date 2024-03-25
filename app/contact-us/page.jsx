"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/button";
import Image from "next/image";
import "./contactUs.css";
import ContactUsMainSvg from "./story";
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
import Form from "./Form";
import Hubspot from "./hubspot";

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
  });

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
          <div className=" max-w-[1040px] mx-auto w-[90%] md:w-full flex gap-3 flex-col justify-center items-center">
            <p
              onMouseOver={() => dispatch(modelText(true))}
              onMouseLeave={() => dispatch(modelText(false))}
              className=" text-3xl font-poppins font-medium"
            >
              Contact Us
            </p>
            <p className=" max-w-[770px] font-lato text-center text-lg font-normal">
              Stay in touch with the magic of gifting! Subscribe to our
              newsletter for exclusive offers, new arrivals and gifting
              inspiration.
            </p>
            <p className=" max-w-[770px] font-lato text-center text-lg font-normal">
              Elevate your celebrations with curated selections that speak
              volumes. Join our community of joyous givers and make every moment
              unforgettable.
            </p>
            <div className=" mt-12">
              <ContactUsMainSvg></ContactUsMainSvg>
            </div>
          </div>
        </section>
        <section
          data-scroll-section
          data-scroll
          onMouseOver={() => dispatch(modelContrast(true))}
          onMouseLeave={() => dispatch(modelContrast(false))}
          className="w-full bg-dark-grey py-10"
        >
          <div className="flex justify-center items-center w-[90%] mx-auto max-w-[575px] min-h-[375px] rounded-[20px] py-5">
            <Hubspot
              portalId="45277840"
              formId="dd22d804-bc83-4658-a60b-a4ce699cf033"
            ></Hubspot>
          </div>
        </section>
        <Footer></Footer>
      </>
    </>
  );
};

export default Page;
