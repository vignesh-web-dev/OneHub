"use client";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { gifts } from "../../Model/data";
import { products } from "@/Model/ProductData";
import "./corporateGifts.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Testimonial from "@/components/Testimonial";

import { isMobile, isTablet } from "react-device-detect";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Filter from "@/components/Filter";
import MobileFilter from "@/components/MobileFilter";

import Cursor from "@/components/cursor1";

import Pagination from "@mui/material/Pagination";
import Footer from "@/components/Footer";

import { useDispatch, useSelector } from "react-redux";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";
import {
  modelPage,
  modelFilter,
  modelFilterButton,
} from "../Redux/Corporate/corporateSlice";
import { toArray } from "gsap";
import { useRouter } from "next/navigation";

const Page = () => {
  const scroll = useLocomotiveScroll();
  scroll.multiplier = 0.3;
  const ref = useRef(null);
  const searchInputDesktop = useRef(null);
  const searchInputMobile = useRef(null);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.corporate.page);

  // const filterButtonDisabled = useSelector(
  //   (state) => state.corporate.filterButtonDisable
  // );

  const pagination = useRef(null);

  const [device, setDevice] = useState(null);

  const options = {
    smooth: true,
  };
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [offset, setOffset] = useState(0);
  const [perPage] = useState(18);

  const list = useSelector((state) => state.corporate.filter);

  let Initial = [];
  let seperateProducts = products;
  let initialDataWithFilter = [];
  if (list.length != 0) {
    list.map((i) => {
      let r = seperateProducts.filter((item) => item.category === i);
      r.map((item) => {
        initialDataWithFilter.push(item);
      });
    });
    Initial = initialDataWithFilter;
  } else {
    Initial = seperateProducts;
  }
  const [totalData, setTotalData] = useState(Initial);
  const [filteredDataForSearch, setFilteredDataForSearch] = useState(Initial);
  const totalItems = totalData.length;
  const itemsPerPage = 6;
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const [displayData, setDisplayData] = useState([]);

  const [mobileModelOpen, setMobileModelOpen] = useState(false);

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const [isHoverText, setHoverText] = useState(false);
  const [isContrast, setContrast] = useState(false);
  const [isButtonHover, setButtonHover] = useState(false);


  useEffect(() => {
    let page = (currentPage - 1) * itemsPerPage;
    let endPage =
      itemsPerPage * currentPage >= totalData.length
        ? products.length
        : itemsPerPage * currentPage;
    if (totalData.length >= endPage) {
      const datas = totalData.slice(page, endPage);
      setDisplayData(datas);
    } else {
      setDisplayData(totalData);
    }
  }, [totalData]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
    setData(products);
    return () => {};
  }, []);

  const handleDropdown = (e) => {
    if (e.target.parentElement.classList.contains("active")) {
      e.target.parentElement.classList.remove("active");
    } else {
      e.target.parentElement.classList.add("active");
    }
  };

  const handleInputChange = (e) => {
    searchInputDesktop.current.value = "";
    dispatch(modelPage(1));
    let elements = document.querySelectorAll(".listParent");
    let items = [];
    for (let i = 0; i < elements.length; i++) {
      let ele = elements[i].children[0];
      if (ele.checked) {
        items.push(elements[i].children[1].innerText);
      }
    }
    let filteredData = [];
    items.map((i) => {
      let r = products.filter((item) => item.category === i);
      r.map((item) => {
        filteredData.push(item);
      });
    });
    let normal = [];
    filteredData.forEach((e, index) => {
      normal.push(e);
      debugger;
      if (!items.includes(e.category)) {
        items.push(e.category);
      }
    });
    dispatch(modelFilter(items));
    if (normal.length == 0) {
      setTotalData(products);
      dispatch(modelFilter([]));
    } else {
      setTotalData(normal);
      setFilteredDataForSearch(normal);
    }
  };

  const handleList = (e) => {
    searchInputDesktop.current.value = "";
    let elements = document.querySelectorAll(".subList");
    for (let i = 0; i < elements.length; i++) {
      let ele = elements[i].children[0];
      if (ele.checked) {
        ele.checked = false;
      }
    }
    let filteredData = products.filter(
      (item) => item.category.toLowerCase() === e.target.innerText.toLowerCase()
    );
    let items = [e.target.innerText];
    dispatch(modelFilter(items));
    setTotalData(filteredData);
    setFilteredDataForSearch(filteredData);
  };

  const handleInnerListMobile = (e) => {
    let elements = document.querySelectorAll(".mainList");
    for (let i = 0; i < elements.length; i++) {
      let ele = elements[i].children[0];
      if (ele.checked) {
        ele.checked = false;
      }
    }
    let filteredData = products.filter(
      (item) => item.category === e.target.innerText
    );
    setTotalData(filteredData);
  };

  const handleSearch = (e) => {
    let filteredData;
    const term = e.target.value;
    dispatch(modelFilter([]));
    filteredData =
      products &&
      products.filter((item) => {
        return item.name.toLowerCase().includes(term.toLowerCase());
      });
    setTotalData(filteredData);
    if (e.target.value == "") {
      setTotalData(products);
      dispatch(modelPage(1));
    }
  };
  const handleSearchDesktop = (e) => {
    let filteredData;
    const term = e.target.value;
    let elements = document.querySelectorAll(".mainList");
    dispatch(modelFilter([]));
    filteredData =
      data &&
      data.filter((item) => {
        return item.name.toLowerCase().includes(term.toLowerCase());
      });
    setTotalData(filteredData);
    if (e.target.value == "") {
      setTotalData(data);
      dispatch(modelPage(1));
    }
  };

  const handleMobileFilter = (e) => {
    setModalPosition({ x: e.clientX, y: e.clientY });
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    setMobileModelOpen(true);
  };
  const handleMobileFilterCancel = (e) => {
    document.getElementsByTagName("body")[0].style.overflow = "unset";
    setMobileModelOpen(false);
  };
  const handleListMobile = (e) => {
    let elements = document.querySelectorAll(".mobileFilterInput");
    let items = [];
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].checked) {
        items.push(elements[i]);
      }
    }
    if (items.length > 0) {
      dispatch(modelFilterButton(false));
    } else {
      dispatch(modelFilterButton(true));
    }
  };
  const handleMobileFilterClose = (e) => {
    debugger;
    searchInputMobile.current.value = "";
    dispatch(modelPage(1));
    let elements = document.querySelectorAll(".listParent");
    let items = [];
    for (let i = 0; i < elements.length; i++) {
      let ele = elements[i].children[0];
      if (ele.checked) {
        items.push(elements[i].children[1].innerText);
      }
    }
    let filteredData = [];
    items.map((i) => {
      let r = products.filter((item) => item.category === i);
      r.map((item) => {
        filteredData.push(item);
      });
    });
    if (items.length == 0) {
      filteredData = products;
    }
    dispatch(modelFilter(items));
    setTotalData(filteredData);
    setFilteredDataForSearch(filteredData);
    document.getElementsByTagName("body")[0].style.overflow = "unset";
    setMobileModelOpen(false);
  };

  const handleChange = (event, value) => {
    setDisplayData(
      totalData.slice((value - 1) * itemsPerPage, value * itemsPerPage)
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
    dispatch(modelPage(value));
  };
  const handleClearButton = () => {
    dispatch(modelFilter([]));
    setTotalData(products);
    setFilteredDataForSearch(products);
  };

  return (
    <>
      <Cursor />
      <>
        <section
          className="pt-[60px] md:pt-28"
          onMouseOver={() => dispatch(modelContrast(false))}
          onMouseLeave={() => dispatch(modelContrast(true))}
          data-scroll-section
          data-scroll
        >
          <div className=" max-w-6xl mx-auto md:w-full flex md:flex-row flex-col justify-center items-start mt-5 px-3 pb-20">
          
            {device == "desktop" && (
              <Filter
                handleDropdown={handleDropdown}
                handleInputChange={handleInputChange}
                handleList={handleList}
                handleClearButton={handleClearButton}
              ></Filter>
            )}

            {device == "mobile" && (
              <div className="w-full overflow-hidden">
                <p
                  onMouseOver={() => dispatch(modelText(true))}
                  onMouseLeave={() => dispatch(modelText(false))}
                  className=" text-2xl font-medium font-poppins text-center mb-8"
                >
                  Corporate Gifts
                </p>

                <div className=" w-full grid grid-flow-col auto-cols-max	 gap-7 justify-between items-center">
                  <div
                    onClick={(e) => handleMobileFilter(e)}
                    className="col-span-1 p-[10px] w-auto aspect-square h-12 rounded-lg bg-yellow relative"
                  >
                    <div
                      className={`absolute -top-3 -right-3 h-6 w-6 aspect-square rounded-full bg-[#F90606] flex justify-center items-center text-sm text-white font-bold leading-normal	 ${
                        list.length == 0 ? "hidden" : ""
                      }`}
                    >
                      {list.length}
                    </div>
                    <Image
                      src="/corporate-gifts/filter.svg"
                      height={3000}
                      width={3000}
                      alt="filter"
                      className=" w-full h-auto"
                    ></Image>
                  </div>
                  {mobileModelOpen ? (
                    <MobileFilter
                      handleDropdown={handleDropdown}
                      handleInnerListMobile={handleInnerListMobile}
                      origin={modalPosition}
                      handleMobileFilterClose={handleMobileFilterClose}
                      handleMobileFilterCancel={handleMobileFilterCancel}
                    ></MobileFilter>
                  ) : (
                    ""
                  )}

                  <div className="col-span-4 relative overflow-hidden line-box ">
                    <input
                      ref={searchInputMobile}
                      type="text"
                      placeholder="Search"
                      onChange={(e) => handleSearch(e)}
                      className=" h-full relative text-base font-poppins font-normal border-0 outline-none bg-white focus:bg-white bg-[url('/corporate-gifts/search.svg')] bg-no-repeat bg-[length:24px_auto] bg-left-top pb-2 pl-11 box-border"
                    />
                    <div className="ohline"></div>
                  </div>
                </div>
              </div>
            )}

            <div className="w-full  sm:py-5 md:pl-7">
              <div className=" w-full  flex-row justify-center sm:justify-end hidden md:flex">
                <div className="relative overflow-hidden line-box ">
                  <input
                    ref={searchInputDesktop}
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleSearchDesktop(e)}
                    className=" h-full relative text-base font-poppins font-normal border-0 outline-none bg-white focus:bg-white bg-[url('/corporate-gifts/search.svg')] bg-no-repeat bg-[length:24px_auto] bg-left-top pb-2 pl-11"
                  />
                  <div className="ohline"></div>
                </div>
              </div>
              <div className=" mt-[60px]">
                {displayData.length == 0 ? (
                  <p className=" font-lato font-medium text-lg">
                    No Data To Display
                  </p>
                ) : (
                  ""
                )}
                <div className=" grid grid-cols-2 gap-8 min-[850px]:grid-cols-3">
                  {displayData &&
                    displayData.map((item, index) => {
                      debugger;
                      let random;
                      if (item.isVariable) {
                        let len = item.variation[0].colors.length - 1;
                        random = Math.floor(Math.random() * (len - 1 + 1)) + 1;
                      }
                      return (
                        <Link
                          key={index}
                          href={{
                            pathname: `/product/${item?.id}`,
                            query: { id: item.id },
                          }}
                          className=" w-full "
                        >
                          <div className="  w-auto h-auto max-h-64 aspect-square rounded-[20px]">
                            <Image
                              alt={item.name}
                              src={
                                item.isVariable == true
                                  ? `/products/${item.images[random].source[0]}`
                                  : `/products/${item.images[0]}`
                              }
                              width={3000}
                              height={3000}
                              className="  w-auto h-full rounded-[20px] mx-auto"
                            ></Image>
                          </div>
                          <p className=" font-poppins text-lg font-medium mt-5 mb-2 text-center">
                            {item.name}
                          </p>
                        </Link>
                      );
                    })}
                </div>
                <Pagination
                  hideNextButton
                  hidePrevButton
                  count={pageCount}
                  page={currentPage}
                  onChange={handleChange}
                  color="primary"
                  className={`mt-14 font-lato ${
                    totalData.length <= 6 ? "!hidden" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </section>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </>
    </>
  );
};

export default Page;
