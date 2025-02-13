import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Properties from "./pages/Properties";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Top from "./components/Top";
import "./App.css";
import "./Mobile.css";
import Agent from "./pages/Agent";

const Layout = () => {
  return (
    <>
      <Top />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/agents",
        element: <Agent />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
