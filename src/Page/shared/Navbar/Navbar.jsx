import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const {user ,logOut} = useContext(AuthContext)
  const [cart] = useCart()
  const handleLogOut = ()=>{
    logOut()
    .then(
      Swal.fire({
        title:"You logOut successfully",
        icon: "success"
      })
    )
    .catch(err=>{
      console.log(err);
    })
  }
    const navOptions = <>
         <li><Link to={'/'}>Home</Link></li>
         <li><Link to={'/menu'}>Menu</Link></li>
         <li><Link to={'/order/salad'}>Order food</Link></li>
         <li>
            <Link to='/dashboard/cart'>
              <button className="btn">
                <FaCartShopping className="mr-2"></FaCartShopping>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
         </li>
          {
            user ? <button onClick={handleLogOut} className="btn btn-ghost">logOut</button> :
            <li><Link to={'/login'}>Login </Link></li>
          }
         <li><Link to={'/register'}>Register </Link></li>
    </>
    return (
        <>
          <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white  max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get Started </a>
  </div>
</div>  
        </>
    );
};

export default Navbar;