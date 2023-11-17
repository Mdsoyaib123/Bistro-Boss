import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDelete } from "react-icons/md";

import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart,refetch] = useCart();
  const axiosSecure = useAxiosSecure()
  const toTotalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                console.log(res.data);
                if(res.data.deletedCount){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    
                }
            })
        }
      });
  }
  return (
    <div>
      <div className="flex flex-wrap justify-between mb-4 ">
        <h1 className="text-4xl">Total Order: {cart.length}</h1>
        <h1 className="text-4xl">Total Price :$ {toTotalPrice}</h1>
        <button className="btn px-7 bg-orange-500 text-white">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
            <th>#</th>
              <th>
                Item Image
              </th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                cart.map((item,index)=> <tr key={item._id}>
                    <th>
                        {index + 1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-md w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>$ {item.price}</td>
                    <th>
                      <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost text-red-600"><MdDelete className="text-2xl"></MdDelete></button>
                    </th>
                  </tr>)
            }
           
         
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
