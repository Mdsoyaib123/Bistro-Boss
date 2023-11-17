/* eslint-disable react/prop-types */
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };


    return (
        <div >    
            <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                items.map((item,index)=> <FoodCard key={index} item={item}> </FoodCard>)
            }
            </div>
        </SwiperSlide>
        
      </Swiper>         
        </div> 
    );
};

export default OrderTab;
