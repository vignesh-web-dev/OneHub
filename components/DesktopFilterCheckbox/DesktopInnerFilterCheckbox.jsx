import React from "react";
import "./DesktopInnerFilterCheckbox.css";
import { useDispatch, useSelector } from "react-redux";
import {
  modelButton,
  modelContrast,
  modelText,
} from "@/app/Redux/Cursor/cursorSlice";

const FilterCheckbox = (props) => {
  let ids = props.value;
  const {
    handleInputChange,
    name,
    checked,
    parent,
    list,
    group,
    groupSelected,
    handleChild,
  } = props;
  const dispatch = useDispatch();

  return (
    <>
      {list == "yes" && (
        <div className={`listParent svg-checkboxList subList`}>
          <input
            type="checkbox"
            name={ids}
            id={ids}
            onChange={(e) => handleChild(e, parent)}
            className="mobileFilterInput"
          />
          <label
            className=" font-lato text-base cursor-pointer outerList"
            htmlFor={ids}
          >
            {props.value}
          </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 50 L 40 86 L 90 10"
              stroke="#000"
              strokeDasharray="140"
              strokeDashoffset="140"
            ></path>
          </svg>
        </div>
      )}
      {list == null && group == null && (
        <div className={`listParent svg-checkbox subList`}>
          <input
            type="checkbox"
            name={ids}
            id={ids + "1"}
            onChange={handleInputChange}
            className="mobileFilterInput"
          />
          <label className="font-lato text-base innerList" htmlFor={ids + "1"}>
            {props.value}
          </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 50 L 40 86 L 90 10"
              stroke="#000"
              strokeDasharray="140"
              strokeDashoffset="140"
            ></path>
          </svg>
        </div>
      )}
      {group && list == null && (
        <div className={`listParent svg-checkboxList mainList`}>
          <input
            type="checkbox"
            name={ids}
            id={ids}
            onChange={groupSelected}
            className="mobileFilterInput"
          />
          <label
            className=" font-lato text-base  cursor-pointer outerList"
            htmlFor={ids}
          >
            {props.value}
          </label>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 50 L 40 86 L 90 10"
              stroke="#000"
              strokeDasharray="140"
              strokeDashoffset="140"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default FilterCheckbox;
