import { FaArrowRight } from "react-icons/fa6";
import PlasticEngineeringImage from '../assets/platsicEngineeringImage.png'
import { Link } from "react-router-dom";
import Slider from '../components/slider'
import SheetsImage from '../assets/SheetsImage.png'
import RodsImage from '../assets/RodsImage.png'
import CutImage from '../assets/CutImage.png'
import { Droplet, FlaskRound, Shield, Thermometer, Settings, Recycle, Lightbulb, Wrench } from 'lucide-react'
import { motion } from "framer-motion"

const slides = [
    {
        item: "Sheets",
        image: SheetsImage,
        description: "Flat plastic sheets available in various thicknesses for machining or direct use."
    },
    {
        item: "Rods",
        image: RodsImage,
        description: "Flat plastic sheets available in various thicknesses for machining or direct use."
    },
    {
        item: "Cut-to-size parts",
        image: CutImage,
        description: "Flat plastic sheets available in various thicknesses for machining or direct use."
    },
    {
        item: "Element 4",
        image: CutImage,
        description: "Flat plastic sheets available in various thicknesses for machining or direct use."
    },
    {
        item: "Element 5",
        image: CutImage,
        description: "Flat plastic sheets available in various thicknesses for machining or direct use."
    },
]

const plastics = [
    {
        name: "PP (Polypropylene)",
        description: "It’s a lightweight, chemical-resistant, ideal for food and chemical applications.",
        icon: <FlaskRound className="text-[#ec1c24] w-5 h-5" />
    },
    {
        name: "PEHD",
        description: "High impact resistance, low moisture absorption, excellent for piping.",
        icon: <Droplet className="text-[#ec1c24] w-5 h-5" />
    },
    {
        name: "PE300/500/1000",
        description: "UHMW grades, low friction and abrasion-resistant for mechanical use.",
        icon: <Recycle className="text-[#ec1c24] w-5 h-5" />
    },
    {
        name: "PA6 (Polyamide 6)",
        description: "Strong and tough, widely used in mechanical engineering.",
        icon: <Wrench className="text-[#ec1c24] w-5 h-5" />
    },
    {
        name: "POM-C",
        description: "(Polyoxymethylene Copo). High stiffness and dimensional stability, perfect for precision parts.",
        icon: <Settings className="text-[#ec1c24] w-5 h-5" />
    },
    {
        name: "PTFE",
        description: "(Polytetrafluoroethylene / Teflon®). Excellent chemical resistance, non-stick, used in harsh environments.",
        icon: <Thermometer className="text-[#ec1c24] w-5 h-5" />
    },
    // {
    //     name: "PEEK",
    //     description: "PEEK (Polyether Ether Ketone) is used in high-performance industrial applications requiring heat and chemical resistance.",
    //     icon: <Shield className="text-[#ec1c24] w-5 h-5" />
    // }
]



function PlasticEngineering() {
    return (
        <>
            {/* Title Section */}
            <div className='bg-[#000001] lg:pb-32 pb-20 min-h-screen '>
                <div className="z-10 flex pt-[100px] justify-center flex-col">
                    <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50  ">
                        <div className="text-white flex flex-col-reverse items-center gap-y-12 lg:flex-row lg:gap-x-24 2xl:gap-x-34 lg:items-stretch">
                            <div className="flex flex-col items-start lg:flex-2 xl:justify-between">
                                {/* Title div */}
                                <div>
                                    <h1 className="font-Stock_No_Bills text-[2.4rem] font-semibold text-start relative inline-block mb-10 leading-12 lg:leading-14 2xl:leading-16 lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem] ">High-Performance Engineering Plastics for Industrial Applications
                                        <span className="absolute left-0 bottom-[-15px] h-[2px] bg-[#ec1c24] w-[100%] rounded-full"></span>

                                    </h1>
                                    <p className="font-poppins mb-10 xl:text-[1.2rem] text-justify">We supply and machine technical plastics in sheets, rods, and custom parts.
                                        Our solutions are tailored to meet the high standards of industrial performance and durability.</p>
                                </div>
                                <div>
                                    <button className="flex items-center gap-3 bg-[#ec1c24] px-4 py-2 rounded-sm font-semibold cursor-pointer" aria-label="Contact us button"><FaArrowRight />Contact Us</button>
                                </div>
                            </div>
                            {/* Image Div */}
                            <div className="h-auto w-[200px] lg:flex-1 lg:w-full lg:flex lg:items-center">
                                <img className="w-full h-auto" src={PlasticEngineeringImage} alt="PlasticEngineeringImage" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* Slider Section */}
            <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50 my-15">
                <div className="bg-white flex flex-col items-center justify-center ">
                    {/* Section Title */}
                    <div className="mb-15">
                        <h2 className="font-Stock_No_Bills text-[2.4rem] xl:text-[2.8rem] font-semibold relative inline-block">What We Offer?<span className="bg-[#ec1c24] xl:h-[4px] h-[2px] left-0 bottom-[-10px] absolute w-full rounded-full"></span>
                        </h2>
                    </div>
                    {/* Slider */}
                    <div className="w-full">
                        <Slider slides={slides} />
                    </div>
                </div>

            </section>

            {/* Slider Section */}
            <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50 bg-[#ec1c24] py-20 ">
                <div className="bg-white p-8 lg:px-12 xl:px-20 xl:pb-16 xl:pt-12 rounded-sm flex items-center justify-center flex-col gap-8 xl:gap-12">
                    <div className="">
                        <h2 className="inline font-Stock_No_Bills text-[2.0rem] lg:text-[2.4rem] xl:text-[2.8rem] font-semibold">
                            Plastic We{" "}
                            <span className="relative inline-block">
                                Work
                                <span className="absolute h-[2px] xl:h-[4px] bg-[#ec1c24] w-full left-0 bottom-[-6px]"></span>
                            </span>
                            <span>{" "} With</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-y-5 sm:gap-y-6 lg:gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 2xl:grid-cols-3">
                        {plastics.map((plastic, index) => (
                            <motion.div
                                initial={{ opacity: 0, y:20  }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.8, 0.25, 1], }}
                                key={plastic.name}
                                className="bg-[#f6f6f7] rounded-xl shadow-sm p-6 xl:px-8 xl:py-6 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
                            >
                                
                                    <div className="bg-white p-2 w-fit rounded-md">{plastic.icon}</div>
                                    <h4 className="font-poppins text-[#1e1e1e] text-[1rem] font-semibold tracking-wide">{plastic.name}</h4>
                                    <p className="text-justify font-poppins text-[0.85rem] text-[#6d6d6d] leading-6">{plastic.description}</p>
                                
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default PlasticEngineering