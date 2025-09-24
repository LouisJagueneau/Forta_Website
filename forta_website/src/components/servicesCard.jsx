import { Link } from "react-router-dom";

//icons
import { FaArrowRight } from "react-icons/fa6";

function ServicesCard({title, description, list = [], link, buttonText, info, Icon }) {
  return (
    <div className="bg-black/3 border border-gray-200 rounded-lg shadow-sm p-8 mb-10">
      <div className="flex flex-col gap-4 sm:gap-10">
        <Icon className="text-2xl text-[#f7f7f7] bg-[#ec1c24] w-10 h-10 p-2 rounded-md shadow-sm" />
        <div className="">
          <h3 className="font-semibold text-[1.5rem] mb-6">{title}</h3>
          <p className="text-[#777777] text-sm mb-6 text-justify leading-6">
            {description}
          </p>

          <div className="flex gap-4 mb-12 flex-col">
            <span className="underline">{info}</span>
            <div className="font-poppins text-[#777777] flex flex-wrap gap-3">
              {list.map((element, index) => {
                return (
                  <span key={index} className="px-2 border-1 border-[#777777] rounded-sm">{element}</span>
                )
              })}
            </div>
          </div>
          <div className="flex gap-4">
            <button className=" text-white bg-[#ec1c24]  px-3 py-1 rounded-sm hover:bg-[#c71a20] transition-colors duration-200">
              <Link to={link} className='flex items-center gap-2'><FaArrowRight /> {buttonText}</Link>
            </button>
            {/* <button className=" border-1 border-[#ec1c24]  text-[#ec1c24]  px-3 py-1 rounded-sm hover:bg-white transition-colors duration-200">
              <Link to={'/contactus'} className='flex items-center gap-2'>Contact Us</Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard