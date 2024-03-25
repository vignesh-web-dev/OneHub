import React from "react";

const Form = () => {
  return (
    <form className=" w-full">
      <label
        htmlFor="nameInput"
        className=" text-white text-xl font-normal font-poppins"
      >
        Name :
      </label>
      <input
        id="nameInput"
        name="nameInput"
        type="text"
        className="w-full h-[40px] rounded-lg bg-white p-5 font-lato font-normal text-xl mt-1 mb-4"
        placeholder="Enter your Name"
      ></input>
      <label
        htmlFor="phoneInput"
        className=" text-white text-xl font-normal font-poppins"
      >
        Phone :
      </label>
      <input
        id="phoneInput"
        name="phoneInput"
        type="phone"
        className="w-full h-[40px] rounded-lg bg-white p-5 font-lato font-normal text-xl mt-1 mb-4"
        placeholder="Enter your Phone Number"
      ></input>
      <label
        htmlFor="mailInput"
        className=" text-white text-xl font-normal font-poppins"
      >
        Email :
      </label>
      <input
        id="mailInput"
        name="mailInput"
        type="text"
        className="w-full h-[40px] rounded-lg bg-white p-5 font-lato font-normal text-xl mt-1 mb-4"
        placeholder="Enter your Email"
      ></input>
      <label
        htmlFor="messageInput"
        className=" text-white text-xl font-normal font-poppins"
      >
        Message :
      </label>
      <textarea
        id="messageInput"
        name="messageInput"
        type="text"
        className="w-full rounded-lg bg-white p-5 font-lato font-normal text-xl mt-1 mb-4"
        placeholder="Enter your Message"
      ></textarea>
      <button className=" bg-yellow cursor-pointer text-black px-5 py-2 rounded-lg text-lg font-poppins font-medium min-w-fit w-fit">
        Submit
      </button>
    </form>
  );
};

export default Form;
