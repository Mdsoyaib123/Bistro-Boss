import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import FeautedImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed my-10 py-2 text-white">
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></SectionTitle>
            <div className="md:flex bg-slate-500 opacity-80 items-center justify-center py-20 px-36 gap-10">
                <div>
                <img src={FeautedImg} alt="" />
                </div>
                <div className="space-y-4">
                    <h3>April 22 , 2024</h3>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, aperiam doloremque nesciunt facilis vitae corrupti nisi enim distinctio quia aliquid vel ea ratione incidunt debitis inventore modi quis cupiditate nostrum laboriosam velit nihil. Eius vel assumenda voluptatibus, exercitationem dolore molestias.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;