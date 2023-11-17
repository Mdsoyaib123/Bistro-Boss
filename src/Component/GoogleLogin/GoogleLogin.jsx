import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useContext(AuthContext);
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
         
            Swal.fire({
              title: "You logged in successfully",
              icon: "success",
            });
            Navigate(from, { replace: true });
          
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-start ">
      <button onClick={handleGoogle} className="btn bg-base-30000  text-center">
        <FcGoogle className="text-2xl"></FcGoogle>SignIn with Google{" "}
      </button>
    </div>
  );
};

export default GoogleLogin;
