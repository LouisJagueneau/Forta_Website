import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useRef } from 'react';
import 'swiper/css'
import 'swiper/css/pagination'
import SheetsImage from '../assets/SheetsImage.png'
import 'swiper/css/navigation'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


function Slider({ image, title, description, info = [] }) {

    return (
        <div className="bg-black/3 border border-gray-200 rounded-lg shadow-sm p-6 w-80 border-b-3 border-b-[#ec1c24] hover:scale-[102%] transition-all duration-300">

            <div className='flex flex-col'>
                <div className='mb-4 shadow-sm'>
                    <img src={image} alt="image" className='object-cover' />
                </div>
                <div className='mb-2'>
                    <h3 className='font-poppins font-semibold text-[1.4rem]'>{title}</h3>
                </div>
                <div className='mb-2' >
                    <p className='font-poppins text-black/75 text-[0.9rem]'>{description}</p>
                </div>
                <ul className="text-sm text-black/75 mt-3 list-disc list-inside font-poppins mb-4">
                    {info.map((element, index) => {
                        return(
                            <li key={index}>{element}</li>
                        )
                    })}
                    
                </ul>
            </div>



        </div>
    )
}

export default Slider
