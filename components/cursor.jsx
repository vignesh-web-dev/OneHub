import React, { forwardRef, useRef } from "react";

const Cursor1 = () => {
  return <div className="cursor-style" id="cursor"></div>;
};

const Cursor = forwardRef((props, ref) => {
  const cursorRef = useRef(null);
  return <div className="cursor-style" id="cursor" ref={ref}></div>;
});

Cursor.displayName = "Cursor";

export default Cursor;
