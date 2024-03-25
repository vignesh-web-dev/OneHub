"use client";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import { gsap } from "gsap";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";

const Cursor = (props) => {
  const ref = useRef(null);
  const { isHoveringText } = props;
  const { isContrast } = props;
  const { isButtonHover } = props;

  const [show, setCursor] = useState(true);

  const textHover = useSelector((state) => state.cursor.isTextHover);
  const contrast = useSelector((state) => state.cursor.isContrast);
  const buttonHover = useSelector((state) => state.cursor.isButtonHover);

  useEffect(() => {
    if (!isDesktop) {
      setCursor(false);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    if (textHover) {
      gsap.to(ref.current, { scale: 8, backgroundColor: "yellow" });
    } else {
      gsap.to(ref.current, { scale: 1, backgroundColor: "" });
    }
  }, [textHover]);
  useEffect(() => {
    if (buttonHover) {
      gsap.to(ref.current, { scale: 0.3 });
    } else {
      gsap.to(ref.current, { scale: 1 });
    }
  }, [buttonHover]);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;

    gsap.to(ref.current, {
      x: clientX - 6,
      y: clientY - 5,
      onComplete: () => {
        if (ref.current != null) {
          ref.current.style.opacity = 1;
        }
      },
    });
  };
  return (
    <div
      id="cursorref"
      className={`cursor md:block hidden ${
        textHover == true ? "hoverText" : ""
      } ${contrast ? "contrast" : ""}`}
      style={{ display: show ? "" : "none" }}
      ref={ref}
    ></div>
  );
};

export default Cursor;
