/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({item }) => {
    const {name,price,recipe,image,_id} = item ;
    const {user} = useContext(AuthContext)
    const [,refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const Navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart=()=>{
        if(user && user.email){
            // send cart item to the database
            const cartItem = {
                menuId: _id ,
                email : user.email ,
                name,
                price,
                image
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data );
                if(res.data.insertedId){
                    Swal.fire({
                        title: "data added in database",
                        text: "You clicked the button!",
                        icon: "success"
                      });

                    refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged In ",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 Navigate('/login',{state:{from:location}})
                }
              });
        }
    }

    return (
        <div className="card relative w-96 bg-base-100 shadow-xl space-y-2">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute mt-0 right-0 px-4 py-2 mr-4 bg-black text-white rounded-md mx-auto ">${price}</p>
            <div className="card-body space-y-2">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button
                    onClick={handleAddToCart}
                 className="btn bg-orange-600 text-white">Add to Card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;