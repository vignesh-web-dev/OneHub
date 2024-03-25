"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/button";
import { gifts } from "../../../Model/data";
import { products } from "@/Model/ProductData";
import Image from "next/image";
import "./productDetails.css";
import Cursor from "@/components/cursor1";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";
import { previousPath } from "@/app/Redux/Corporate/corporateSlice";
import Lightbox from "react-18-image-lightbox";
// import Lightbox from "react-image-lightbox";
import "react-18-image-lightbox/style.css";

function getData(params) {
  let filteredData = products.filter((item) => item.id === params.id);
  return filteredData;
}

export default function Page({ params }) {
  const datas = getData(params);
  //   console.log(data);
  useEffect(() => {
    document.title = "One Hub -" + datas[0].name;
  }, []);

  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [isVideo, setIsVideo] = useState(false);
  // const [imageError, setImageError] = useState(true);
  const images =
    typeof datas[0].images[0] == "object"
      ? datas[0].images[activeColor].source
      : datas[0].images;
  const images2 =
    typeof datas[0].images[0] == "object"
      ? datas[0].images[activeColor].source
      : datas[0].images;
  const [data, setData] = useState(datas);

  const [isOpen, setIsOpen] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const dispatch = useDispatch();
  dispatch(previousPath(true));

  function handleImageClick(e, video) {
    if (video) {
      setIsVideo(true);
      setActiveImage(e);
    } else {
      setIsVideo(false);
      setActiveImage(e);
    }
  }
  function handleColorClick(e) {
    setActiveImage(0);
    setActiveColor(e);
  }
  const whatsappClick = () => {
    var phoneNumber = "+919043616788"; // Replace with your WhatsApp number
    var customMessage = encodeURIComponent(
      `Hi 👋 One Hub, I am interested in ${datas[0].name} and would like to know more.`
    );

    // Create the WhatsApp API link
    var whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + customMessage;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };
  const onAfterOpen = (e) => {
    setTimeout(() => {
      document.getElementsByClassName("ril-zoom-in")[0].click();
      document.getElementsByClassName("ril-image-current")[0].style.opacity = 0;
    }, 500);
    setTimeout(() => {
      document.getElementsByClassName("ril-zoom-out")[0].click();
      document.getElementsByClassName("ril-image-current")[0].style.opacity = 1;
    }, 505);
  };
  return (
    <>
      <Cursor />
      <main
        onMouseOver={() => dispatch(modelContrast(true))}
        onMouseLeave={() => dispatch(modelContrast(false))}
        className="pt-28 bg-black min-h-screen"
      >
        {isOpen ? (
          <Lightbox
            mainSrc={"/products/" + images[photoIndex]}
            nextSrc={"/products/" + images[(photoIndex + 1) % images.length]}
            prevSrc={
              "/products/" +
              images[(photoIndex + images.length - 1) % images.length]
            }
            onAfterOpen={(e) => onAfterOpen(e)}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        ) : (
          ""
        )}
        <section className=" flex justify-center items-center flex-col  pb-12">
          <h1
            onMouseOver={() => dispatch(modelText(true))}
            onMouseLeave={() => dispatch(modelText(false))}
            className="text-white text-center text-4xl font-semibold inline-block"
          >
            {data[0].name}
          </h1>
          <div className=" flex md:flex-row flex-col gap-5 lg:gap-10 w-[95%] max-w-6xl mt-11 mx-auto justify-center">
            {datas[0].isVariable == true ? (
              <div className=" w-full h-full md:max-w-[60%] rounded-lg flex flex-col-reverse md:flex-col-reverse lg:flex-row flex-wrap sm:flex-nowrap gap-6">
                <div className="flex flex-row flex-wrap md:flex-row gap-4 lg:flex-col ">
                  {data[0] &&
                    data[0].images[activeColor].source.map((item, key) => {
                      if (item.video != null) {
                        return (
                          <Image
                            key={key}
                            src={"/products/" + item.sub}
                            alt="img"
                            height={3000}
                            width={3000}
                            className={`${
                              activeImage === key ? "imageActive" : ""
                            } h-auto min-[440px]:min-w-[120px] w-[80px] min-[440px]:w-[120px] aspect-square rounded-[20px] cursor-pointer bg-white`}
                            onClick={(e) => handleImageClick(key, "video")}
                          ></Image>
                        );
                      } else {
                        return (
                          <div
                            key={key}
                            className={`${
                              activeImage === key ? "imageActive" : ""
                            }  min-[440px]:min-w-[120px]  min-[440px]:min-h-[120px] w-[80px] h-20 min-[440px]:w-[120px] min-[440px]:h-[120px]  overflow-hidden aspect-square rounded-[20px] cursor-pointer bg-white`}
                            onClick={(e) => handleImageClick(key)}
                          >
                            <Image
                              key={key}
                              src={"/products/" + item}
                              alt="img"
                              height={3000}
                              width={3000}
                              className={` h-full w-auto mx-auto`}
                            ></Image>
                          </div>
                        );
                      }
                    })}
                </div>
                <div className=" h-auto w-full aspect-square md:max-w-[515px] md:min-w-[410px] bg-white rounded-[20px]">
                  {isVideo ? (
                    <video
                      autoPlay
                      muted
                      loop
                      src={
                        "/products/" +
                        data[0].images[activeColor].source[activeImage].video
                      }
                      height={3000}
                      width={3000}
                      alt="images"
                      className=" h-full w-auto mx-auto"
                    ></video>
                  ) : (
                    <Image
                      src={
                        "/products/" +
                        data[0].images[activeColor].source[activeImage]
                      }
                      height={3000}
                      width={3000}
                      alt="images"
                      className=" h-full w-auto mx-auto bg-white rounded-[20px]"
                      onClick={(e) => {
                        setPhotoIndex(activeImage);
                        setIsOpen(true);
                      }}
                    ></Image>
                  )}
                </div>
              </div>
            ) : (
              <div className=" w-full h-full md:max-w-[60%] rounded-lg flex flex-col-reverse md:flex-col-reverse lg:flex-row flex-wrap sm:flex-nowrap gap-6">
                <div className="flex flex-row flex-wrap md:flex-row gap-4 lg:flex-col">
                  {data[0] &&
                    data[0].images.map((item, key) => {
                      if (item.video != null) {
                        return (
                          <Image
                            key={key}
                            src={"/products/" + item.sub}
                            alt="img"
                            height={3000}
                            width={3000}
                            className={`${
                              activeImage === key ? "imageActive" : ""
                            } h-auto min-[440px]:min-w-[120px] w-[80px] min-[440px]:w-[120px] aspect-square rounded-[20px] cursor-pointer bg-white`}
                            onClick={(e) => handleImageClick(key, "video")}
                          ></Image>
                        );
                      } else {
                        return (
                          <Image
                            key={key}
                            src={"/products/" + item}
                            alt="img"
                            height={3000}
                            width={3000}
                            className={`${
                              activeImage === key ? "imageActive" : ""
                            } h-auto min-[440px]:min-w-[120px] w-[80px] min-[440px]:w-[120px] aspect-square rounded-[20px] cursor-pointer bg-white`}
                            onClick={(e) => handleImageClick(key)}
                          ></Image>
                        );
                      }
                    })}
                </div>
                {isVideo ? (
                  <video
                    autoPlay
                    muted
                    loop
                    src={"/products/" + data[0].images[activeImage].video}
                    height={3000}
                    width={3000}
                    alt="images"
                    className=" h-auto w-full md:max-w-[515px] md:min-w-[410px] rounded-[20px] bg-white aspect-square"
                  ></video>
                ) : (
                  <Image
                    src={"/products/" + data[0].images[activeImage]}
                    height={3000}
                    width={3000}
                    alt="images"
                    className=" h-auto w-full md:max-w-[515px] md:min-w-[410px] rounded-[20px] bg-white aspect-square"
                    onClick={(e) => {
                      setPhotoIndex(activeImage);
                      setIsOpen(true);
                    }}
                  ></Image>
                )}
              </div>
            )}
            <div className="flex md:max-w-[40%] flex-col gap-10 justify-center items-start">
              <p className=" text-white text-lg font-normal">{data[0].desc}</p>
              {data[0].Dimentions != "" ? (
                <div>
                  <p className="text-white text-lg font-semibold">
                    Specifications:
                  </p>
                  <p className=" text-white text-lg font-normal">
                    {data[0].Dimentions}
                  </p>
                </div>
              ) : (
                ""
              )}

              {datas[0].isVariable ? (
                <div className="">
                  <p className=" text-white text-2xl font-semibold">Colors</p>
                  <div className=" flex flex-row gap-3 mt-3">
                    {data[0]?.variation[0].colors.map((item, key) => {
                      return (
                        <div
                          key={key}
                          className={`${
                            activeColor === key ? "colorActive" : ""
                          } w-9 h-9 colorDiv rounded-full flex justify-center items-center cursor-pointer`}
                          onClick={(e) => handleColorClick(key)}
                        >
                          <div
                            style={{ backgroundColor: `${item}` }}
                            key={key}
                            className=" w-7 b aspect-square rounded-full cursor-pointer"
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                onClick={whatsappClick}
                className="relative bottom-0 flex flex-wrap flex-row  justify-start gap-2 gap-y-5 "
              >
                <Button text="Enquire about this item"></Button>
                <Image
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  src="/whatsapp.svg"
                  height={3000}
                  width={3000}
                  className="h-auto w-full max-w-[48px] cursor-pointer"
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}
