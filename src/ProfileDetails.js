import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";

//context provider
import { ActiveUserContext } from "./provider/activeUserProvider";

const ProfileDetails = () => {
  const [user, setUser] = useContext(ActiveUserContext);
  const location = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  return (
    <div className="flex flex-row divide-x">
      <div className="w-[35.5%] pt-4 pr-[2.9rem]">
        <div className="flex flex-col pb-2 -ml-6">
          <div className="flex justify-center pb-1">
            <img
              className="rounded-[100px] "
              src={user?.profilepicture}
              alt="test"
              width="190"
              height="180"
            />
          </div>
          <div className="text-center font-semibold text-neutral-600 text-xl capitalize">
            {user?.name}
          </div>
        </div>
        <div className="space-y-2 pb-3">
          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 text-lg ">
              <span>Username</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" capitalize text-neutral-600 text-xl font-semibold ">
              <span>{user?.name}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box  font-normal text-neutral-400 text-lg ">
              <span>e-mail</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" text-neutral-600 text-xl font-semibold truncate">
              <span>{user?.email}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 text-lg ">
              <span>Phone</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" capitalize text-neutral-600 text-xl font-semibold ">
              <span>{user?.phone}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 text-lg ">
              <span>Website</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" text-neutral-600 text-xl font-semibold ">
              <span>{user?.website}</span>
            </div>
          </div>
        </div>

        <hr class="h-0.5 bg-stone-300" />

        <div>
          <div className="capitalize font-medium text-neutral-400 text-center text-lg py-2 -ml-[3rem]">
            Company
          </div>
          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 text-lg ">
              <span>Name</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className="capitalize text-neutral-600 text-xl font-semibold ">
              <span>{user.company.name}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 text-lg ">
              <span>CatchPhrase</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" capitalize text-neutral-600 text-xl font-semibold ">
              <span>{user?.company.catchPhrase}</span>
            </div>
          </div>

          <div className="flex space-x-3 -ml-4">
            <div className="box capitalize font-normal text-neutral-400 text-lg ">
              <span>Bs</span>
            </div>
            <div className="box">
              <span className=" text-neutral-400 ">:</span>
            </div>
            <div className=" capitalize text-neutral-600 text-xl font-semibold ">
              <span>{user?.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col   pl-[3rem] space-y-2">
        <div className="capitalize font-normal text-neutral-400 text-left text-xl py-2">
          Address:
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box capitalize font-normal text-neutral-400 text-lg ">
            <span>Street</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600 text-xl font-semibold ">
            <span>{user?.address.street}</span>
          </div>
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box capitalize font-normal text-neutral-400 text-lg ">
            <span>Suite</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600 text-xl font-semibold ">
            <span>{user?.address.suite}</span>
          </div>
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box capitalize font-normal text-neutral-400 text-lg ">
            <span>City</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600 text-xl font-semibold ">
            <span>{user?.address.city}</span>
          </div>
        </div>
        <div className="flex space-x-3 -ml-1">
          <div className="box  font-normal text-neutral-400 text-lg ">
            <span>Zipcode</span>
          </div>
          <div className="box">
            <span className=" text-neutral-400 ">:</span>
          </div>
          <div className=" capitalize text-neutral-600 text-xl font-semibold ">
            <span>{user?.address.zipcode}</span>
          </div>
        </div>

        <div className=" w-[33vw] h-[48vh] pt-2  ml-5">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={location}
            defaultZoom={10}
          >
            <div className="text-lg">&#128204;</div>
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
