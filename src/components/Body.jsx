import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};

export default Body;
