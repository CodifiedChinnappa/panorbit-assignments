import { createContext, useEffect, useState } from "react";

export const ActiveUserContext = createContext();

export const ActiveUserProvider = (props) => {
  const initialState = {
    name: "",
    username: "",
    email: "",
    profilepicture: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  const [user, setUser] = useState(initialState);

  return (
    <ActiveUserContext.Provider value={[user, setUser]}>
      {props.children}
    </ActiveUserContext.Provider>
  );
};
