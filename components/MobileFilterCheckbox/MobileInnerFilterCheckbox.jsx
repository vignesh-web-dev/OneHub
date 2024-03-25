import React from "react";
import "./MobileInnerFilterCheckbox.css";

const FilterCheckbox = (props) => {
  let ids = props.value;
  let list = props.list;
  let key = props.index;
  let parent = props.parent;
  const { handleInputChange, groupSelected, handleChild } = props;
  return (
    <>
      {list == "yes" && (
        <div
          key={key ? key : ""}
          className={`listParent svg-checkboxList mainList`}
        >
          <input
            type="checkbox"
            name={ids}
            id={ids}

            className="mobileFilterInput"
          />
          <label
            className=" font-lato text-lg font-bold  cursor-pointer outerList"
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
      {list == null && props.group == null && (
        <div key={key ? key : ""} className={`listParent svg-checkbox subList`}>
          <input
            type="checkbox"
            name={ids}
            id={ids + "1"}
            onChange={(e) => handleChild(e, parent)}
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
      {props.group && list == null && (
        <div
          key={key ? key : ""}
          className={`listParent svg-checkboxList mainList`}
        >
          <input
            type="checkbox"
            name={ids}
            id={ids}
            onChange={groupSelected}
            className="mobileFilterInput"
          />
          <label
            className=" font-lato text-lg font-bold  cursor-pointer outerList"
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
