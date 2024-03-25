import React, { useState, useEffect } from "react";
import "./HomeScroll.css";
import { useDispatch, useSelector } from "react-redux";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";
import Link from "next/link";

const HomeScroll = () => {
  const [activeElement, setActiveElement] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeElement == 3) {
        setActiveElement(1);
      } else {
        setActiveElement(activeElement + 1);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [activeElement]);
  return (
    <div className="">
      <div
        className={` ${
          activeElement == 1 ? "show" : "hidden"
        } h-[50dvh] md:h-[100dvh] max-h-[650px] bg-[url('/Home/Carousal/featherPen.png')] bg-no-repeat bg-center bg-[length:500%_auto] min-[560px]:bg-[length:380%_auto] md:bg-[length:450%_auto] lg:bg-[length:350%_auto] xl:bg-[length:300%_auto] 2xl:bg-[length:270%_auto] min-[1700px]:bg-[length:230%_auto] w-full opacity-0`}
      ></div>
      {/* </Link> */}
      <Link
        href={{
          pathname: `/product/Brown-Sleeve-Laptop-Bag`,
          query: { id: "Brown-Sleeve-Laptop-Bag" },
        }}
      >
        <div
          className={` ${
            activeElement == 2 ? "show" : "hidden"
          } h-[50dvh] md:h-[100dvh] max-h-[650px] bg-[url('/Home/Carousal/Laptop_Bag.png')] bg-no-repeat bg-center bg-[length:500%_auto] min-[560px]:bg-[length:380%_auto] md:bg-[length:450%_auto] lg:bg-[length:350%_auto] xl:bg-[length:300%_auto] 2xl:bg-[length:270%_auto] min-[1700px]:bg-[length:230%_auto] w-full opacity-0`}
        ></div>
      </Link>
      <Link
        href={{
          pathname: `/product/Diary-Pen-Keychain-Temperature-Bottle-VaccumMug`,
          query: { id: "Diary-Pen-Keychain-Temperature-Bottle-VaccumMug" },
        }}
      >
        <div
          className={` ${
            activeElement == 3 ? "show" : "hidden"
          } h-[50dvh] md:h-[100dvh] max-h-[650px] bg-[url('/Home/Carousal/ComboKit.jpg')] bg-no-repeat bg-center bg-[length:500%_auto] min-[560px]:bg-[length:380%_auto] md:bg-[length:450%_auto] lg:bg-[length:350%_auto] xl:bg-[length:300%_auto] 2xl:bg-[length:270%_auto] min-[1700px]:bg-[length:230%_auto] w-full opacity-0`}
        ></div>
      </Link>
      <div className=" text-center h-10 flex flex-row justify-center items-center gap-2">
        <span
          onMouseOver={() => dispatch(modelButton(true))}
          onMouseLeave={() => dispatch(modelButton(false))}
          className={`dot ${activeElement == 1 ? "active" : ""} cursor-pointer`}
          onClick={() => setActiveElement(1)}
        ></span>
        <span
          onMouseOver={() => dispatch(modelButton(true))}
          onMouseLeave={() => dispatch(modelButton(false))}
          className={`dot ${activeElement == 2 ? "active" : ""} cursor-pointer`}
          onClick={() => setActiveElement(2)}
        ></span>
        <span
          onMouseOver={() => dispatch(modelButton(true))}
          onMouseLeave={() => dispatch(modelButton(false))}
          className={`dot ${activeElement == 3 ? "active" : ""} cursor-pointer`}
          onClick={() => setActiveElement(3)}
        ></span>
      </div>
    </div>
  );
};

export default HomeScroll;
