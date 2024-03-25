"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Button from "@/components/button";
import "./otherServices.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
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

gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const scroll = useLocomotiveScroll();
  scroll.multiplier = 0.1;
  const comp = useRef(null);
  const galleryRef = useRef(null);
  const parentRef = useRef();
  const childRefs = useRef([]);

  const refi = useRef(null);
  const options = {
    smooth: true,
  };

  const dispatch = useDispatch();

  const [isScrolling, setIsScrolling] = useState();

  const [isAtTop, setIsAtTop] = useState(
    Array(childRefs.current.length).fill(false)
  );


  useEffect(() => {
    dispatch(modelFilter([]))
    let scrollTimer;
    const handleScroll = (e) => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 200);

      const parentRect =
        parentRef.current && parentRef.current.getBoundingClientRect();
      const newIsAtTop = childRefs.current.map((childRef) => {
        if (parentRect != null) {
          const childRect = childRef.getBoundingClientRect();
          const top = childRect.top <= parentRect.top + 10;
          return top;
        }
      });
      setIsAtTop(newIsAtTop);
    };

    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
      clearTimeout(scrollTimer);
    };
  }, []);

  const addChildRef = (ref) => {
    if (ref && !childRefs.current.includes(ref)) {
      childRefs.current.push(ref);
      setIsAtTop(Array(childRefs.current.length).fill(false)); // Initialize isAtTop array
    }
  };

  useLayoutEffect(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    let mm = gsap.matchMedia(comp);
    mm.add("(min-width: 600px)", () => {

      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        delay: 1,
        scrub: true,
        markers: false,
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector(".wrap");

        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0, duration: 5 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "50% 100%",
          end: "top 0%",
          animation: animation,
          scrub: true,
          markers: false,
          delay: 0.5,
        });
      });

      return () => {
        
      };
    });

    return () => {
      mm.revert();
    };
  }, []);
  const whatsappClick = (e) => {
    var phoneNumber = "+919043616788"; // Replace with your WhatsApp number
    var customMessage = encodeURIComponent(
      `Hi 👋 One Hub, I am interested in ${e} and would like to know more.`
    );

    // Create the WhatsApp API link
    var whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + customMessage;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };
  const handlemouseover = () => {
    setHoverText(true);
  };
  const handlemouseleave = () => {
    setHoverText(false);
  };

  const handleMouseOverContrast = () => {
    setContrast(true);
  };
  const handleMouseLeaveContrast = () => {
    setContrast(false);
  };
  const buttonHover = () => {
    setButtonHover(true);
  };
  const buttonHoverLeave = () => {
    setButtonHover(false);
  };
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
          ref={comp}
        >
          <div className="max-w-6xl mx-auto w-[95%] flex flex-col justify-center items-center pb-20">
            <p
              onMouseOver={() => dispatch(modelText(true))}
              onMouseLeave={() => dispatch(modelText(false))}
              className=" text-3xl font-poppins font-medium text-center"
            >
              Other Services
            </p>
            <p className=" text-lg font-normal font-lato max-w-[770px] mt-3 text-center">
              Dive into a world beyond gifts. Our services also include curated
              stationery, captivating artifacts and supplies, bespoke branding
              solutions, professional photoshoots and transformative interior
              fitouts. Elevate every aspect of your life with our diverse
              offerings. Explore more, create more and celebrate more with our
              comprehensive suite of services.
            </p>

            <div className="block sm:hidden mobi">
              <div className=" grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/photoshoots.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p className=" text-xl font-poppins font-medium">
                        Photo Shoot
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Photo Shoot")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-6 h-auto aspect-square  cursor-pointer"
                      />
                    </div>

                    <p className=" text-sm font-lato font-normal">
                      Capture moments that last a lifetime with our professional
                      photoshoot services, turning ordinary occasions into
                      extraordinary memories.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/stationaries.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3 flex-wrap">
                      <p className=" text-xl font-poppins font-medium">
                        Stationaries
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Stationaries")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-6 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className=" text-sm font-lato font-normal">
                      Add a touch of sophistication to your daily routine with
                      our carefully curated stationery collection, merging
                      functionality and style seamlessly.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/artifacts.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p className=" text-xl font-poppins font-medium">
                        Artifacts & Supplies
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Artifacts & Supplies")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-6 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className=" text-sm font-lato font-normal">
                      Explore unique artifacts and supplies that narrate
                      stories, infusing distinctive charm into your spaces and
                      special occasions.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/branding.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3 flex-wrap">
                      <p className=" text-xl font-poppins font-medium">
                        Branding
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Branding")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-6 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className=" text-sm font-lato font-normal">
                      Craft your visual identity with our bespoke branding
                      solutions, capturing the essence of your brand with
                      creativity and precision.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/interior.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p className=" text-xl font-poppins font-medium">
                        Interior Fitouts
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Interior Fitouts")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-6 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className="text-sm font-lato font-normal">
                      Transform your spaces into a reflection of your style and
                      personality with our bespoke interior fitout services,
                      curated for a perfect blend of aesthetics and
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block lg:hidden">
              <div className=" grid grid-cols-2 gap-y-12 gap-x-12 mt-8">
                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/photoshoots.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p
                        onMouseOver={() => dispatch(modelText(true))}
                        onMouseLeave={() => dispatch(modelText(false))}
                        className=" text-3xl font-poppins font-medium"
                      >
                        Photo Shoot
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Photo Shoot")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-10 h-auto aspect-square  cursor-pointer"
                      />
                    </div>

                    <p className=" text-lg font-lato font-normal">
                      Capture moments that last a lifetime with our professional
                      photoshoot services, turning ordinary occasions into
                      extraordinary memories.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/stationaries.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p
                        onMouseOver={() => dispatch(modelText(true))}
                        onMouseLeave={() => dispatch(modelText(false))}
                        className="  text-3xl font-poppins font-medium"
                      >
                        Stationaries
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Stationaries")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-10 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className=" text-lg font-lato font-normal">
                      Add a touch of sophistication to your daily routine with
                      our carefully curated stationery collection, merging
                      functionality and style seamlessly.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/artifacts.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p
                        onMouseOver={() => dispatch(modelText(true))}
                        onMouseLeave={() => dispatch(modelText(false))}
                        className=" text-3xl font-poppins font-medium"
                      >
                        Artifacts & Supplies
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Artifacts & Supplies")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-10 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className=" text-lg font-lato font-normal">
                      Explore unique artifacts and supplies that narrate
                      stories, infusing distinctive charm into your spaces and
                      special occasions.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/branding.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p
                        onMouseOver={() => dispatch(modelText(true))}
                        onMouseLeave={() => dispatch(modelText(false))}
                        className=" text-3xl font-poppins font-medium"
                      >
                        Branding
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Branding")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-10 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className="  text-lg font-lato font-normal">
                      Craft your visual identity with our bespoke branding
                      solutions, capturing the essence of your brand with
                      creativity and precision.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="">
                    <Image
                      alt="dummy"
                      src="/other-services/interior.png"
                      width={3000}
                      height={3000}
                      className=" w-full h-auto rounded-3xl"
                    />
                  </div>
                  <div className=" mt-5">
                    <div className=" flex  flex-row justify-start items-start gap-3  mb-3">
                      <p
                        onMouseOver={() => dispatch(modelText(true))}
                        onMouseLeave={() => dispatch(modelText(false))}
                        className="  text-3xl font-poppins font-medium"
                      >
                        Interior Fitouts
                      </p>
                      <Image
                        onMouseOver={() => dispatch(modelButton(true))}
                        onMouseLeave={() => dispatch(modelButton(false))}
                        onClick={(e) => whatsappClick("Interior Fitouts")}
                        alt="dummy"
                        src="/whatsapp.svg"
                        width={100}
                        height={100}
                        className=" w-10 h-auto aspect-square  cursor-pointer"
                      />
                    </div>
                    <p className=" text-lg font-lato font-normal">
                      Transform your spaces into a reflection of your style and
                      personality with our bespoke interior fitout services,
                      curated for a perfect blend of aesthetics and
                      functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" hidden lg:block">
              <div ref={galleryRef} className="gallery">
                <div className="left">
                  <div className="desktopContent">
                    <div className="desktopContentSection">
                      <h1 className=" hidden">Photoshoot</h1>
                      <div className="wrap h-full">
                        <p
                          onMouseOver={() => dispatch(modelText(true))}
                          onMouseLeave={() => dispatch(modelText(false))}
                          className=" text-3xl font-poppins font-medium mb-3"
                        >
                          Photo Shoot
                        </p>
                        <p className=" text-lg font-lato font-normal">
                          Capture moments that last a lifetime with our
                          professional photoshoot services, turning ordinary
                          occasions into extraordinary memories.
                        </p>
                        <div
                          onMouseOver={() => dispatch(modelButton(true))}
                          onMouseLeave={() => dispatch(modelButton(false))}
                          onClick={(e) => whatsappClick("Photoshoot")}
                          className=" mt-7 flex flex-row gap-3 justify-start items-center cursor-pointer max-w-fit"
                        >
                          <Image
                            alt="dummy"
                            src="/whatsapp.svg"
                            width={100}
                            height={100}
                            className=" w-12 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="desktopContentSection">
                      <h1 className=" hidden">Stationary</h1>
                      <div className="wrap h-full">
                        <p
                          onMouseOver={() => dispatch(modelText(true))}
                          onMouseLeave={() => dispatch(modelText(false))}
                          className=" text-3xl font-poppins font-medium mb-3"
                        >
                          Stationaries
                        </p>
                        <p className=" text-lg font-lato font-normal">
                          Add a touch of sophistication to your daily routine
                          with our carefully curated stationery collection,
                          merging functionality and style seamlessly.
                        </p>
                        <div
                          onMouseOver={() => dispatch(modelButton(true))}
                          onMouseLeave={() => dispatch(modelButton(false))}
                          onClick={(e) => whatsappClick("Stationaries")}
                          className=" mt-7 flex flex-row gap-3 justify-start items-center cursor-pointer max-w-fit"
                        >
                          <Image
                            alt="dummy"
                            src="/whatsapp.svg"
                            width={100}
                            height={100}
                            className=" w-12 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="desktopContentSection">
                      <h1 className=" hidden">Artifacts & Supplies</h1>
                      <div className="wrap h-full">
                        <p
                          onMouseOver={() => dispatch(modelText(true))}
                          onMouseLeave={() => dispatch(modelText(false))}
                          className=" text-3xl font-poppins font-medium mb-3"
                        >
                          Artifacts & Supplies
                        </p>
                        <p className="  text-lg font-lato font-normal">
                          Explore unique artifacts and supplies that narrate
                          stories, infusing distinctive charm into your spaces
                          and special occasions.
                        </p>
                        <div
                          onMouseOver={() => dispatch(modelButton(true))}
                          onMouseLeave={() => dispatch(modelButton(false))}
                          onClick={(e) => whatsappClick("Artifacts & Supplies")}
                          className=" mt-7 flex flex-row gap-3 justify-start items-center cursor-pointer max-w-fit"
                        >
                          <Image
                            alt="dummy"
                            src="/whatsapp.svg"
                            width={100}
                            height={100}
                            className=" w-12 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="desktopContentSection">
                      <h1 className=" hidden">Branding</h1>
                      <div className="wrap h-full">
                        <p
                          onMouseOver={() => dispatch(modelText(true))}
                          onMouseLeave={() => dispatch(modelText(false))}
                          className=" text-3xl font-poppins font-medium mb-3"
                        >
                          Branding
                        </p>
                        <p className=" text-lg font-lato font-normal">
                          Craft your visual identity with our bespoke branding
                          solutions, capturing the essence of your brand with
                          creativity and precision.
                        </p>
                        <div
                          onMouseOver={() => dispatch(modelButton(true))}
                          onMouseLeave={() => dispatch(modelButton(false))}
                          onClick={(e) => whatsappClick("Branding")}
                          className=" mt-7 flex flex-row gap-3 justify-start items-center cursor-pointer max-w-fit"
                        >
                          <Image
                            alt="dummy"
                            src="/whatsapp.svg"
                            width={100}
                            height={100}
                            className=" w-12 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="desktopContentSection">
                      <h1 className=" hidden">Interior Fitouts</h1>
                      <div className="wrap h-full">
                        <p
                          onMouseOver={() => dispatch(modelText(true))}
                          onMouseLeave={() => dispatch(modelText(false))}
                          className=" text-3xl font-poppins font-medium mb-3"
                        >
                          Interior Fitouts
                        </p>
                        <p className="  text-lg font-lato font-normal">
                          Transform your spaces into a reflection of your style
                          and personality with our bespoke interior fitout
                          services, curated for a perfect blend of aesthetics
                          and functionality.
                        </p>
                        <div
                          onMouseOver={() => dispatch(modelButton(true))}
                          onMouseLeave={() => dispatch(modelButton(false))}
                          onClick={(e) => whatsappClick("Art")}
                          className=" mt-7 flex flex-row gap-3 justify-start items-center cursor-pointer max-w-fit"
                        >
                          <Image
                            alt="dummy"
                            src="/whatsapp.svg"
                            width={100}
                            height={100}
                            className=" w-12 h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div ref={parentRef} className="desktopPhotos">
                    <div className="desktopPhoto photoshoot"></div>
                    <div
                      ref={(ref) => addChildRef(ref)}
                      style={{
                        animationPlayState: `${
                          isScrolling === true ? "running" : "paused"
                        }`,
                      }}
                      className={`desktopPhoto stationaries  ${
                        isAtTop[0] === true ? "" : "clippath"
                      }`}
                    ></div>
                    <div
                      ref={(ref) => addChildRef(ref)}
                      style={{
                        animationPlayState: `${
                          isScrolling === true ? "running" : "paused"
                        }`,
                      }}
                      className={`desktopPhoto artifacts  ${
                        isAtTop[1] === true ? "" : "clippath"
                      }`}
                    ></div>
                    <div
                      ref={(ref) => addChildRef(ref)}
                      style={{
                        animationPlayState: `${
                          isScrolling === true ? "running" : "paused"
                        }`,
                      }}
                      className={`desktopPhoto branding  ${
                        isAtTop[2] === true ? "" : "clippath"
                      }`}
                    ></div>
                    <div
                      ref={(ref) => addChildRef(ref)}
                      style={{
                        animationPlayState: `${
                          isScrolling === true ? "running" : "paused"
                        }`,
                      }}
                      className={`desktopPhoto interior  ${
                        isAtTop[3] === true ? "" : "clippath"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
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
