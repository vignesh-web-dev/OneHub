"use client";
import React, { useState, useEffect } from "react";
import "./button.css";
import Link from "next/link";
import FramerMagnetic from "@/components/framer";
import { isMobile, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import {
  modelText,
  modelButton,
  modelContrast,
} from "@/app/Redux/Cursor/cursorSlice";

const Button = ({ text, link, backgroundColor, onMouseOver, onMouseLeave }) => {
  const [device, setDevice] = useState(null);
  useEffect(() => {
    if (isMobile || isTablet) {
      setDevice(isMobile ? "mobile" : "tablet");
    } else {
      setDevice("desktop");
    }
    return () => {};
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      {link ? (
        <>
          <FramerMagnetic>
            <Link
              onMouseOver={() => dispatch(modelButton(true))}
              onMouseLeave={() => dispatch(modelButton(false))}
              href={link}
              className=" hidden md:block bg-yellow cursor-pointer text-black px-5 py-2 rounded-full text-lg font-poppins font-semibold uppercase buttonContainer w-fit"
            >
              <div className="buttonInnerContainer">
                <div className="hide-element">{text}</div>
                <div
                  style={{ color: backgroundColor ? "#fff" : "#000" }}
                  className="hide-element"
                >
                  {text}
                </div>
              </div>
              <span className="innerContainer">
                <span
                  style={{
                    background: backgroundColor ? "#000" : "fff",
                  }}
                ></span>
              </span>
            </Link>
          </FramerMagnetic>
          <Link
            href={link}
            className="block md:hidden bg-yellow fre cursor-pointer text-black px-5 py-2 rounded-full text-lg font-poppins font-semibold uppercase w-fit"
          >
            {text}
          </Link>
        </>
      ) : (
        <>
          <FramerMagnetic>
            <div
              onMouseOver={() => dispatch(modelButton(true))}
              onMouseLeave={() => dispatch(modelButton(false))}
              className=" hidden md:block bg-yellow cursor-pointer text-black px-5 py-2 rounded-full text-lg font-poppins font-semibold uppercase buttonContainer min-w-fit w-fit"
            >
              <div className="buttonInnerContainer pointer-events-none">
                <div className="hide-element">{text}</div>
                <div className="hide-element">{text}</div>
              </div>
              <span className="innerContainer">
                <span></span>
              </span>
            </div>
          </FramerMagnetic>
          <div className="block md:hidden bg-yellow cursor-pointer text-black px-5 py-2 rounded-full text-lg font-poppins font-semibold uppercase buttonContainer min-w-fit w-fit">
            {text}
          </div>
        </>
      )}
    </>
  );
};

export default Button;
