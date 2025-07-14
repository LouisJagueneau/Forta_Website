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

const slides = [
    {
        item: "CNC Turning",
        image: CNCTurningImage,
        description: "High-precision turning for cylindrical parts with smooth finishes and tight tolerances."
    },
    {
        item: "CNC Milling",
        image: CNCMillingImage,
        description: "Accurate milling of flat and complex surfaces for custom mechanical components."
    },
    {
        item: "5-Axis Machining",
        image: CNC5AxesImage,
        description: "Advanced 5-axis machining for detailed, multi-face parts in a single pass."
    },
    {
        item: "Laser Cutting",
        image: CNC5AxesImage,
        description: "Flat plastic sheAdvanced 5-axis machining for detailed, multi-face parts in a single pass."
    },
    {
        item: "Welding",
        image: CNC5AxesImage,
        description: "Advanced 5-axis machining for detailed, multi-face parts in a single pass."
    },
    {
        item: "Bending",
        image: CNC5AxesImage,
        description: "Flat plastic sheets available in various thicknesses for machining or direct use.Advanced 5-axis machining for detailed, multi-face parts in a single pass."
    },
]

const plastics = [
    {
        name: "Feed Screw",
        img: <img src={FeedScrew} alt="FeedScrew" />
    },
    {
        name: "Flanges",
        img: <img src={Flanges} alt="Flanges" />
    },
    {
        name: "Guides",
        img: <img src={GuidesImages} alt="GuidesImages" />
    },
    {
        name: "Rings",
        img: <img src={RingsImage} alt="RingsImage" />
    },
    {
        name: "Sliders",
        img: <img src={SlidersImage} alt="SlidersImage" />
    },
    {
        name: "Timing Screw",
        img: <img src={TimingScrew} alt="TimingScrew" />
    },
    // {
    //     name: "PEEK",
    //     description: "PEEK (Polyether Ether Ketone) is used in high-performance industrial applications requiring heat and chemical resistance.",
    //     icon: <Shield className="text-[#ec1c24] w-5 h-5" />
    // }
]

function CncParts() {
    return (
        <>
            {/* Title Section */}
            <div className='bg-[#0f0f0f] lg:pb-32 pb-20 min-h-screen '>

                <div className="z-10 flex pt-[100px] justify-center flex-col">
                    <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50  ">
                        <div className="text-white flex flex-col-reverse items-center gap-y-12 lg:flex-row lg:gap-x-24 2xl:gap-x-34 lg:items-stretch">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="flex flex-col items-start lg:flex-2 xl:justify-between">
                                {/* Title div */}
                                <div>
                                    <h1 className="font-Stock_No_Bills text-[2.4rem] font-semibold text-start relative inline-block mb-10 leading-12 lg:leading-14 2xl:leading-16 lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[3.2rem]  text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d6d6d6] ">High-Performance Engineering Plastics for Industrial Applications
                                        <span className="absolute left-0 bottom-[-15px] h-[2px] bg-[#ec1c24] w-[100%] rounded-full"></span>

                                    </h1>
                                    <p className="font-poppins mb-10 xl:text-[1.1rem] xl:leading-8 text-justify">High-Precision CNC Machining for Industrial Applications
                                        We deliver custom CNC parts engineered for durability, accuracy, and performance.</p>
                                </div>
                                <div>
                                    <button className="flex items-center gap-3 bg-[#ec1c24] px-4 py-2 rounded-sm font-semibold cursor-pointer transition duration-300 hover:bg-[#b8141a]" aria-label="Contact us button"><FaArrowRight />Contact Us</button>
                                </div>
                            </motion.div>
                            {/* Image Div */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="h-auto w-[200px] lg:flex-1 lg:w-full lg:flex lg:items-center">
                                <img className="w-full h-auto" src={CNCPartsImage} alt="PlasticEngineeringImage" />
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
            {/* Slider Section */}
            <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50 my-15">
                <div className="bg-white flex flex-col items-center justify-center ">
                    {/* Section Title */}
                    <div
                        className="mb-15">
                        <h2 className="font-Stock_No_Bills text-[2.4rem] xl:text-[2.8rem] font-semibold relative inline-block">What We Offer?<span className="bg-[#ec1c24] xl:h-[4px] h-[2px] left-0 bottom-[-10px] absolute w-full rounded-full"></span>
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

            {/* Slider Section */}
            <section className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30  2xl:px-50 bg-[#ec1c24] py-20 ">
                <div className="bg-white p-8 lg:px-12 xl:px-20 xl:pb-16 xl:pt-12 rounded-sm flex items-center justify-center flex-col gap-8 xl:gap-12">
                    <div className="">
                        <h2 className="inline font-Stock_No_Bills text-[2.0rem] lg:text-[2.4rem] xl:text-[2.8rem] font-semibold">
                            Types of Parts We{" "}
                            <span className="relative inline-block">
                                Manufacture
                                <span className="absolute h-[2px] xl:h-[4px] bg-[#ec1c24] w-full left-0 bottom-[-6px]"></span>
                            </span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-y-5 sm:gap-y-6 lg:gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 2xl:grid-cols-3">
                        {plastics.map((plastic, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.8, 0.25, 1], }}
                                key={plastic.name}
                                className="bg-[#f6f6f7] rounded-xl shadow-sm p-4 xl:px-6 xl:py-4 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
                            >

                                <div className="w-fit rounded-md">{plastic.img}</div>
                                <h4 className="font-poppins text-[#1e1e1e] text-[1rem] tracking-wide">{plastic.name}</h4>

                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default CncParts;