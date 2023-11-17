/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({items ,title,coverImg}) => {
    
    return (
        <div className="my-10">
            {title && <Cover img={coverImg}  title={title}></Cover>}
             <div className="grid grid-cols-1 gap-10 md:grid-cols-2 my-20 px-10">
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link className="flex justify-center" to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;