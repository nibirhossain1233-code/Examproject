import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Rootlayout from './components/ui/Rootlayout';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
]);

  return <RouterProvider router={router}/>;
}

export default App