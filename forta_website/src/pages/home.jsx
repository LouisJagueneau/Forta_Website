import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { motion } from "motion/react"
//image
import aboutImage from '../assets/About imag.png'
import backgroundImage from '../assets/backgroundImage.png';
import backgroundImageV2 from '../assets/backgroundImageV2.jpg';
import backgroundImageV3 from '../assets/backgroundImageV3.jpg';
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

//components
import IndustrieCard from '../components/industrieCard';
import FeedbackCard from '../components/feedbackCard';
import ServicesCard from '../components/servicesCard';

function Home() {

  const { t } = useTranslation()

  const [feedbacks, setFeedbacks] = useState([])

  const { ref: countRef, inView: countInView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    fetch('/react/get-feedback.php')
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.log('Error during fetch:', error))
  }, [])

  const firstLine = feedbacks.slice(0, Math.ceil(feedbacks.length / 2));
  const secondLine = feedbacks.slice(Math.ceil(feedbacks.length / 2))

  return (
    <div className="font-poppins">

      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageV4})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

        <div className="relative z-10 flex justify-center pt-[10rem] min-h-screen">
          <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 text-center  flex flex-col items-center">

            {/* Title */}
            <motion.h1 initial={{opacity:0, scale:0.7}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} viewport={{once:true}}
              className="text-white font-Stock_No_Bills text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] xl:text-[5rem] leading-tight sm:leading-[4rem] md:leading-[4.7rem] xl:leading-[6rem] mb-10">
              <span className="block ">{t('welcomeTitle1')}<span className="text-[#ec1c24]">{' '}&{' '}</span><span>{t('welcomeTitle2')}</span></span>
              <span className="block">{t('welcomeTitle3')}</span>
            </motion.h1>
            {/* Paragraph */}
            <motion.p initial={{opacity:0, scale:0.7}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.5}} viewport={{once:true}}
              className="text-white/85 text-[0.8rem] sm:text-[0.90rem] w-[90%] sm:w-[90%] mx-auto xl:mx-0 mb-8 xl:mb-12 text-center leading-relaxed">
              {t('heroParagraph')}
            </motion.p>
            {/* Button */}
            <motion.div initial={{opacity:0, scale:0.7}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:1}} viewport={{once:true}} 
              className="flex justify-center xl:justify-start">
              <button className="flex items-center gap-2 text-white font-semibold text-[0.8rem] sm:text-[0.85rem] bg-[#ec1c24] px-5 py-2 rounded-sm hover:bg-[#c71a20] cursor-pointer transition-colors duration-200" onClick={() => { const service = document.getElementById('services'); if (service) { service.scrollIntoView({ behavior: 'smooth' }) } }}>
                <FaArrowRight /> {t('heroButton')}
              </button>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id='services' className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="text-center mb-12">
            <span className='uppercase font-poppins text-[#ec1c24] tracking-wider font-medium'>{t('servicesUpTitle')} </span>
            <h2 className="font-Stock_No_Bills text-[2.2rem] sm:text-[2.6rem] font-bold">{t('servicesTitle')}</h2>
          </div>
          <div className='flex flex-col xl:flex-row xl:gap-15 2xl:gap-20'>
          <ServicesCard info='Plastics available' img={roundedPlasticEngineering} title={t('plasticTitle')} list={['PP','PEHD','PE300','PE500','PE1000', 'PA6', 'POM-C', 'PTFE', 'PEEK']} description={t('plasticDescription')} link='/plasticEngineering' buttonText={t('plasticButton')} />
          <ServicesCard info='Specialized Products' img={roundedCNCParts} title={t('cncTitle')} list={['Timing Screw', 'Feed screw', 'Rings', 'Guides', 'Flanges', 'Sliders', 'Pulleys', 'Housing', 'Rollers']} description={t('cncDescription')}  link='/cncParts' buttonText={t('plasticButton')} />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="w-full bg-[#e91b23] py-12">
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

      {/* Feedback Section
      <section className='w-full bg-[#ffffff] py-12'>
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className='flex flex-col items-center gap-12'>
            <div className='text-center'>
              <span className='uppercase font-poppins text-[#ec1c24] tracking-wider font-medium'>{t('feebackUpTitle')} </span>
              <h2 className='font-Stock_No_Bills text-[2.6rem] font-semibold text-black'>{t('feebackTitle')}</h2>
            </div>
            <div className='w-full overflow-x-hidden flex'>
              <ul className='flex gap-6 py-2 infinite-scroll'>
                {[...firstLine, ...firstLine].map((feedback, index) => (
                  <li key={index} className='transition-transform duration-300 hover:scale-[1.02]'>
                    
                    <FeedbackCard name={feedback.name} message={feedback.message} rating={feedback.rating} />
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full overflow-x-hidden flex flex-row-reverse '>
              <ul className='flex gap-6 py-2 infinite-scroll-reverse'>
                {[...secondLine, ...secondLine].map((feedback, index) => (
                  <li key={index} className='transition-transform duration-300 hover:scale-[1.02]'>
                    <FeedbackCard name={feedback.name} message={feedback.message} rating={feedback.rating} />
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home