import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from '../components/slider'
import CNC5AxesImage from '../assets/CNC5AxesImage.png'
import CNCMillingImage from '../assets/CNCMillingImage.png'
import CNCPartsImage from '../assets/CNCPartsImage.png'
import CNCTurningImage from '../assets/CNCTurningImage.png'
import FeedScrew from '../assets/FeedScrew.png'
import Flanges from '../assets/Flanges.png'
import GuidesImages from '../assets/GuidesImages.png'
import RingsImage from '../assets/RingsImage.png'
import SlidersImage from '../assets/SlidersImage.png'
import TimingScrew from '../assets/TimingScrew.png'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';


function CncParts() {
    const { t } = useTranslation();

    const slides = [
        {
            item: t('cnc_turning_item'),
            image: CNCTurningImage,
            description: t('cnc_turning_description')
        },
        {
            item: t('cnc_milling_item'),
            image: CNCMillingImage,
            description: t('cnc_milling_description')
        },
        {
            item: t('cnc_five_axis_machining_item'),
            image: CNC5AxesImage,
            description: t('cnc_five_axis_machining_description')
        },
        {
            item: t('cnc_laser_cutting_item'),
            image: CNC5AxesImage, // Reusing image, consider a specific one if available
            description: t('cnc_laser_cutting_description')
        },
        {
            item: t('cnc_welding_item'),
            image: CNC5AxesImage, // Reusing image, consider a specific one if available
            description: t('cnc_welding_description')
        },
        {
            item: t('cnc_bending_item'),
            image: CNC5AxesImage, // Reusing image, consider a specific one if available
            description: t('cnc_bending_description')
        },
    ]

    const parts = [ // Renamed from 'plastics' to 'parts' for clarity
        {
            name: t('cnc_feed_screw_name'),
            img: <img src={FeedScrew} alt="FeedScrew" />
        },
        {
            name: t('cnc_flanges_name'),
            img: <img src={Flanges} alt="Flanges" />
        },
        {
            name: t('cnc_guides_name'),
            img: <img src={GuidesImages} alt="GuidesImages" />
        },
        {
            name: t('cnc_rings_name'),
            img: <img src={RingsImage} alt="RingsImage" />
        },
        {
            name: t('cnc_sliders_name'),
            img: <img src={SlidersImage} alt="SlidersImage" />
        },
        {
            name: t('cnc_timing_screw_name'),
            img: <img src={TimingScrew} alt="TimingScrew" />
        },
    ]

    return (
        <>
            {/* Title Section */}
            <div className='bg-[#0f0f0f] min-h-screen flex items-center pt-[80px] md:pt-0'>
                <section className="container mx-auto px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50">
                    <div className="text-white flex flex-col-reverse items-center gap-y-12 lg:flex-row lg:gap-x-24 2xl:gap-x-34 lg:items-center">
                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start lg:flex-2"
                        >
                            <div>
                                <h1 className="font-Stock_No_Bills text-[1.6rem] sm:text-[2.4rem] font-semibold text-start relative inline-block mb-10 leading-12 lg:text-[2.5rem] 2xl:text-[3.2rem] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d6d6d6]">
                                    {t('cnc_machining_title')}
                                    <span className="absolute left-0 bottom-[-15px] h-[2px] bg-[#ec1c24] w-full rounded-full"></span>
                                </h1>
                                <p className="font-poppins mb-10 text-[0.90rem] sm:text-[1.0rem] xl:text-[1.1rem] xl:leading-8 text-justify">
                                    {t('cnc_machining_paragraph')}
                                </p>
                            </div>
                            <div>
                                <button className="flex items-center gap-3 bg-[#ec1c24] px-4 py-2 rounded-sm font-semibold cursor-pointer transition duration-300 hover:bg-[#b8141a]">
                                    <FaArrowRight /> {t('cnc_contact_us_button')}
                                </button>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-auto w-[200px] lg:flex-1 lg:w-full lg:flex lg:items-center"
                        >
                            <img className="w-full h-auto" src={CNCPartsImage} alt="CNC Parts Image" />
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Slider Section */}
            <div className="flex items-center justify-center">
                <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50 my-15">
                    <div className="bg-white flex flex-col items-center justify-center ">
                        {/* Section Title */}
                        <div
                            className="mb-15">
                            <h2 className="font-Stock_No_Bills text-[2.4rem] xl:text-[2.8rem] font-semibold relative inline-block">{t('cnc_what_we_offer_title')}<span className="bg-[#ec1c24] xl:h-[4px] h-[2px] left-0 bottom-[-10px] absolute w-full rounded-full"></span>
                            </h2>
                        </div>
                        {/* Slider */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-full">
                            <Slider slides={slides} />
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Types of Parts Section */}
            <div className="flex items-center justify-center bg-[#ec1c24] ">
                <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50 py-20 ">
                    <div className="bg-white p-8 lg:px-12 xl:px-20 xl:pb-16 xl:pt-12 rounded-sm flex items-center justify-center flex-col gap-8 xl:gap-12">
                        <div className="">
                            <h2 className="inline font-Stock_No_Bills text-[2.0rem] lg:text-[2.4rem] xl:text-[2.8rem] font-semibold">
                                {t('cnc_types_of_parts_title').split(' ').slice(0, 4).join(' ')}{" "}
                                <span className="relative inline-block">
                                    {t('cnc_types_of_parts_title').split(' ')[4]}
                                    <span className="absolute h-[2px] xl:h-[4px] bg-[#ec1c24] w-full left-0 bottom-[-6px]"></span>
                                </span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 gap-y-5 sm:gap-y-6 lg:gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 2xl:grid-cols-3">
                            {parts.map((part, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.8, 0.25, 1], }}
                                    key={part.name}
                                    className="bg-[#f6f6f7] rounded-xl shadow-sm p-4 xl:px-6 xl:py-4 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
                                >
                                    <div className="w-fit rounded-md">{part.img}</div>
                                    <h4 className="font-poppins text-[#1e1e1e] text-[1rem] tracking-wide">{part.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CncParts;