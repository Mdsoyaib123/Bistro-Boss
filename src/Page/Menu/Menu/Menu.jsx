import { Helmet } from "react-helmet";
import Cover from "../../shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import desereImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const [menu ] = useMenu()
    const dessert = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro || menu</title>
            </Helmet>
           
            <Cover img={img}  title={'our menu'}></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
           
            {/* desere menu */}
            <MenuCategory items={dessert} title={'dessert'} coverImg={desereImg}></MenuCategory>
            {/* pizza menu */}
            <MenuCategory items={pizza} title={'pizza'} coverImg={pizzaImg}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} title={'salad'} coverImg={saladImg}></MenuCategory>
            {/* soup menu  */}
            <MenuCategory items={soup} title={'soup'} coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;