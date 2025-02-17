import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../home/Home";
import ContactUs from './../page/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element:<ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
