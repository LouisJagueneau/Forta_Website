import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { motion } from "motion/react"
//image
import aboutImage from '../assets/About imag.png'
import backgroundImageV4 from '../assets/backgroundImageV4.jpg';
import roundedPlasticEngineering from '../assets/EngineeringPlastic.jpg';
import roundedCNCParts from '../assets/Rounded CNC Parts.png';

//icons
import { CiForkAndKnife } from "react-icons/ci";
import { FaArrowRight, FaUpLong } from "react-icons/fa6";
import { CiMedicalCross } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { CiBoxes } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";
import { GiMetalBar } from "react-icons/gi";

//components
import IndustrieCard from '../components/industrieCard';
import FeedbackCard from '../components/feedbackCard';
import ServicesCard from '../components/servicesCard';

function Home() {

  const { t } = useTranslation()

  const { ref: countRef, inView: countInView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="font-poppins">

      <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background with overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImageV4})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
                <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 text-center">
                    
                    {/* Subtitle with line */}
                    <motion.div 
                        initial={{opacity:0, y:30}} 
                        animate={{opacity:1, y:0}} 
                        transition={{duration:0.8}}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-[#ec1c24]"></div>
                        <span className="uppercase font-poppins text-[#ec1c24] tracking-wider font-semibold text-sm">
                            Forta
                        </span>
                        <div className="w-12 h-[2px] bg-[#ec1c24]"></div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1 
                        initial={{opacity:0, scale:0.8}} 
                        animate={{opacity:1, scale:1}} 
                        transition={{duration:0.8, delay:0.2}}
                        className="text-white font-Stock_No_Bills text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] xl:text-[5rem] leading-tight sm:leading-[3.8rem] md:leading-[4.5rem] xl:leading-[5.5rem] mb-8"
                    >
                        <span className="block">
                            {t('welcomeTitle1')}
                            <span className="text-[#ec1c24] mx-2"> & </span>
                            <span>{t('welcomeTitle2')}</span>
                        </span>
                        <span className="block mt-2 text-white">
                            {t('welcomeTitle3')}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                        initial={{opacity:0, y:30}} 
                        animate={{opacity:1, y:0}} 
                        transition={{duration:0.8, delay:0.4}}
                        className="text-gray-300 text-base max-w-3xl mx-auto mb-10 leading-relaxed text-[0.9rem]"
                    >
                        {t('heroParagraph')}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div 
                        initial={{opacity:0, y:30}} 
                        animate={{opacity:1, y:0}} 
                        transition={{duration:0.8, delay:0.6}}
                        className="mb-16"
                    >
                        <button 
                            className="group bg-[#ec1c24] hover:bg-[#c71a20] text-white font-semibold text-base px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 mx-auto"
                            onClick={() => { 
                                const service = document.getElementById('services'); 
                                if (service) { service.scrollIntoView({ behavior: 'smooth' }) } 
                            }}
                        >
                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span className='text-[0.9rem]'>{t('heroButton')}</span>
                        </button>
                    </motion.div>

                    
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1, delay:1.2}}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center text-white/60 animate-bounce">
                    <span className="text-xs mb-2 font-poppins">{t('discoverText')}</span>
                    <div className="w-px h-4 bg-white/40"></div>
                    <div className="w-1 h-1 bg-white/60 rounded-full mt-1"></div>
                </div>
            </motion.div>
        </section>


      {/* Services Section */}
      <section id='services' className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="text-center mb-12">
            <span className='uppercase font-poppins text-[#ec1c24] tracking-wider font-medium'>{t('servicesUpTitle')} </span>
            <h2 className="font-Stock_No_Bills text-[2.2rem] sm:text-[2.6rem] font-bold">{t('servicesTitle')}</h2>
          </div>
          <div className='flex flex-col xl:flex-row xl:gap-15 2xl:gap-20'>
          <ServicesCard Icon={IoLayersOutline} info={t('PlasticsAvailable')} img={roundedPlasticEngineering} title={t('plasticTitle')} list={['PP','PEHD','PE300','PE500','PE1000', 'PA6', 'POM-C', 'PTFE', 'PEEK']} description={t('plasticDescription')} link='/plasticEngineering' buttonText={t('plasticButton')} />
          <ServicesCard Icon={GiMetalBar} info={t('cncProduct')} img={roundedCNCParts} title={t('cncTitle')} list={[t('cncProduct1'), t('cncProduct2'), t('cncProduct3'), t('cncProduct4'), t('cncProduct5'), t('cncProduct6'), t('cncProduct7'), t('cncProduct8'), t('cncProduct9')]} description={t('cncDescription')}  link='/cncParts' buttonText={t('plasticButton')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-gradient-to-r from-[#ec1c24] via-red-500 to-[#ec1c24]  py-12">
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="font-Stock_No_Bills text-3xl md:text-4xl text-center md:text-left font-semibold mb-10">
              {t('aboutTitle').split(' ')[0]}{" "}
              <span className="inline-flex flex-col items-start">
                <span>{t('aboutTitle').split(' ')[1]}</span>
                <span className="h-[2px] w-full bg-red-500 mt-1"></span>
              </span>{" "}
              {t('aboutTitle').split(' ').slice(2).join(' ')}
            </h2>
            <div className='flex flex-col lg:flex-row lg:gap-15 items-stretch mb-8 lg:mb-15'>
              <div className='lg:w-6/6 2xl:w-5/6'>
                <h3 className='font-poppins font-semibold text-[1.1rem] xl:text-[1.3rem] mb-4'>{t('aboutSubtitle')}</h3>
                <p className='text-black text-[0.8rem] xl:text-[0.95rem] text-justify mb-6 lg:mb-12 lg:leading-6 xl:leading-7.5 '>{t('aboutDescription')}</p>
                <button className=" text-white bg-[#ec1c24] text-[0.75rem] xl:text-[0.95rem] px-3 py-1 rounded-sm hover:bg-[#c71a20] transition-colors duration-200">
                  <Link to='/about' className='flex items-center gap-2'><FaArrowRight /> {t('aboutButton')}</Link>
                </button>
              </div>
              <div className=' overflow-hidden relative'>
                <img className='shadow-lg hidden lg:block h-full w-full object-cover rounded-sm' src={aboutImage} alt="aboutImage" />
              </div>
            </div>
            <div ref={countRef} className="grid grid-cols-2 gap-x-8 gap-y-8 text-left lg:flex lg:flex-row lg:justify-between ">

              {/* Bloc 1 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4 shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none ">
                  {countInView && <CountUp start={0} end={30} duration={3} prefix='+' />}
                </p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>{t('countYears').split('\n')[0]}</p>
                  <p>{t('countYears').split('\n')[1]}</p>
                </div>
              </div>

              <span className='border-[1px] border-gray-300 h-[auto] hidden lg:flex rounded-full'></span>

              {/* Bloc 2 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4 shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none">
                  {countInView && <CountUp start={0} end={200} duration={3} prefix='+' />}
                </p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>{t('countClients').split('\n')[0]}</p>
                  <p>{t('countClients').split('\n')[1]}</p>
                </div>
              </div>

              <span className='border-[1px] border-gray-300 h-[auto] hidden lg:flex rounded-full'></span>

              {/* Bloc 3 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4 shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none">
                  {countInView && <CountUp start={0} end={10} duration={3} prefix='+' suffix='K' />}
                </p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>{t('countProjects').split('\n')[0]}</p>
                  <p>{t('countProjects').split('\n')[1]}</p>
                </div>
              </div>

              <span className='border-[1px] border-gray-300 h-[auto] hidden lg:flex rounded-full'></span>

              {/* Bloc 4 */}
              <div className="flex flex-row items-center gap-3 py-4 px-4 shadow-md rounded-md lg:shadow-none lg:rounded-none">
                <p className="text-[#ec1c24] text-3xl font-light leading-none">
                  {countInView && <CountUp start={0} end={25} duration={3} prefix='+' />}
                </p>
                <div className="text-xs text-[#444] leading-tight">
                  <p>{t('countPartners').split('\n')[0]}</p>
                  <p>{t('countPartners').split('\n')[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrie Section */}
      <section className='w-full bg-white py-12'>
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="text-center mb-20 flex flex-col">
            <span className='uppercase font-poppins text-[#ec1c24] tracking-wider font-medium'>{t('industriesUpTitle')} </span>
            <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold text-black inline-block relative">{t('industriesTitle')}
            </h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 xl:gap-y-9 xl:gap-x-9 gap-y-5 items-stretch mb-10'>
            <IndustrieCard title={t('industryFood')} description={t('industryFoodDesc')} Icon={CiForkAndKnife} />
            <IndustrieCard title={t('industryPharma')} description={t('industryPharmaDesc')} Icon={CiMedicalCross} />
            <IndustrieCard title={t('industryAutomation')} description={t('industryAutomationDesc')} Icon={CiBoxes} />
            <IndustrieCard title={t('industryAuto')} description={t('industryAutoDesc')} Icon={CiDeliveryTruck} />
            <IndustrieCard title={t('industryEnergy')} description={t('industryEnergyDesc')} Icon={SlEnergy} />
            <IndustrieCard title={t('industryMachinery')} description={t('industryMachineryDesc')} Icon={IoSettingsOutline} />
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home