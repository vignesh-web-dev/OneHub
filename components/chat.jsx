import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  modelText,
  modelButton,
  modelContrast,
} from "../app/Redux/Cursor/cursorSlice";

const Chat = () => {
  const dispatch = useDispatch();

  const whatsappClick = () => {
    var phoneNumber = "+919043616788"; // Replace with your WhatsApp number
    var customMessage = encodeURIComponent(
      "Hi One Hub, I would like to know more!"
    );

    var whatsappLink =
      "https://wa.me/" + phoneNumber + "?text=" + customMessage;

    window.open(whatsappLink, "_blank");
  };
  return (
    <div
      onMouseOver={() => dispatch(modelButton(true))}
      onMouseLeave={() => dispatch(modelButton(false))}
      onClick={whatsappClick}
      className=" fixed z-40 bottom-8 right-8 cursor-pointer"
    >
      <Image
        src="/whatsapp-whitebg.svg"
        height={3000}
        width={3000}
        alt="fr"
        className=" w-14 h-14"
      ></Image>
    </div>
  );
};

export default Chat;
