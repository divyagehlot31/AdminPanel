import React from "react";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./components/NotFound";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
// import { fetchApi } from "./Data/api";

const RootLayout = () => {
  const data = {
    username: "parent",
    key:"2"
  };
  
  return (
     <>
    <NavBar />
    <Outlet context={data} />
  </>
  )
 
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,

    children: [
      { path: "/" , element: <Home /> },
      { path: "/:name" , element: <Home /> },

      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        // loader: fetchApi,
        loader: () => {
          // throw new Error("Error in loader");
          return { user: "user_name" };          
        },
        // errorElement: <ErrorPage/>,

      },
   
    
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
