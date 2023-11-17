
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category === 'popular')
    
    return (
        <section className="mb-10 px-5">
            <SectionTitle
             subHeading={'---Check it out---'}
             heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {
                    popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
                
            </div>
            <div className="flex justify-center ">
            <button className="btn my-4 btn-outline border-0 border-b-4 ">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;