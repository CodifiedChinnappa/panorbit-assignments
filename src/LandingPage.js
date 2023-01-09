import { useContext } from "react";
import { Link } from "react-router-dom";

//import context providers
import { UsersContext } from "./provider/usersProvider";
import { ActiveUserContext } from "./provider/activeUserProvider";

const LandingPage = () => {
  //users data from context
  const [users, setUsers] = useContext(UsersContext);
  //selected user details
  const [user, setUser] = useContext(ActiveUserContext);
  return (
    <div className="landing-page  flex items-center justify-center h-[45rem] relative">
      <div className="z-50 w-[30.5rem] flex-col    shadow-md -mt-4 pb-5 rounded-b-[20px]">
        <div className="py-8 bg-gray-100 rounded-t-[20px] ">
          <h1 className="text-center text-stone-600 font-semibold text-[1.16rem]">
            Select an account
          </h1>
        </div>
        {/* //available users list */}
        <div className=" bg-white h-[22rem] overflow-y-scroll rounded-b-[20px] px-8 pt-1">
          {users.map((user, i) => (
            <Link
              to={`/profile-details/${user.name.replace(/\s/g, "-")}`}
              onClick={() => setUser(user)}
              state={{ user: user }}
              key={i}
            >
              <div className="flex flex-row w-full space-x-3  py-2 px-1 ">
                <img
                  className="rounded-[20px]"
                  src={user.profilepicture}
                  width="25"
                  height="25"
                />
                <p className="flex-1 text-stone-600 ">{user.name}</p>
              </div>
              <hr className="h-0 bg-stone-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
