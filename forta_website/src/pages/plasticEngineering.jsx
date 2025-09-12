import { FaArrowRight } from "react-icons/fa6";
import PlasticEngineeringImage from '../assets/platsicEngineeringImage.png'
import { Link } from "react-router-dom";
import Slider from '../components/slider'
import SheetsImage from '../assets/SheetsImage.png'
import RodsImage from '../assets/RodsImage.png'
import CutImage from '../assets/CutImage.png'
import { Droplet, FlaskRound, Shield, Thermometer, Settings, Recycle, Lightbulb, Wrench } from 'lucide-react'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';


function PlasticEngineering() {
    const { t } = useTranslation();

  

    const plastics = [
        {
            name: t('ppName'),
            description: t('ppDescription'),
            icon: <FlaskRound className=" w-5 h-5" />
        },
        {
            name: t('pehdName'),
            description: t('pehdDescription'),
            icon: <Droplet className=" w-5 h-5" />
        },
        {
            name: t('pe300_500_1000Name'),
            description: t('pe300_500_1000Description'),
            icon: <Recycle className=" w-5 h-5" />
        },
        {
            name: t('pa6Name'),
            description: t('pa6Description'),
            icon: <Wrench className=" w-5 h-5" />
        },
        {
            name: t('pomcName'),
            description: t('pomcDescription'),
            icon: <Settings className=" w-5 h-5" />
        },
        {
            name: t('ptfeName'),
            description: t('ptfeDescription'),
            icon: <Thermometer className=" w-5 h-5" />
        }
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
                                    {t('plasticEngineeringTitle')}
                                    <span className="absolute left-0 bottom-[-15px] h-[2px] bg-[#ec1c24] w-full rounded-full"></span>
                                </h1>
                                <p className="font-poppin text-white/85 w-[90%] mb-10 text-[0.90rem] sm:text-[1.0rem] xl:text-[1.1rem] xl:leading-8 text-justify">
                                    {t('plasticEngineeringParagraph')}
                                </p>
                            </div>
                            <div>
                                <button className="flex items-center gap-3 bg-[#ec1c24] px-4 py-2 rounded-sm font-semibold cursor-pointer transition duration-300 hover:bg-[#b8141a]">
                                    <FaArrowRight /> {t('contactUsButton')}
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
                            <img className="w-full h-auto" src={PlasticEngineeringImage} alt="PlasticEngineeringImage" />
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Offer Section */}
            <div className="flex items-center justify-center">
                <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 py-20 ">
                    <div className=" rounded-sm flex items-center justify-center flex-col gap-8 xl:gap-12">
                        <div className=""   >
                            <div className="text-center">
                                <span className='uppercase font-poppins text-[#ec1c24] tracking-wider font-medium'>{t('plasticWeWorkWithUpTitle')} </span>
                                <h2 className="font-Stock_No_Bills text-[2.2rem] sm:text-[2.6rem] font-bold">{t('plasticWeWorkWithTitle')}</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-5 sm:gap-y-6 lg:gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 2xl:grid-cols-3">
                            {plastics.map((plastic, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.8, 0.25, 1], }}
                                    key={plastic.name}
                                    className="bg-[#f6f6f7] rounded-xl shadow-sm p-6 xl:px-8 xl:py-6 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer"
                                >

                                    <div className="bg-[#ec1c24] text-white p-2 w-fit rounded-md">{plastic.icon}</div>
                                    <h4 className="font-poppins text-[#1e1e1e] text-[1rem] font-semibold tracking-wide">{plastic.name}</h4>
                                    <p className="text-justify font-poppins text-[0.85rem] text-[#6d6d6d] leading-6">{plastic.description}</p>

                                </motion.div>
                            ))}
                        </div>

                    </div>
                </section>
            </div>


            {/* Slider Section */}
            <div className="flex items-center justify-center">
                <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50 my-15">
                    <div className="bg-white flex flex-col items-center justify-center ">
                        {/* Section Title */}
                         <div className="mb-8" >
                            <div className="text-center">
                                <span className='uppercase font-poppins text-[#ec1c24] tracking-wider font-medium'>{t('whatWeOfferUpTitle')} </span>
                                <h2 className="font-Stock_No_Bills text-[2.2rem] sm:text-[2.6rem] font-bold">{t('whatWeOfferTitle')}</h2>
                            </div>
                        </div>
                        {/* Slider */}
                        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10 2xl:gap-12">
                            <Slider image={SheetsImage} title={t('sheetsItem')} description={t('sheetsDescription')} info={['Thickness: 5–100 mm', 'Colors: White, Black, Blue, Red', 'Cut-to-size on request']}/>
                            <Slider image={RodsImage} title={t('rodsItem')} description={t('rodsDescription')} info={['Thickness: 5–100 mm', 'Colors: White, Black, Blue, Red', 'Cut-to-size on request']}/>
                            <Slider image={CutImage} title={t('cutToSizePartsItem')} description={t('cutToSizePartsDescription')} info={['Thickness: 5–100 mm', 'Colors: White, Black, Blue, Red', 'Cut-to-size on request']}/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PlasticEngineering