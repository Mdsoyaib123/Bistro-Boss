import { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

import GoogleLogin from '../../Component/GoogleLogin/GoogleLogin';

const Login = () => {
 
    const [disable,setDisable ] = useState(true)
    const {loginUser} = useContext(AuthContext)

    const Navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    console.log('pathName',location.state);
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value ;
        const password = form.password.value ;
        console.log(email,password);
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
              title: "You logged in successfully",
              icon: "success"
            });
            Navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleValidateCaptcha = (e)=>{
        const user_captcha_value = e.target.value  
        if(validateCaptcha(user_captcha_value)== true){
            // alert('Captcha Matched');
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content w-full flex gap-16 px-16 md:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <img src={loginImg} alt=""/>
    </div>
    <div className="card  w-1/2   shadow-2xl bg-base-100">
        <h1 className='text-center text-4xl font-bold'>Login Now </h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text"  name="captcha" placeholder="type here " className="input input-bordered " required />
           
        </div>

        <div className="form-control mt-6">
          <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
          <br></br>
         <GoogleLogin></GoogleLogin>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;