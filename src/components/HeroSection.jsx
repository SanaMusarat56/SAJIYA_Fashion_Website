import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {useNavigate} from "react-router-dom";
import hero1 from "../assets/images/MegaMenu/Heroimgs/heroimg1.webp"
import hero2 from "../assets/images/MegaMenu/Heroimgs/heroimg2.webp"
import hero3 from "../assets/images/MegaMenu/Heroimgs/heroimg3.webp"
import hero4 from "../assets/images/MegaMenu/Heroimgs/heroimg4.webp"

function HeroSection (){
    const navigate = useNavigate();

    const slides = [
        {
            image : hero1,
            link : "/",
        },
        {
            image : hero2,
            link : "/",
        },
        {
            image : hero3,
            link : "/",
        },
        {
            image : hero4,
            link: "/",
        },
    ];
    return(
        <section className ="w-full">
        <Swiper
        modules = {[ Autoplay ]}
        navigation
        loop={true}
        autoplay={{
            delay: 4000,
        disableOnInteraction: false, 
        }}
        className="w-full h-[90vh]" 
        >
        {slides.map((slide,index)=>(
            <SwiperSlide key = {index}>
                <img
                src={slide.image}
                alt={`Hero ${index + 1}`}
                onClick={()=> navigate(slide.link)}
                className="w-full h-full object-cover cursor-pointer"
             />
            </SwiperSlide>
        ))}
        </Swiper>
        </section>
    );
}

export default HeroSection;