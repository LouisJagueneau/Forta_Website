import backgroundImage from '../assets/backgroundImage.png';
import roundedPlasticEngineering from '../assets/RoundedPlasticEngeeniring.png';
import roundedCNCParts from '../assets/Rounded CNC Parts.png';
import aboutImage from '../assets/About imag.png'
import { CiForkAndKnife } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { CiMedicalCross } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { CiBoxes } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="font-poppins">

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        <div className="relative z-10 flex items-center justify-center xl:justify-normal xl:w-3/5 2xl:w-4/6 min-h-screen">
          <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 text-center xl:text-start">
            <h1 className="text-white font-Stock_No_Bills text-[3.1rem] xl:text-[4.0rem] sm:text-[3.8rem] mb-7">
              Precision CNC Parts <span className="text-[#ec1c24]">&</span> Engineering Plastics
            </h1>
            <span className="border-2 border-[#ec1c24] block rounded-full w-[75%] mx-auto xl:mx-0 mb-5"></span>
            <p className="text-white text-[0.85rem] w-[75%] mx-auto xl:mx-0 mb-8 xl:mb-14 xl:text-justify">
              We are committed to delivering exceptional quality, precision, and reliability in every part we produce. Our expertise, combined with our comprehensive service offerings, makes us your ideal partner for custom CNC solutions.
            </p>
            <button className="flex items-center gap-2 mx-auto xl:mx-0 text-white font-semibold text-[0.85rem] bg-[#ec1c24] px-5 py-2 rounded-sm">
              <FaArrowRight /> OUR SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="text-center mb-12">
            <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold">Our Services</h2>
            <span className="border-2 border-[#ec1c24] block rounded-full w-[120px] mx-auto mt-2"></span>
          </div>

          {/* Plastic Engineering */}
          <div className="bg-gradient-to-r from-[#ef1c2314] to-[#ef1c2300] rounded-l-full p-6 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 xl:gap-15 pl-20 md:pl-4">
              <img
                src={roundedPlasticEngineering}
                alt="CNC Parts"
                className="lg:aspect-square lg:h-auto lg:max-h-[200px] lg:w-auto w-[175px] object-cover rounded-full shadow-md hidden md:block"
              />

              <div>
                <h3 className="font-semibold text-[1.3rem] mb-3">Plastic engineering</h3>
                <p className="text-[#777777] text-[0.85rem] mb-2 text-justify lg:leading-8 ">
                  We supply high-performance plastic components crafted from industrial-grade materials. Our plastics offer excellent mechanical, thermal, and chemical properties, making them ideal for demanding environments across multiple industries.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#ec1c24]"></span>
                  <p className="text-[#777777] text-[0.85rem]">
                    Services: PP ; PEHD, PE300, PE500, PE1000, PA6, POM-C, PTFE, PEEK.
                  </p>
                </div>
                <button className="flex items-center gap-2 text-white bg-[#ec1c24] text-[0.75rem] px-3 py-1 rounded-sm">
                  <FaArrowRight /> See More
                </button>
              </div>
            </div>
          </div>

          {/* CNC Parts */}
          <div className="bg-gradient-to-r from-[#ef1c2300] to-[#ef1c2314] rounded-r-full p-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-15 pr-20 md:pr-4 md:pl-4">
              <img
                src={roundedCNCParts}
                alt="CNC Parts"
                className="lg:aspect-square lg:h-auto lg:max-h-[200px] lg:w-auto w-[175px] object-cover rounded-full shadow-md hidden md:block"
              />

              <div>
                <h3 className="font-semibold text-[1.3rem] mb-3">CNC Parts</h3>
                <p className="text-[#777777] text-[0.85rem] mb-2 text-justify lg:leading-8">
                  We offer high-precision CNC machining services tailored to meet the needs of demanding industrial applications. Whether you require single prototypes or full production runs, our expertise ensures reliable, accurate, and repeatable parts every time.
                </p>
                <div className="flex items-start gap-2 mb-4">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#ec1c24]"></span>
                  <p className="text-[#777777] text-[0.85rem]">
                    Services: CNC Turning ; CNC Milling ; 5-Axis Machining ; Laser Cutting ...
                  </p>
                </div>
                <button className="flex items-center gap-2 text-white bg-[#ec1c24] text-[0.75rem] px-3 py-1 rounded-sm">
                  <FaArrowRight /> See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-[#e91b23] py-12">
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="font-Stock_No_Bills text-3xl md:text-4xl text-center md:text-left font-semibold mb-10">
              We{" "}
              <span className="inline-flex flex-col items-start">
                <span>build</span>
                <span className="h-[2px] w-full bg-red-500 mt-1"></span>
              </span>{" "}
              your solutions, piece by piece.
            </h2>
            <div className='flex flex-col lg:flex-row lg:gap-15 items-stretch mb-8 lg:mb-15'>
              <div className='lg:w-6/6 2xl:w-5/6'>
                <h3 className='font-poppins font-semibold text-[1.1rem] xl:text-[1.3rem] mb-4'>About  Forta Ltd ?</h3>
                <p className='text-black text-[0.8rem] xl:text-[0.95rem] text-justify mb-6 lg:mb-12 lg:leading-6 xl:leading-7.5 '>With over 30 years of experience, Forta Ltd. designs and manufactures high-quality custom mechanical parts. We specialize in CNC machining and engineering plastics, serving industries such as food, chemical, automotive, and automation. From design to maintenance, we deliver complete technical solutions with precision and reliability.</p>
                <button className="flex items-center gap-2 text-white bg-[#ec1c24] text-[0.75rem] xl:text-[0.95rem] px-3 py-1 rounded-sm">
                  <FaArrowRight /> See More
                </button>
              </div>
              <div className=' overflow-hidden relative'>
                <img className='shadow-lg hidden lg:block h-full w-full object-cover rounded-sm' src={aboutImage} alt="aboutImage" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 text-left lg:flex lg:flex-row lg:justify-between ">

              {/* Bloc 1 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4 shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none">+30</p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>years of</p>
                  <p>experience</p>
                </div>
              </div>

              <span className='border-[1px] border-gray-300 h-[auto] hidden lg:flex rounded-full'></span>

              {/* Bloc 2 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4 shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none">+200</p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>clients in</p>
                  <p>Europe</p>
                </div>
              </div>

              <span className='border-[1px] border-gray-300 h-[auto] hidden lg:flex rounded-full'></span>

              {/* Bloc 3 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4 shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none">+10K</p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>projects</p>
                  <p>realised</p>
                </div>
              </div>

              <span className='border-[1px] border-gray-300 h-[auto] hidden lg:flex rounded-full'></span>

              {/* Bloc 4 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4  shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none">+25</p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>trusted partner</p>
                  <p>companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrie Section */}
      <section className='w-full bg-[#0f181f] py-12'>
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="text-center mb-20 ">
            <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold text-white inline-block relative">Industrie Served
              <span className="bg-[#ec1c24] rounded-full absolute bottom-[-10px] w-full h-[2px] left-0"></span>
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 xl:gap-y-9 xl:gap-x-9 gap-y-5 items-stretch mb-10'>

            {/* First Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>Food & Beverage</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiForkAndKnife className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>We supply food-grade plastic and precision CNC parts for hygienic and durable use in food processing and bottling lines.</p>
            </div>

            {/* Second Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>Pharmaceutical</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiMedicalCross className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>Our corrosion-resistant components are ideal for use in chemical tanks, lab equipment, and pharmaceutical packaging systems.</p>
            </div>

            {/* Third Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>Automation</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiBoxes className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>We produce timing screws, guides, and CNC components that keep automated filling and packaging lines running smoothly and efficiently.</p>
            </div>

            {/* Fourth Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>Automotive</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiDeliveryTruck className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>Forta delivers robust and accurate plastic and CNC parts used in testing, assembly, and prototype phases of automotive manufacturing.</p>
            </div>

            {/* Fifth Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>Energy & Utilities</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <SlEnergy className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>Our engineering plastics  are built to withstand extreme conditions in power systems, industrial utilities, and clean energy installations.</p>
            </div>


            {/* Sixth Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>Industrial Machinery</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <IoSettingsOutline className='text-[#ef1c24] text-[1.5rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>We provide custom-engineered CNC components for conveyor systems and machinery, ensuring durability, precision, and smooth operation.</p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Home