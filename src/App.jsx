import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Layout from "./Component/Layout/Layout";
import Protfolio from "./Component/Protfolio/Protfolio"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";

let hazem = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Protfolio", element: <Protfolio /> },
      {index :true , element:<Home/>}
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={hazem}></RouterProvider>

    </>
  );
}

export default App;
