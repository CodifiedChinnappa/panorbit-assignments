import axios from "axios";
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import layout
import MainLayout from "./layout/mainLayout";
//import pages
import LandingPage from "./LandingPage";
import ProfileDetails from "./ProfileDetails";
import PostDetails from "./PostDetails";
import Gallery from "./gallery";
import ToDo from "./todo";

//import context
import { UsersContext } from "./provider/usersProvider";

const App = () => {
  const [users, setUsers] = useContext(UsersContext);

  //storing users details on page load
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => setUsers(res.data.users))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/profile-details/:user"
          element={
            <MainLayout type={"profile"}>
              <ProfileDetails />
            </MainLayout>
          }
        />
        <Route
          path="/posts-details"
          element={
            <MainLayout type={"posts"}>
              <PostDetails />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout type={"gallery"}>
              <Gallery />
            </MainLayout>
          }
        />
        <Route
          path="/todo"
          element={
            <MainLayout type={"toDo"}>
              <ToDo />
            </MainLayout>
          }
        />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
