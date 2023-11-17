import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './../Provider/AuthProvider/AuthProvider';

 const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'

})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    // request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        console.log('req stoped by interceptors ',token);
        return config;
    },function(error){
        return Promise.reject(error)
    })
    // interceptor for 401 and 403 
    axiosSecure.interceptors.response.use(function(response){
        
        return response
    },async(error)=>{
        const status = error.response.status
        if(status===401 || status===403){
           await logOut()
            navigate('/login')
        }
        console.log('status error in the interceptor ',status);
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;