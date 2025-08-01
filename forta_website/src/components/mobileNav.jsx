import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'; // Import useTranslation

function MobileNav() {
    const { t } = useTranslation(); // Initialize useTranslation hook

    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    return (
        <div className="bg-[#0f0f0f]">
            <div className={`container mx-auto px-10 md:px-14 xl:px-30 2xl:px-50  flex items-center justify-between min-h-[50px]`}>
                <div>
                    <Link to='/' onClick={() => setIsOpen(false)} className="text-white text-[1.6rem] font-bold font-Stock_No_Bills ">Forta ltd.</Link>
                </div>
                <div className="">
                    <RxHamburgerMenu className="text-[#ec1c24] cursor-pointer text-[1.6rem]" onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>
            <div className={`fixed h-full top-0 right-0 z-21 bg-[#252525] w-2/5 max-w-[250px] pl-[1.0rem] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 `}>
                <div className="min-h-[50px] flex items-center mb-3">
                    <IoClose className='text-[#ec1c24] text-[1.6rem] hover:text-[#ec1c23d4] cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                </div>
                <div>
                    <ul className="font-poppins text-white text-[0.92rem] flex flex-col space-y-4 cursor-pointer ">
                        <li><Link to='/' onClick={() => setIsOpen(false)} className="hover:text-[#ec1c24] transition-colors duration-200">{t('mobile_nav_home')}</Link></li>
                        <li className="relative" >
                            <div onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center gap-1 hover:text-[#ec1c24] transition-colors duration-300">
                                <span>{t('mobile_nav_services')}</span>
                                <IoIosArrowDown className={`transform ${isServicesOpen ? 'rotate-180' : 'rotate-none'}`} />
                            </div>
                            <ul className={` transform ${isServicesOpen? 'flex opacity-100' : 'hidden opacity-0'} flex-col gap-3 ml-4 transition-all duration-300 text-[0.85rem] text-gray-300 mt-3`}>
                                <li><Link to='/plasticEngineering' onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors duration-300">{t('mobile_nav_plastic_engineering')}</Link></li>
                                <li><Link to='/cncParts' onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition-colors duration-300">{t('mobile_nav_cnc_parts')}</Link></li>
                            </ul>

                        </li>
                        <li><Link to='/about' onClick={() => setIsOpen(false)} className="hover:text-[#ec1c24] transition-colors duration-200">{t('mobile_nav_about')}</Link></li>
                        <li><Link to='/contactUs' onClick={() => setIsOpen(false)} className="hover:text-[#ec1c24] transition-colors duration-200">{t('mobile_nav_contact_us')}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default MobileNav;