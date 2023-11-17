import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials= () => {
    const [reviews,setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
        })
    },[])
    return (
        <section className="my-20">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}
            ></SectionTitle>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                   
                    {
                        reviews.map(review=> <SwiperSlide key={review._id}>
                         <div className="flex flex-col items-center text-center px-10">
                         <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                            <p>{review.details}</p>
                            <h2 className="text-2xl text-orange-400">{review.name}</h2>
                         </div>
                            
                            </SwiperSlide>)
                    }
            </Swiper>
        </section>
    );
};

export default Testimonials;
