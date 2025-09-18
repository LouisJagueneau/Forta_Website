import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from "react-icons/fa6";

// Images
import aboutUsImage from '../assets/About_image.png';
import aboutUsImage2 from '../assets/About_image2 .png';
import backgroundImageV4 from '../assets/backgroundImageV4.jpg';

function About() {
    const { t } = useTranslation();
    
    const { ref: countRef, inView: countInView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div className="font-poppins bg-white">
            
            {/* Hero Section */}
            <section className="relative w-full min-h-[70vh] overflow-hidden">
                {/* Background */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImageV4})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
                </div>

                {/* Animated particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        >
                            <div className="w-1 h-1 bg-[#ec1c24]/40 rounded-full"></div>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 flex items-center justify-center min-h-[70vh] pt-20">
                    <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50 text-center">
                        
                        {/* Subtitle */}
                        <motion.div 
                            initial={{opacity:0, y:30}} 
                            animate={{opacity:1, y:0}} 
                            transition={{duration:0.8}}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <div className="w-12 h-[2px] bg-[#ec1c24]"></div>
                            <span className="uppercase font-poppins text-[#ec1c24] tracking-wider font-semibold text-sm">
                                {t("about_us_upperTitle")}
                            </span>
                            <div className="w-12 h-[2px] bg-[#ec1c24]"></div>
                        </motion.div>

                        {/* Title */}
                        <motion.h1 
                            initial={{opacity:0, scale:0.8}} 
                            animate={{opacity:1, scale:1}} 
                            transition={{duration:0.8, delay:0.2}}
                            className="text-white font-Stock_No_Bills text-[3rem] md:text-[4rem] xl:text-[5rem] leading-tight mb-6"
                        >
                            {t("about_us_heroTitle1")}{" "}
                            <span className="text-[#ec1c24]">{t("about_us_heroTitle2")}</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            initial={{opacity:0, y:30}} 
                            animate={{opacity:1, y:0}} 
                            transition={{duration:0.8, delay:0.4}}
                            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
                        >
                            {t("about_us_heroDescription")}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="w-full py-20 bg-white">
                <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
                    
                    {/* About Us */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-stretch mb-20">
                        <motion.div
                            initial={{opacity:0, x:-50}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:0.8}}
                            viewport={{once:true}}
                            
                        >
                            <span className="uppercase font-poppins text-[#ec1c24] tracking-wider font-medium text-sm mb-4 block">
                                {t('about_us_title')}
                            </span>
                            <h2 className="font-Stock_No_Bills text-3xl md:text-4xl font-semibold mb-6">
                                {t("about_us_h2Title1")} <span className="text-[#ec1c24]">{t("about_us_h2Title2")} </span>
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed mb-6">
                                {t('about_us_paragraph_1')}
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {t('about_us_paragraph_2')}
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity:0, x:50}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:0.8}}
                            viewport={{once:true}}
                            
                        >
                            <div className="flex justify-center">
                                <img 
                                    src={aboutUsImage} 
                                    alt="About Forta" 
                                    className="w-auto h-110 object-cover"
                                />
                            </div>
                            
                        </motion.div>
                    </div>

                    {/* Mission */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{opacity:0, x:-50}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:0.8}}
                            viewport={{once:true}}
                            className="lg:order-2"
                        >
                            <span className="uppercase font-poppins text-[#ec1c24] tracking-wider font-medium text-sm mb-4 block">
                                {t('our_mission_title')}
                            </span>
                            <h2 className="font-Stock_No_Bills text-3xl md:text-4xl font-semibold mb-6">
                                {t("about_us_missionTitle1")} <span className="text-[#ec1c24]">{t("about_us_missionTitle2")} </span>
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {t('our_mission_paragraph')}
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{opacity:0, x:50}}
                            whileInView={{opacity:1, x:0}}
                            transition={{duration:0.8}}
                            viewport={{once:true}}
                            className="lg:order-1 relative"
                        >
                            <div className="overflow-hidden">
                                <img 
                                    src={aboutUsImage2} 
                                    alt="Our Mission" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote & Stats Section */}
            <section className="w-full py-20 bg-gradient-to-r from-[#ec1c24] via-red-500 to-[#ec1c24]">
                <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
                    <div className="bg-white rounded-2xl p-8 md:p-12">
                        
                        {/* Quote */}
                        <motion.div
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.8}}
                            viewport={{once:true}}
                            className="text-center mb-16"
                        >
                            <div className="text-6xl text-[#ec1c24]/20 mb-4">"</div>
                            <blockquote className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-6">
                                {t('about_quote_text')}
                            </blockquote>
                            <div className="w-16 h-[2px] bg-[#ec1c24] mx-auto"></div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div ref={countRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                [30, t('years_experience_label'), '+'],
                                [200, t('clients_europe_label'), '+'],
                                [10, t('projects_realized_label'), 'K+'],
                                [25, t('trusted_companies_label'), '+']
                            ].map(([value, label, suffix], index) => (
                                <motion.div 
                                    key={index}
                                    initial={{opacity:0, y:30}}
                                    whileInView={{opacity:1, y:0}}
                                    transition={{duration:0.8, delay:index * 0.1}}
                                    viewport={{once:true}}
                                    className="text-center group hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                        <div className="text-4xl md:text-5xl font-bold text-[#ec1c24] mb-2">
                                            {countInView && (
                                                <CountUp 
                                                    start={0} 
                                                    end={value} 
                                                    duration={2.5}
                                                    suffix={suffix}
                                                />
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-tight">
                                            {label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
                    
                    <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.8}}
                        viewport={{once:true}}
                        className="text-center mb-16"
                    >
                        <span className="uppercase font-poppins text-[#ec1c24] tracking-wider font-medium text-sm mb-4 block">
                            {t("valor_upperTitle")}
                        </span>
                        <h2 className="font-Stock_No_Bills text-3xl md:text-4xl font-semibold mb-6">
                            {t("valor_Title1")} <span className="text-[#ec1c24]">{t("valor_Title2")}</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: t("valor_value1"),
                                description: t("valor_description1"),
                                icon: "🎯"
                            },
                            {
                                title: t("valor_value2"),
                                description: t("valor_description2"),
                                icon: "💡"
                            },
                            {
                                title: t("valor_value3"),
                                description: t("valor_description3"),
                                icon: "🤝"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity:0, y:30}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.8, delay:index * 0.2}}
                                viewport={{once:true}}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="font-semibold text-xl text-gray-800 mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-white">
                <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
                    <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.8}}
                        viewport={{once:true}}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                           {t("cncPage.cta.title")}
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            {t("cncPage.cta.description")}
                        </p>
                        <button className="group bg-[#ec1c24] hover:bg-[#c71a20] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 mx-auto">
                            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <span>{t("cncPage.cta.buttonContact")}</span>
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default About;