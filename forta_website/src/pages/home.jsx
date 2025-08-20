import backgroundImage from '../assets/backgroundImage.png';
import roundedPlasticEngineering from '../assets/RoundedPlasticEngeeniring.png';
import roundedCNCParts from '../assets/Rounded CNC Parts.png';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import aboutImage from '../assets/About imag.png'
import { CiForkAndKnife } from "react-icons/ci";
import { FaArrowRight, FaUpLong } from "react-icons/fa6";
import { CiMedicalCross } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { CiBoxes } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import FeedbackCard from '../components/feedbackCard';
import { useEffect, useRef, useState } from 'react';

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
  })

  const firstLine = feedbacks.slice(0, Math.ceil(feedbacks.length /2));
  const secondLine = feedbacks.slice(Math.ceil(feedbacks.length / 2))

  return (
    <div className="font-poppins">

      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        <div className="relative z-10 flex items-center justify-center xl:justify-normal xl:w-3/5 2xl:w-4/6 min-h-screen">
          <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 text-center xl:text-start">

            {/* Title */}
            <h1 className="text-white font-Stock_No_Bills text-[2.5rem] sm:text-[2.8rem] md:text-[3rem] xl:text-[4rem] leading-tight sm:leading-[3rem] xl:leading-[4rem] mb-5">
              <span className="block ">{t('welcomeTitle1')} <span className="text-[#ec1c24]">{' '}&{' '}</span></span>
              <span className="block">{t('welcomeTitle2')}</span>
            </h1>

            {/* Line */}
            <span className="border-2 border-[#ec1c24] block rounded-full w-[60%] sm:w-[75%] mx-auto xl:mx-0 mb-4"></span>

            {/* Paragraph */}
            <p className="text-white text-[0.9rem] sm:text-[0.85rem] w-[90%] sm:w-[75%] mx-auto xl:mx-0 mb-8 xl:mb-14 text-center xl:text-justify leading-relaxed">
              {t('heroParagraph')}
            </p>

            {/* Button */}
            <div className="flex justify-center xl:justify-start">
              <button className="flex items-center gap-2 text-white font-semibold text-[0.8rem] sm:text-[0.85rem] bg-[#ec1c24] px-5 py-2 rounded-sm hover:bg-[#c71a20] transition-colors duration-200" onClick={() => { const service = document.getElementById('services'); if (service) { service.scrollIntoView({ behavior: 'smooth' }) } }}>
                <FaArrowRight /> {t('heroButton')}
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id='services' className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="text-center mb-12">
            <h2 className="font-Stock_No_Bills text-[2rem] sm:text-[2.6rem] font-semibold">{t('servicesTitle')}</h2>
            <span className="border-2 border-[#ec1c24] block rounded-full w-[120px] mx-auto mt-2"></span>
          </div>

          {/* Plastic Engineering */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-7 sm:p-7 mb-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <img
                src={roundedPlasticEngineering}
                alt="Plastic Engineering"
                className="w-[120px] sm:w-[160px] rounded-full shadow-md"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-[1.2rem] mb-3">{t('plasticTitle')}</h3>
                <p className="text-[#777777] text-sm mb-3 text-justify">
                  {t('plasticDescription')}
                </p>
                <div className="flex items-start justify-center sm:justify-start gap-2 mb-3">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#ec1c24] mt-1"></span>
                  <p className="text-[#777777] text-sm">
                    {t('plasticList')}
                  </p>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <button className=" text-white bg-[#ec1c24] text-xs px-3 py-1 rounded-sm hover:bg-[#c71a20] transition-colors duration-200">
                    <Link className='flex items-center gap-2' to='/plasticEngineering'><FaArrowRight /> {t('plasticButton')}</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CNC Parts */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-7 sm:p-7 mb-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <img
                src={roundedCNCParts}
                alt="Plastic Engineering"
                className="w-[120px] sm:w-[160px] rounded-full shadow-md"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-[1.2rem] mb-3">{t('plasticTitle')}</h3>
                <p className="text-[#777777] text-sm mb-3 text-justify">
                  {t('cncDescription')}
                </p>
                <div className="flex items-start justify-center sm:justify-start gap-2 mb-3">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#ec1c24] mt-1"></span>
                  <p className="text-[#777777] text-sm">
                    {t('cncList')}
                  </p>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <button className=" text-white bg-[#ec1c24] text-xs px-3 py-1 rounded-sm hover:bg-[#c71a20] transition-colors duration-200">
                    <Link className='flex items-center gap-2' to='/plasticEngineering'><FaArrowRight /> {t('plasticButton')}</Link>
                  </button>
                </div>
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
      <section className='w-full bg-[#0f181f] py-12'>
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className="text-center mb-20 ">
            <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold text-white inline-block relative">{t('industriesTitle')}
              <span className="bg-[#ec1c24] rounded-full absolute bottom-[-10px] w-full h-[2px] left-0"></span>
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 xl:gap-y-9 xl:gap-x-9 gap-y-5 items-stretch mb-10'>

            {/* First Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>{t('industryFood')}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiForkAndKnife className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>{t('industryFoodDesc')}</p>
            </div>

            {/* Second Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>{t('industryPharma')}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiMedicalCross className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>{t('industryPharmaDesc')}</p>
            </div>

            {/* Third Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>{t('industryAutomation')}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiBoxes className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>{t('industryAutomationDesc')}</p>
            </div>

            {/* Fourth Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>{t('industryAuto')}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <CiDeliveryTruck className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>{t('industryAutoDesc')}</p>
            </div>

            {/* Fifth Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>{t('industryEnergy')}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <SlEnergy className='text-[#ef1c24] text-[1.8rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>{t('industryEnergyDesc')}</p>
            </div>


            {/* Sixth Element */}
            <div className='bg-[#272f35] p-5 rounded-lg border-[#ffffff3b] border-[1px]'>
              <div className='flex justify-between items-center mb-5'>
                <div className='flex flex-col items-start'>
                  <p className='font-poppins font-semibold text-white'>{t('industryMachinery')}</p>
                  <span className="border-1 border-[#ec1c24] block rounded-full w-[100%]"></span>
                </div>
                <IoSettingsOutline className='text-[#ef1c24] text-[1.5rem]' />
              </div>
              <p className='text-[#B9B9B9] font-poppins text-[0.8rem] text-justify'>{t('industryMachineryDesc')}</p>
            </div>

          </div>

        </div>
      </section>

      {/* Feedback Section */}
      <section className='w-full bg-[#ffffff] py-12'>
        <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
          <div className='flex flex-col items-center gap-12'>
            <h2 className='font-Stock_No_Bills text-[2.6rem] font-semibold text-black inline-block relative'>What our customers say!<span className='absolute bottom-[-10px] bg-[#ef1c24] h-1 w-[100%] left-0 rounded-full'></span></h2>

            <div className='w-full overflow-x-hidden flex'>
              <ul className='flex gap-6 py-2 infinite-scroll'>
                {[...firstLine, ...firstLine].map((feedback, index) => (
                  <li key={index} className='transition-transform duration-300 hover:scale-[1.02]'>
                    <FeedbackCard  name={feedback.name} message={feedback.message} rating={feedback.rating} />
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full overflow-x-hidden flex flex-row-reverse '>
              <ul className='flex gap-6 py-2 infinite-scroll-reverse'>
                {[...secondLine, ...secondLine].map((feedback, index) => (
                  <li key={index} className='transition-transform duration-300 hover:scale-[1.02]'>
                    <FeedbackCard  name={feedback.name} message={feedback.message} rating={feedback.rating} />
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home