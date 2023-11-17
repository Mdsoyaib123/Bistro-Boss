import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Page/shared/Footer/Footer";
import Navbar from "../Page/shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const noNavbarAndFooter = location.pathname.includes('login')
    return (
        <div>
           {noNavbarAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarAndFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;