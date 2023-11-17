/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {
    // console.log(item);
    const {name,price,recipe,image} = item ;
    // console.log(name,price,recipe,image);
    return (
        <div className="flex gap-4 ">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[80px]" src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}-------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500"> $ {price}</p>
        </div>
    );
};

export default MenuItem;