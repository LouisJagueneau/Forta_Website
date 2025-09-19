import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"
import LanguageSelector from "./languageSelector"
import { useTranslation } from 'react-i18next';


function Nav() {
    const { t } = useTranslation();

    return (
        <div className="bg-[#0f0f0f]">
            <div className={`container mx-auto px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50  flex items-center justify-between min-h-[70px]`}>
                <Link to='/' className="text-white text-[2.0rem] font-bold font-Stock_No_Bills ">Forta</Link>
                <div className='flex flex-row'>
                    <ul className='flex flex-row items-center gap-12 text-[0.90rem] font-light '>
                        <li><Link to='/' className="text-white cursor-pointer relative font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">{t('nav_home')}</Link></li>

                        {/*  */}
                        <li className="xl:hidden  text-white cursor-pointer relative group font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 flex items-center gap-1">{t('nav_services')} <IoIosArrowDown className="group-hover:rotate-180 transition-transform duration-300" />
                            <div className="absolute top-full mt-2 z-50 bg-[#0f0f0f] border-[#ffffff34] border-l-[1px] w-max left-0 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                                <ul className="flex flex-col text-sm">
                                    <li><Link to='/plasticEngineering' className="px-4 py-2 w-full block hover:bg-[#ffffff1d]">{t('nav_plastic_engineering')}</Link></li>
                                    <li><Link to='/cncParts' className="px-4 py-2 w-full block hover:bg-[#ffffff1d]">{t('nav_cnc_parts')}</Link></li>
                                </ul>
                            </div>

                        </li>

                        <li className="hidden xl:flex text-white cursor-pointer relative font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"><Link to='/plasticEngineering' >{t('nav_plastic_engineering')}</Link></li>
                        <li className="hidden xl:flex text-white cursor-pointer relative font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"><Link to='/cncParts' >{t('nav_cnc_parts')}</Link></li>


                        <li><Link to='/about' className="text-white cursor-pointer relative font-poppins after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#ec1c24] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">{t('nav_about')}</Link></li>
                        <li><LanguageSelector /></li>
                    </ul>
                    <Link to='/contactus' className='font-poppins text-white ml-12  bg-[#ec1c24] hover:bg-[#ec1c23d4] transition duration-300  px-4 py-1 rounded-full cursor-pointer text-[0.90rem]'>{t('nav_contact_us')}</Link>
                </div>
            </div>
        </div>

    )
}

export default Nav