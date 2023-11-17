import { NavLink, Outlet } from "react-router-dom";
import { IoCartOutline, IoHomeSharp } from "react-icons/io5";
import { FaCalendarAlt, FaClipboardList, FaMale, FaUsers, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import useCart from "../Hooks/useCart";
const DashBoard = () => {
  const [cart] = useCart();
  // Todo: get is admin value from database
  const isAdmin = true;
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu text-lg space-y-4">
          {isAdmin ? (
            <>
              <li className="text-white">
                <NavLink to="/dashboard/adminHome">
                  <IoHomeSharp></IoHomeSharp>Admin Home
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/manageItems">
                <IoMdMenu></IoMdMenu>Manage items({cart.length})
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/bookings">
                <FaClipboardList></FaClipboardList>Manage bookings{" "}
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/users">
                   <FaUsers></FaUsers> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-white">
                <NavLink to="/dashboard/userHome">
                  <IoHomeSharp></IoHomeSharp>User Home
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt>Reservation
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/cart">
                  <IoCartOutline></IoCartOutline>My Cart({cart.length})
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/review">
                  <MdReviews></MdReviews>Add Review{" "}
                </NavLink>
              </li>

              <li className="text-white">
                <NavLink to="/dashboard/bookings">
                  <FaClipboardList></FaClipboardList>My Booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider text-white"></div>

          <li className="text-white">
            <NavLink to="/">
              <IoHomeSharp></IoHomeSharp> Home
            </NavLink>
          </li>

          <li className="text-white">
            <NavLink to="/order/salad">
              <IoMdMenu></IoMdMenu> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
