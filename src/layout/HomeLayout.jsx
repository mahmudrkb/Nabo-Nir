import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
