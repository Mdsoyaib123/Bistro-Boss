import { useContext } from "react";
import registerImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../Component/GoogleLogin/GoogleLogin";
const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const Navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        updateUserProfile(data.name, data.photoUrl).then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                title: "Register successful",
                icon: "success",
              });
              Navigate('/')
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex gap-16 px-16 md:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <img src={registerImg} alt="" />
        </div>
        <div className="card  w-1/2   shadow-2xl bg-base-100">
          <h1 className="text-center text-4xl font-bold">Register Now </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                {...register("photoUrl", { required: true })}
                placeholder="photo URL"
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-500">PhotoUrl is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 ">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 ">password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 ">
                  password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 ">
                  password must be have one uppercase and one lowercase and one
                  spacial character and one number{" "}
                </p>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
            <GoogleLogin></GoogleLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
