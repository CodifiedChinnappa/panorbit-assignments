import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

//import Contexts
import { ActiveUserContext } from "../provider/activeUserProvider";
import { UsersContext } from "../provider/usersProvider";

const Logout = () => {
  const [users, setUsers] = useContext(UsersContext);
  const [user, setUser] = useContext(ActiveUserContext);
  return (
    <div>
      <div className="w-72 h-fit bg-white pt-8  px-4 shadow-2xl rounded-[20px]  pb-9">
        <div className=" flex flex-col justify-center items-center  divide-y">
          <div className="flex flex-col justify-center items-center space-y-2 mb-2">
            <img
              className="rounded-[100px]"
              src={user.profilepicture}
              alt="test"
              width="80"
              height="80"
            />
            <div className="text-center text-neutral-600 text-lg capitalize">
              {user.name}
            </div>
            <div className="text-center text-neutral-400 text-sm capitalize">
              {user.email}
            </div>
          </div>
          {users.slice(0, 2).map((user, i) => (
            <div
              key={i}
              className="flex flex-row w-4/5 justify-center py-2  space-x-3 cursor-pointer"
              onClick={() => setUser(user)}
            >
              <img
                className="rounded-[20px]"
                src={user.profilepicture}
                width="30"
                height="30"
              />
              <p className=" text-neutral-600">{user.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center text-lg capitalize py-2">
          <NavLink className=" text-decoration-none " to="/">
            <p className="w-2/5 mx-auto bg-red-400 rounded-3xl px-3 py-1 cursor-pointer text-md text-white font-semibold">
              Sign Out
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Header = ({ type }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useContext(ActiveUserContext);

  return (
    <div className="flex items-center justify-between w-full mb-4 py-[0.7rem]">
      <p className="font-semibold text-xl text-gray-600 capitalize">{type}</p>
      <div
        className="flex flex-row  space-x-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img
          className="rounded-[20px]"
          src={user.profilepicture}
          width="28"
          height="28"
        />
        <p className="flex-1 text-lg text-gray-600">{user.name}</p>
      </div>
      {open ? (
        <div className="z-40 absolute top-14 right-0.5 ">
          <Logout />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
