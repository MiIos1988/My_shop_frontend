import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoaderComponent from "./components/loaderComponent/LoaderComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";
import TopHeaderComponent from "./components/topHaderComponent/TopHeaderComponent";
import GoToDashboard from "./pages/admin/GoToDashboard";
import { saveUser } from "./redux/userSlicer";
import jwt_decode from 'jwt-decode';

axios.defaults.baseURL = "http://localhost:5050/api"
axios.interceptors.request.use((config) => {
  if (localStorage.hasOwnProperty("my_token")) {
    config.headers.Authorization = localStorage.getItem("my_token")
  }
  return config;
})
function App() {
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.userSlicer.active);

  useEffect(() => {
    if (localStorage.getItem("my_token")) {
      const token = localStorage.getItem("my_token");
      const decodedToken = jwt_decode(token);
      dispatch(saveUser(decodedToken));
    }
  }, []
  )

  return (
    <div className="container-fluid p-0">
      <LoaderComponent />
      <TopHeaderComponent />
      <NavbarComponent />
      {userStore ? <GoToDashboard /> : null}
      <Outlet />
    </div>
  );
}

export default App;
