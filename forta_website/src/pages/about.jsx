import aboutUsImage from '../assets/About_image.png'
import aboutUsImage2 from '../assets/About_image2 .png'

function About() {
    return (
        <>
            <div className='bg-[#0e171e]'>
                <div className="z-10 flex pt-[100px] min-h-screen justify-center">
                    <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50 ">
                        <section className="flex flex-col gap-y-12 xl:gap-y-16 items-center  lg:mb-10 xl:mb-20">
                            <div className='flex flex-col gap-y-12 lg:flex-row lg:items-stretch lg:gap-x-12 xl:gap-x-30'>
                                {/* About us */}
                                <div className='text-white lg:w-6/6 '>
                                    <   h2 className='relative inline-block font-Stock_No_Bills text-[2.6rem] font-semibold mb-10'>About us
                                        <span className='absolute bg-[#ec1c24] h-[2px] w-[120%] bottom-[-10px] left-0 rounded-full'></span>
                                    </h2>
                                    <p className='text-justify font-poppins text-[0.9rem] xl:text-[1.0rem] 2xl:text-[1.1rem] mb-5'>With over 30 years in CNC machining, design, and production, is your partner for high-quality custom mechanical parts. We offer personalized service and specialized solutions for a wide range of industries, including food and beverage, chemical, paper, automotive, healthcare, energy, process automation, conveyor technology and others.</p>
                                    <p className='text-justify font-poppins text-[0.9rem] xl:text-[1.0rem] 2xl:text-[1.1rem]'>We excel in the precision production of parts made from engineering plastics (PP, HDPE, POM, PA, PTFE, etc.). Our dedication to technological progress ensures we continually enhance our capabilities to deliver the most precise and complex machine components.</p>
                                </div>
                                {/* Image 1 */}
                                <div className=' lg:flex lg:items-center lg:w-3/6 xl:w-4/6'>
                                    <img src={aboutUsImage2} alt="aboutUsImage" className='w-full h-auto lg:hidden' />
                                    <img src={aboutUsImage} alt="aboutUsImage" className='w-full h-auto hidden lg:flex ' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-12 lg:flex-row-reverse items-stretch lg:gap-x-12 xl:gap-x-30'>
                                {/* Our Mission */}
                                <div className='text-white w-6/6 text-end'>
                                    <h2 className='relative inline-block font-Stock_No_Bills text-[2.6rem] font-semibold mb-10'>Our Mission
                                        <span className='absolute bg-[#ec1c24] h-[2px] w-[120%] bottom-[-10px] right-0 rounded-full'></span>
                                    </h2>
                                    <p className='text-justify font-poppins text-[0.9rem] xl:text-[1.0rem] 2xl:text-[1.1rem] mb-5'>At Forta Ltd., our mission is simple. We deliver reliable, high-precision mechanical parts and plastic components that empower our clients' performance. We combine decades of expertise with continuous innovation to provide custom solutions that meet the highest industrial standards, from design to delivery.</p>
                                </div>
                                <div className=' w-4/6 xl:w-6/6 items-center flex'>
                                    <img src={aboutUsImage2} alt="aboutUsImage" className='w-full h-auto hidden lg:flex' />
                                </div>
                            </div>
                        </section>

                        <section className='mb-12'>
                            <div className="lg:flex lg:items-stretch gap-10">
                                {/* Colonne Texte */}
                                <div className="flex-2 bg-[#ec1c24] rounded-sm mb-6 lg:mb-0">
                                    <p className="text-white font-poppins font-semibold text-[1.1rem] sm:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2.0rem] leading-12 xl:leading-16 text-justify px-8 py-5 h-full">
                                        We empower industrial performance through precision, innovation, and reliability.
                                    </p>
                                </div>

                                {/* Colonne Stats */}
                                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 xl:gap-5">
                                    {[
                                        ['+30', 'Years of experience'],
                                        ['+200', 'Clients in Europe'],
                                        ['+10k', 'Project Realised'],
                                        ['+25', 'Trusted companies']
                                    ].map(([value, label]) => (
                                        <div key={value} className="bg-white flex flex-col items-center justify-center rounded-sm p-2 h-full">
                                            <span className="text-[#ec1c24] font-poppins font-semibold text-[1.8rem]">{value}</span>
                                            <p className="text-center font-poppins text-[0.7rem]">{label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About