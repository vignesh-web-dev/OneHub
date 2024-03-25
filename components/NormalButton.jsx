"use client";
import React from "react";
import "./button.css";
import Link from "next/link";

const NormalButton = ({ text, link, backgroundColor }) => {
  const handleMouseOverSize = () => {
    let elem = document.getElementById("cursor");
    elem &&elem.classList.add("size");
  };
  const handleMouseLeaveSize = () => {
    let elem = document.getElementById("cursor");
    elem &&elem.classList.remove("size");
  };
  return (
    <>
      {link ? (
        <Link
          onMouseOver={handleMouseOverSize}
          onMouseLeave={handleMouseLeaveSize}
          href={link}
          className=" bg-yellow cursor-pointer text-black px-5 py-2 rounded-full text-lg font-poppins font-semibold uppercase buttonContainer w-fit block"
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
      ) : (
        <div
          onMouseOver={handleMouseOverSize}
          onMouseLeave={handleMouseLeaveSize}
          className=" bg-yellow cursor-pointer text-black px-5 py-2 rounded-full text-lg font-poppins font-semibold uppercase buttonContainer w-fit block"
        >
          <div className="buttonInnerContainer pointer-events-none">
            <div className="hide-element">{text}</div>
            <div className="hide-element">{text}</div>
          </div>
          <span className="innerContainer">
            <span></span>
          </span>
        </div>
      )}
    </>
  );
};

export default NormalButton;
