import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../provider/activeUserProvider";

const Sidebar = ({ type }) => {
  const [user, setUser] = useContext(ActiveUserContext);
  //state to change invoice type
  const [option, setOption] = useState(type);

  const navigate = useNavigate();

  //function to invoice type
  const changeInvoiceType = (option) => {
    if (option === "profile") {
      setOption("profile");
    } else if (option === "posts") {
      setOption("posts");
    } else if (option === "gallery") {
      setOption("gallery");
    } else if (option === "toDo") {
      setOption("toDo");
    }
  };

  useEffect(() => {
    if (option === "profile") {
      navigate(`/profile-details/${user.name.replace(/\s/g, "-")}`);
    } else if (option === "posts") {
      navigate("/posts-details");
    } else if (option === "gallery") {
      navigate("/gallery");
    } else if (option === "toDo") {
      navigate("/toDo");
    }
  }, [option, navigate]);

  return (
    <div className="sidebar flex flex-col h-screen relative divide-y  justify-center  rounded-[22px] px-[2.4rem] pt-[2rem]">
      <div className="flex flex-col  items-start cursor-pointer ">
        <a
          className={
            "text-lg text-left  capitalize  py-2  rounded block leading-loose duration-150 " +
            (option === "profile"
              ? " text-white font-medium"
              : " text-neutral-400  font-normal")
          }
          onClick={(e) => {
            changeInvoiceType("profile");
          }}
        >
          Profile
        </a>
        {option === "profile" ? (
          <span className="sidebar-indicator -right-6 text-neutral-400">
            &#x3e;
          </span>
        ) : null}
      </div>
      <div className="flex flex-row  items-start cursor-pointer">
        <a
          className={
            "text-lg text-left  capitalize  py-2 rounded block leading-loose duration-150 " +
            (option === "posts"
              ? " text-white font-medium"
              : " text-neutral-400  font-normal")
          }
          onClick={(e) => {
            changeInvoiceType("posts");
          }}
        >
          Posts
        </a>
        {option === "posts" ? (
          <span className="sidebar-indicator -right-6 text-neutral-400 ">
            &#x3e;
          </span>
        ) : null}
      </div>
      <div className="flex flex-row  items-start cursor-pointer">
        <a
          className={
            "text-lg text-left  capitalize  py-2 rounded block leading-loose duration-150 " +
            (option === "gallery"
              ? " text-white font-medium"
              : " text-neutral-400  font-normal")
          }
          onClick={(e) => {
            changeInvoiceType("gallery");
          }}
        >
          Gallery
        </a>
        {option === "gallery" ? (
          <span className="sidebar-indicator -right-6 text-neutral-400">
            &#x3e;
          </span>
        ) : null}
      </div>
      <div className="flex flex-row  items-start cursor-pointer">
        <a
          className={
            "text-lg  capitalize  py-2  block leading-loose duration-150 " +
            (option === "toDo"
              ? " text-white font-medium"
              : " text-neutral-400  font-normal")
          }
          onClick={(e) => {
            changeInvoiceType("toDo");
          }}
        >
          ToDo
        </a>
        {option === "toDo" ? (
          <span className="sidebar-indicator -right-6 text-neutral-400">
            &#x3e;
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
