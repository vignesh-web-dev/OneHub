import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";
import Lenis from "@studio-freight/lenis";

const Footer = ({ lenis }) => {
  const linkRef = useRef(null);
  const dispatch = useDispatch();
  const email = "contact@onehubshoppy.com";
  const pathname = usePathname();

  return (
    <>
      <section
        onMouseOver={() => dispatch(modelContrast(true))}
        onMouseLeave={() => dispatch(modelContrast(false))}
      >
        <footer className="footer active w-full overflow-hidden md:px-16 px-2 bg-[#000000] pt-16 pb-8 text-white -mt-1 font-lato">
          <div className="flex md:flex-row flex-col justify-between md:items-start items-center w-[95%] max-w-6xl mx-auto">
            <div
              onMouseOver={() => dispatch(modelButton(true))}
              onMouseLeave={() => dispatch(modelButton(false))}
              className="md:w-[20%] w-[80%] flex flex-col md:items-start items-center"
            >
              <Link href="/" className="px-2 py-2">
                <Image
                  alt="logo"
                  src="/logo.svg"
                  height={3000}
                  width={3000}
                  className="w-full max-w-[15rem] h-auto"
                ></Image>
              </Link>
            </div>
            <div className="md:w-[80%] w-full grid md:grid-cols-3 grid-cols-2 mt-10 md:mt-0 md:pl-10 gap-5">
              <div className="flex flex-col items-start justify-start">
                <p
                  onMouseOver={() => dispatch(modelText(true))}
                  onMouseLeave={() => dispatch(modelText(false))}
                  className="font-medium text-2xl md:mb-5 mb-3 font-poppins"
                >
                  One Hub
                </p>
                {pathname === "/" ? (
                  <a
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className="text-base font-semibold mb-2 text-left"
                    href="/"
                  >
                    Home
                  </a>
                ) : (
                  <a
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className="text-base font-semibold mb-2 text-left"
                    href="/"
                  >
                    Home
                  </a>
                )}
                {pathname === "/" ? (
                  <Link
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className="text-base font-semibold text-left mb-2"
                    href="#ourbusiness"
                    onClick={(e) => {
                      document
                        .getElementById("ourbusiness")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    scroll={false}
                  >
                    Our Business
                  </Link>
                ) : (
                  <Link
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className="text-base font-semibold text-left mb-2"
                    href="/#ourbusiness"
                    scroll={false}
                  >
                    Our Business
                  </Link>
                )}
                <Link
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  className="text-base font-semibold text-left"
                  href="/other-services"
                >
                  Other Services
                </Link>
              </div>
              <div className="flex flex-col items-start justify-start">
                <p
                  onMouseOver={() => dispatch(modelText(true))}
                  onMouseLeave={() => dispatch(modelText(false))}
                  className="font-medium text-2xl md:mb-5 mb-3 font-poppins"
                >
                  Info
                </p>
                <Link
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  className="text-base font-semibold mb-2 text-left"
                  href="/ourstory"
                >
                  Our Story
                </Link>
                <Link
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  className="text-base font-semibold mb-2 text-left"
                  href="/corporate-gifts"
                >
                  Corporate Gifts
                </Link>
                {pathname === "/" ? (
                  <Link
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className="text-base font-semibold text-left mb-2"
                    href="#top-selling"
                    onClick={(e) => {
                      document
                        .getElementById("top-selling")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    scroll={false}
                  >
                    Top Selling
                  </Link>
                ) : (
                  <Link
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className="text-base font-semibold text-left mb-2"
                    href="/#top-selling"
                    scroll={false}
                  >
                    Top Selling
                  </Link>
                )}
              </div>
              <div className="flex flex-col items-start justify-start col-span-2 md:col-span-1">
                <p
                  onMouseOver={() => dispatch(modelText(true))}
                  onMouseLeave={() => dispatch(modelText(false))}
                  className="font-medium text-2xl md:mb-5 mb-3 font-poppins"
                >
                  Contact
                </p>
                <Link
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  className="text-base font-semibold mb-2 text-left"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
                <div className="w-full">
                  <Link
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className=" flex items-center mb-2 "
                    href={`mailto:${email}`}
                    // href="mailto:contact@onehubshoppy.com"
                  >
                    <p className="underline text-sm break-all">
                      contact@onehubshoppy.com
                    </p>
                  </Link>
                  <Link
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    className="underline text-sm flex items-center mb-2"
                    href="tel:+919043616788"
                  >
                    +91 90436 16788
                  </Link>
                  <Link
                    onMouseOver={() => dispatch(modelButton(true))}
                    onMouseLeave={() => dispatch(modelButton(false))}
                    target="_blank"
                    className="text-sm flex flex-row gap-1 items-center"
                    href="https://www.instagram.com/onehubshopping/"
                  >
                    <Image
                      alt="instagram"
                      src="/Footer/instagram.svg"
                      width={3000}
                      height={3000}
                      className="w-8 h-auto aspect-square"
                    ></Image>
                    <p>@onehubshopping</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs font-normal text-center mt-20">
            © {new Date().getFullYear()} All Rights Reserved, One Hub®
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
