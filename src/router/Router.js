import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/regester/Register";
import ModifyTest from "../pages/modifyTest/ModifyTest";
import HomeOutlet from "../pages/homeOutlet/HomeOutlet";
import Home from "../pages/home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomeOutlet />,
        children: [
          { path: "", element: <Home /> },
          { path: "/exam", element: <ModifyTest /> },
        ],
      },
      { path: "register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
