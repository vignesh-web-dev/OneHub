"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { isMobile, isTablet } from "react-device-detect";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  modelText,
  modelButton,
  modelContrast,
} from "../app/Redux/Cursor/cursorSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [device, setDevice] = useState(null);
  const pathname = usePathname();
  const [dotInitialPosition, setDotInitialPosition] = useState(0);
  const [innerWidth, setInnerWidth] = useState();

  const dot = useRef(null);
  const nav = useRef();
  const mobileNavSection = useRef();

  const fill = useRef(null);
  const menu = useRef(null);
  const backdrop = useRef(null);
  const menuitems = useRef(null);

  const handleClickNav = (e) => {
    let centerX = e.target.parentElement.offsetLeft;
    let width = e.target.parentElement.offsetWidth;
    dot.current.style.transform = `translateX(${centerX - 75 + width / 2}px)`;
  };
  const handleResize = (props) => {
    setInnerWidth(props.target.innerWidth);
    if (props.target.innerWidth >= 950) {
      const element = nav?.current;
      if (element != null) {
        const e =
          element.querySelectorAll(".active")[0] &&
          element.querySelectorAll(".active")[0]?.parentElement;
        const centerX = e && e.offsetLeft;
        const width = e && e.offsetWidth;
        setDotInitialPosition(centerX - 75 + width / 2);
      }
    }
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      mobileNavSection.current &&
        mobileNavSection?.current.classList.add("shadow");
    } else {
      mobileNavSection.current &&
        mobileNavSection?.current.classList.remove("shadow");
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    if (isMobile || isTablet) {
      setDevice(isMobile ? "mobile" : "tablet");
    } else {
      setDevice("desktop");
    }

    return () => {};
  }, [pathname]);
  useEffect(() => {
    if (innerWidth >= 950) {
      const element = nav.current;
      const e =
        element?.querySelectorAll(".active")[0] &&
        element?.querySelectorAll(".active")[0].parentElement;
      if (e != undefined) {
        const centerX = e.offsetLeft;
        const width = e.offsetWidth;
        setDotInitialPosition(centerX - 75 + width / 2);
      } else {
        setDotInitialPosition(-1000);
      }
    }

    return () => {};
  }, [device, pathname]);
  const styles = {
    transform: `translateX(${dotInitialPosition}px)`,
  };
  const [className, setClassName] = useState("close");

  const handleToggle = () => {
    setClassName(className === "close" ? "open" : "close");
    if (className === "close") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      menu.current.style.display = "block";
      // .style.transform = "translate(0px, 0px)";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "unset";
      setTimeout(() => {
        menu.current.style.display = "none";
      }, 550);

      // fill.current.style.transform = "scale(0,1)";
    }
    if (fill.current.classList.contains("show")) {
      fill.current.classList.remove("show");
      fill.current.classList.add("hide");
      backdrop.current.classList.remove("showback");
      backdrop.current.classList.add("hideback");
      menuitems.current.classList.remove("showmenu");
      menuitems.current.classList.add("hidemenu");
    } else {
      fill.current.classList.remove("hide");
      fill.current.classList.add("show");
      backdrop.current.classList.remove("hideback");
      backdrop.current.classList.add("showback");
      menuitems.current.classList.remove("hidemenu");
      menuitems.current.classList.add("showmenu");
    }
  };
  if (device != null) {
    return (
      <>
        {innerWidth < 950 ? (
          <section
            ref={mobileNavSection}
            className=" fixed z-50 h-[60px] flex flex-row justify-between w-full bg-white "
          >
            {/* <div> */}
            <Link href="/" className="px-2 py-2 fixed z-[500]">
              <Image
                alt="logo"
                src="/Navbar/mobile-logo.svg"
                height={3000}
                width={3000}
                className="h-10 w-auto"
              ></Image>
            </Link>
            <div
              className={` ${className} icon-toogle flex justify-center items-center mr-6 fixed right-2 top-[21px] z-[500] `}
              onClick={handleToggle}
            >
              <button className=" w-6 h-6 aspect-square button menu">
                <span></span>
                <span></span>
              </button>
            </div>
            <div ref={menu} className=" menu hidden">
              <div
                ref={backdrop}
                className="backdrop"
                style={{ opacity: 1 }}
              ></div>
              <div
                ref={fill}
                className="menu-fill"
                // style={{
                //   translate: "none",
                //   rotate: "none",
                //   scale: "none",
                //   transform: "scale(0,1)",
                // }}
              ></div>
              <div
                ref={menuitems}
                className="flex justify-center landscape:flex-row flex-col items-start text-black landscape:pt-16 portrait:pt-28 relative z-50 pl-9 pr-7 menu-items bg-white"
              >
                <div className=" relative portrait:-top-28">
                  <div className="text-[#0000004d] text-base font-lato mb-3">
                    Menu
                  </div>
                  <div className=" font-lato font-medium text-black text-xl py-1">
                    <a href="/" onClick={handleToggle}>
                      Home
                    </a>
                  </div>
                  <div className=" font-lato font-medium text-black text-xl py-1">
                    <Link href="/ourstory" onClick={handleToggle}>
                      Our Story
                    </Link>
                  </div>
                  <div className=" font-lato font-medium text-black text-xl py-1">
                    <Link href="/corporate-gifts" onClick={handleToggle}>
                      Corporate Gifts
                    </Link>
                  </div>
                  {/* <div className=" font-lato font-medium text-black text-xl py-1">
                    <Link href="/personalised-gifts" onClick={handleToggle}>
                      Personalised Gifts
                    </Link>
                  </div> */}
                  <div className=" font-lato font-medium text-black text-xl py-1">
                    <Link href="/contact-us" onClick={handleToggle}>
                      Contact Us
                    </Link>
                  </div>
                  <div className=" font-lato font-medium text-black text-xl py-1">
                    <Link href="/other-services" onClick={handleToggle}>
                      Other Services
                    </Link>
                  </div>
                </div>
                <div className=" relative portrait:-top-28 portrait:mt-3">
                  <p className="text-[#0000004d] text-base font-lato mb-3">
                    Get in touch
                  </p>
                  {/* <div className=""> */}
                  <Link
                    href="mailto:contact@onehubshoppy.com"
                    className=" underline underline-offset-[6px] font-lato font-medium text-black text-base py-1"
                    onClick={handleToggle}
                  >
                    contact@onehubshoppy.com
                  </Link>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* </div> */}
          </section>
        ) : (
          <section
            onMouseOver={() => dispatch(modelContrast(false))}
            onMouseLeave={() => dispatch(modelContrast(true))}
            className="fixed z-50 left-0 right-0 top-7 flex flex-row mx-auto max-w-6xl h-[60px] w-[95%] gap-6 justify-between"
          >
            <Link
              onMouseOver={() => dispatch(modelButton(true))}
              onMouseLeave={() => dispatch(modelButton(false))}
              href="/"
              className="h-[60px] bg-yellow rounded-full flex justify-center items-center"
            >
              <Image
                alt="logo"
                src="/logo.svg"
                height={3000}
                width={3000}
                className="h-auto w-[220px]"
              ></Image>
            </Link>
            <div
              id="navbar"
              ref={nav}
              className=" w-full relative bg-white rounded-full shadow-[2px_2px_36px_-9px_rgba(0,0,0,0.10)] flex flex-row gap-4 px-7  pb-6 pt-4 justify-around items-center"
            >
              <div ref={dot} className="active-line" style={styles}></div>
              <div
                onMouseOver={() => dispatch(modelButton(true))}
                onMouseLeave={() => dispatch(modelButton(false))}
                className="menuitemwrap"
              >
                <a
                  onClick={(e) => handleClickNav(e)}
                  href="/"
                  data-option="0"
                  className={
                    `${pathname === "/" ? "active " : ""}` +
                    " font-poppins text-base font-medium"
                  }
                >
                  Home
                </a>
              </div>
              <div
                onMouseOver={() => dispatch(modelButton(true))}
                onMouseLeave={() => dispatch(modelButton(false))}
                className=" menuitemwrap"
              >
                <Link
                  onClick={(e) => handleClickNav(e)}
                  href="/ourstory"
                  data-option="0"
                  className={
                    `${pathname === "/ourstory" ? "active " : ""}` +
                    " font-poppins text-base font-medium"
                  }
                >
                  Our Story
                </Link>
              </div>
              <div
                onMouseOver={() => dispatch(modelButton(true))}
                onMouseLeave={() => dispatch(modelButton(false))}
                className=" menuitemwrap"
              >
                <Link
                  onClick={(e) => handleClickNav(e)}
                  href="/corporate-gifts"
                  data-option="0"
                  className={
                    `${pathname === "/corporate-gifts" ? "active " : ""}` +
                    " font-poppins text-base font-medium"
                  }
                >
                  Corporate Gifts
                </Link>
              </div>
              <div
                onMouseOver={() => dispatch(modelButton(true))}
                onMouseLeave={() => dispatch(modelButton(false))}
                className=" menuitemwrap"
              >
                <Link
                  onClick={(e) => handleClickNav(e)}
                  href="/contact-us"
                  data-option="0"
                  className={
                    `${pathname === "/contact-us" ? "active " : ""}` +
                    " font-poppins text-base font-medium"
                  }
                >
                  Contact Us
                </Link>
              </div>
              <div
                onMouseOver={() => dispatch(modelButton(true))}
                onMouseLeave={() => dispatch(modelButton(false))}
                className=" menuitemwrap"
              >
                <Link
                  onClick={(e) => handleClickNav(e)}
                  href="/other-services"
                  data-option="0"
                  className={
                    `${pathname === "/other-services" ? "active " : ""}` +
                    " font-poppins text-base font-medium"
                  }
                >
                  Other Services
                </Link>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
};

export default Navbar;
