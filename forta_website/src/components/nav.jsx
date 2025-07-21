import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"
import LanguageSelector from "./languageSelector"

function Nav() {
    return (
        <div className="bg-[#0f0f0f]">
            <div className={`container mx-auto px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50  flex items-center justify-between min-h-[70px]`}>
                <Link to='/' className="text-white sm:text-red-500 md:text-amber-300 lg:text-purple-400 xl:text-green-400 2xl:text-blue-400 text-[2.0rem] font-bold font-Stock_No_Bills ">Forta ltd.</Link>
                <div className='flex flex-row'>
                    <ul className='flex flex-row items-center gap-12 text-[1.0rem] font-light'>
                        <li><Link to='/' className="text-white cursor-pointer relative font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Home</Link></li>
                        <li className="text-white cursor-pointer relative group font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 flex items-center gap-1">Services <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                        <div className="absolute top-full mt-2 z-50 bg-[#0f0f0f] border-[#ffffff34] border-l-[1px] w-max left-0 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                                <ul className="flex flex-col text-sm">
                                    <li><Link to='/plasticEngineering' className="px-4 py-2 w-full block hover:bg-[#ffffff1d]">Plastic Engineering</Link></li>
                                    <li><Link to='/cncParts' className="px-4 py-2 w-full block hover:bg-[#ffffff1d]">CNC parts</Link></li>
                                </ul>
                        </div>
                        </li>
                        <li><Link to='/about'className="text-white cursor-pointer relative font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">About</Link></li>
                        <li><LanguageSelector/></li>
                    </ul>
                    <button className='font-poppins text-white ml-12  bg-[#ec1c24] hover:bg-[#ec1c23d4] hover:rounded-sm transition duration-700  px-4 py-1 rounded-full cursor-pointer'>Contact us</button>
                </div>
            </div>
        </div>

    )
}

export default Nav