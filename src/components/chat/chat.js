import React, { useContext, useState } from "react";
import {
  BsChatRight,
  BsChevronUp,
  BsChevronDown,
  BsCircleFill,
} from "react-icons/bs";
//import users context
import { UsersContext } from "../../provider/usersProvider";
//import chatting component
import ChattingWidget from "./ChattingWidget";

const Chat = () => {
  const [users, setusers] = useContext(UsersContext);
  const [open, setOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [chatUser, setChatUser] = useState([]);

  return (
    <div className="z-40">
      <div className="max-fit-w min-w-[12rem]  bg-blue-600 px-3 py-2 rounded-t-lg text-white">
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-row justify-between items-center cursor-pointer"
        >
          <div className="flex flex-row items-center space-x-3">
            <BsChatRight />
            <div>Chats</div>
          </div>
          <div>{open ? <BsChevronDown /> : <BsChevronUp />}</div>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } bg-white h-80 overflow-y-scroll  border-r-2 border-l-2 border-blue-400`}
      >
        {users.map((user, i) => (
          <div
            className="flex flex-row  py-1 px-3 justify-between items-center  cursor-pointer"
            onClick={() => {
              setOpenChat(!openChat);
              setChatUser(user);
            }}
            key={i}
          >
            <div className="flex flex-row items-center space-x-2">
              <img
                className="rounded-[20px]"
                src={user.profilepicture}
                width="25"
                height="25"
              />
              <p className="text-xs ">{user.name}</p>
            </div>
            <BsCircleFill
              className={`text-[0.5rem] ${
                Math.random() > 0.5 ? "text-green-600" : "text-slate-300"
              }`}
            />
          </div>
        ))}
      </div>
      {openChat ? (
        <div className="fixed bottom-0 right-64  ">
          <ChattingWidget
            open={open}
            setOpen={setOpen}
            openChat={openChat}
            setOpenChat={setOpenChat}
            chatUser={chatUser}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Chat;
