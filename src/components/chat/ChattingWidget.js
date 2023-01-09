import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";

const ChattingWidget = ({ chatUser, openChat, open, setOpen, setOpenChat }) => {
  return (
    <div>
      <div className=" w-52  bg-blue-600 px-3 py-2 rounded-t-lg text-white">
        <div
          onClick={() => {
            setOpenChat(!openChat);
            setOpen(!open);
          }}
          className="flex flex-row justify-between items-center cursor-pointer"
        >
          <div className="flex flex-row items-center space-x-2">
            <img
              className="rounded-[20px]"
              src={chatUser.profilepicture}
              width="20"
              height="20"
            />
            <p className="text-xs">{chatUser.name}</p>
          </div>
          <div className="flex flex-row">
            <BsChevronDown />
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <div className=" bg-white h-52 overflow-y-scroll  w-52 space-y-2 p-2  border-r-2 border-l-2 border-blue-400">
        <div className="chat-in flex">
          <div className=" bg-slate-100 w-fit p-2 rounded-r-lg rounded-bl-lg">
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
        <div className="chat-in flex">
          <div className=" bg-slate-100 w-fit p-2 rounded-r-lg rounded-bl-lg">
            <p className="text-xs">Lorem ipsum</p>
          </div>
        </div>
        <div className=" w-fit  mx-auto">
          <span class="text-xs text-gray-500 leading-none">9:16 PM</span>
        </div>
        <div className="chat-out flex">
          <div className="bg-blue-600 w-fit  text-white p-2 ml-auto rounded-l-lg rounded-br-lg">
            <p className="text-xs">Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="chat-out flex">
          <div className=" bg-blue-600 w-fit text-white p-2 ml-auto rounded-l-lg rounded-br-lg">
            <p className="text-xs">Lorem ipsum dolor </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-between items-center bg-white  w-52    border  border-gray-400">
        <input
          className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white "
          type="text"
          id="name"
        />
        <GoChevronRight className="text-blue-500 text-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default ChattingWidget;
