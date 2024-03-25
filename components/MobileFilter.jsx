"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { products, groups } from "@/Model/ProductData";
import "@/app/corporate-gifts/corporateGifts.css";
import "./mobileFilter.css";
import FilterCheckbox from "./MobileFilterCheckbox/MobileInnerFilterCheckbox";
import { useDispatch, useSelector } from "react-redux";

const MobileFilter = ({
  handleDropdown,
  handleInnerListMobile,
  handleList,
  origin,
  FiteredList,
  handleMobileFilterClose,
  handleMobileFilterCancel,
}) => {
  const list = useSelector((state) => state.corporate.filter);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    if (list.length != 0) {
      list.forEach((element) => {
        let ids = element;
        let elem = document.querySelector(`input[name="${ids}"]`);
        debugger;
        elem.checked = true;
      });
    }
  }, [list]);

  const groupSelected = (e) => {
    const elements =
      e.target.parentElement.parentElement.parentElement.children[1].children;
    if (e.target.checked == true) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].children[0].checked = true;
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].children[0].checked = false;
      }
    }
  };
  const modalStyle = {
    transformOrigin: `${origin.x}px ${origin.y}px`,
  };
  const handleChild = (e, parent) => {
    debugger;
    let elems = e.target.parentElement.parentElement.children;
    let value = true;
    for (let i = 0; i < elems.length; i++) {
      if (!elems[i].querySelector("input").checked) {
        value = false;
        break;
      }
    }
    let parentElement = document.getElementsByClassName(parent)[0];
    if (value) {
      parentElement.querySelector("input").checked = true;
    }
    if (!value) {
      parentElement.querySelector("input").checked = false;
    }
  };
  return (
    <div className=" fixed top-0 left-0 bottom-0 right-0 z-50 w-full bg-[#FFFFFFE6] flex justify-center items-center">
      <div
        style={modalStyle}
        className="modal-content w-full h-full overflow-auto flex-col justify-center items-start rounded-[20px] "
      >
        <div className=" py-5 px-5 w-full flex flex-col items-start gap-5 min-w-fit rounded-[20px] m-auto bg-[#F7BD58]">
          <p className=" font-lato font-bold text-xl">
            Select the type of gifts you want to see and buy from us.
          </p>
          {groups &&
            groups.map((item, key) => (
              <div key={key}>
                {item.list != undefined ? (
                  <div>
                    <div
                      className={`flex flex-row justify-start items-center cursor-pointer dropdown
                      ${item.name} 
                      `}
                    >
                      <FilterCheckbox
                        value={item.name}
                        group={true}
                        groupSelected={groupSelected}
                      ></FilterCheckbox>
                      <div
                        className=" w-auto h-auto aspect-square flex justify-center items-center ml-2"
                        onClick={(e) => handleDropdown(e)}
                      >
                        <Image
                          alt="dummy"
                          src="/corporate-gifts/downArrow.png"
                          width={3000}
                          height={3000}
                          className=" w-3 h-auto pointer-events-none invert"
                        ></Image>
                      </div>
                    </div>
                    <div className="pt-4 pl-5 flex-col gap-[10px] hidden accordion-content">
                      {item.list &&
                        item.list.map((items, index) => (
                          <FilterCheckbox
                            handleChild={handleChild}
                            parent={item.name}
                            key={index}
                            value={items}
                          ></FilterCheckbox>
                        ))}
                    </div>
                  </div>
                ) : (
                  <FilterCheckbox value={item.name} list="yes"></FilterCheckbox>
                )}
              </div>
            ))}
         
          <div className=" flex flex-row gap-5 justify-center items-center w-full">
            <button
              onClick={handleMobileFilterClose}
              className="px-5 py-3 bg-black w-fit text-white text-base font-poppins font-semibold rounded-full"
            >
              Apply
            </button>
            <button
              onClick={handleMobileFilterCancel}
              className=" px-5 py-3 bg-white w-fit text-[#ff0000] text-base font-poppins font-semibold rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
