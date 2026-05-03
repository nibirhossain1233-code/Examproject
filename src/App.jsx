import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Rootlayout from "./components/layout/Rootlayout";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Rootlayout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "*", Component: NotFound },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
