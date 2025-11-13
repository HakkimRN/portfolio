import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Projects from "./components/Projects";

function App() {
    const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/projects",
      element: <Projects />,
    }
  ]);
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
