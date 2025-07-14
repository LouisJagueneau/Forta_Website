import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useRef } from 'react';
import 'swiper/css'
import 'swiper/css/pagination'
import SheetsImage from '../assets/SheetsImage.png'
import 'swiper/css/navigation'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


function Slider({ slides }) {

    const swiperRef = useRef(null);

    return (
        <div className="w-full flex flex-col justify-center items-center">


            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                // loop={true}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = '.custom-prev';
                    swiper.params.navigation.nextEl = '.custom-next';
                    swiper.params.pagination.el = '.custom-pagination'
                }}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true
                }}
                autoplay={{ delay: 3000 }}
                className="max-w-[250px] md:max-w-screen-xl w-full  " // largeur max + responsive
                breakpoints={{
                    768: { slidesPerView: 2 },   // tablette
                    1024: { slidesPerView: 3 },  // desktop
                    1280: { slidesPerView: 4 },
                    1536: { slidesPerView: 4 },
                }}
            >
                {slides.map((slide, index) =>
                    <SwiperSlide className='' key={index}>
                        <div className='rounded-sm shadow-md transition-transform duration-300'>
                            <div className="flex flex-col p-5 border-[1px] border-[#ADADAD] border-b-[#ec1c24] border-b-3 rounded-sm bg-white h-[400px] hover:bg-[#f6f6f7]">
                                <img src={slide.image} alt="Sheets" className="w-full max-w-[300px] mb-6 shadow-md" />
                                <h3 className="font-poppins font-semibold text-start text-[1.2rem] mb-3">{slide.item}</h3>
                                <p className="font-poppins text-[#717171] text-sm max-w-md text-justify text-[0.9rem] leading-8">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>


            <div className='flex justify-center gap-10 mt-8 xl:mt-12 '>
                <div className='custom-pagination flex gap-2'></div>
            </div>


        </div>
    )
}

export default Slider
