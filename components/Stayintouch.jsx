"use client";
import React from "react";
import Button from "./button";

import { useDispatch, useSelector } from "react-redux";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";

const Stayintouch = () => {
  const dispatch = useDispatch();
  return (
    <section
      onMouseOver={() => dispatch(modelContrast(true))}
      onMouseLeave={() => dispatch(modelContrast(false))}
      data-scroll-section
      className="w-full bg-dark-grey py-10"
    >
      <div className=" w-[90%] mx-auto flex flex-col justify-center items-center">
        <p
          onMouseOver={() => dispatch(modelText(true))}
          onMouseLeave={() => dispatch(modelText(false))}
          className=" text-3xl font-poppins font-medium text-center text-white titlehover inline-block"
        >
          Stay in Touch
        </p>
        <p className=" text-lg font-lato font-normal text-center max-w-[500px] mx-auto text-white mt-3 mb-8">
          Join us on this journey of creating moments that resonate with both
          individuals and corporates, where every gift tells a story of genuine
          care and joy.
        </p>
        <div className="flex justify-center">
          <Button
            onMouseOver={() => dispatch(modelButton(true))}
            onMouseLeave={() => dispatch(modelButton(false))}
            className="mx-auto"
            text="contact us now"
            link="/contact-us"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default Stayintouch;
