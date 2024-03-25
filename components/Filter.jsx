"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { gifts } from "../Model/data";
import "@/app/corporate-gifts/corporateGifts.css";
import FilterCheckbox from "./DesktopFilterCheckbox/DesktopInnerFilterCheckbox";
import "@/components/DesktopFilterCheckbox/DesktopInnerFilterCheckbox.css";
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
} from "../app/Redux/Corporate/corporateSlice";
import { groups } from "@/Model/ProductData";

const Filter = ({
  handleDropdown,
  handleInputChange,
  handleList,
  handleClearButton,
}) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.corporate.filter);
  useEffect(() => {
    if (list.length != 0) {
      list.forEach((element) => {
        let ids = element;
        let elem = document.querySelector(`input[name="${ids}"]`);
        elem.checked = true;
      });
    } else {
      let elements = document.querySelectorAll(".listParent");
      elements.forEach((element) => {
        let ele = element.children[0];
        ele.checked = false;
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
      handleInputChange();
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].children[0].checked = false;
      }
      handleInputChange();
    }
  };
  const handleChild = (e, parent) => {
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
    handleInputChange();
  };

  return (
    <div className=" border-r-2 border-black py-7 pr-3 flex-col gap-8 min-w-fit flex flex-1">
      <div className=" flex justify-between items-center gap-4">
        <p
          onMouseOver={() => dispatch(modelText(true))}
          onMouseLeave={() => dispatch(modelText(false))}
          className=" text-xl font-medium font-poppins "
        >
          Categories
        </p>
        {/* {list.length > 0 && ( */}
        <p
          onClick={() => handleClearButton()}
          className=" text-sm text-yellow cursor-pointer font-medium"
        >
          Clear All
        </p>
        {/* )} */}
      </div>
      {groups &&
        groups.map((item, key) => (
          <div key={key} className="  pr-9">
            {item.list != undefined ? (
              <div>
                <div
                  onMouseOver={() => dispatch(modelButton(true))}
                  onMouseLeave={() => dispatch(modelButton(false))}
                  className={`flex flex-row justify-between items-center cursor-pointer dropdown ${item.name} `}
                >
                  <FilterCheckbox
                    value={item.name}
                    name={item.name}
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
                <div
                  className={`pt-4 pl-5 flex-col gap-3 hidden accordion-content  `}
                >
                  {item.list &&
                    item.list.map((items, index) => (
                      <FilterCheckbox
                        handleChild={handleChild}
                        parent={item.name}
                        value={items}
                        key={index}
                        name={items}
                        list="yes"
                      ></FilterCheckbox>
                    ))}
                </div>
              </div>
            ) : (
              <div className=" flex justify-between items-center">
                <FilterCheckbox
                  handleInputChange={handleInputChange}
                  value={item.name}
                  name={item.name}
                  checked={list.includes({ item }) ? true : false}
                ></FilterCheckbox>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Filter;
