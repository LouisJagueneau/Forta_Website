import { Link } from "react-router-dom";

//icons
import { FaArrowRight } from "react-icons/fa6";


function ServicesCard({img, title, description, list, link, buttonText}) {
    return(
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-7 sm:p-7 mb-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <img
                src={img}
                alt="Plastic Engineering"
                className="w-[120px] sm:w-[160px] rounded-full shadow-md"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-[1.2rem] mb-3">{title}</h3>
                <p className="text-[#777777] text-sm mb-3 text-justify">
                  {description}
                </p>
                <div className="flex items-start justify-center sm:justify-start gap-2 mb-3">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#ec1c24] mt-1"></span>
                  <p className="text-[#777777] text-sm">
                    {list}
                  </p>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <button className=" text-white bg-[#ec1c24] text-xs px-3 py-1 rounded-sm hover:bg-[#c71a20] transition-colors duration-200">
                    <Link to={link}  className='flex items-center gap-2'><FaArrowRight /> {buttonText}</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ServicesCard