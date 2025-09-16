import React, { useState } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Settings, Cog, Wrench, Zap, Shield, Target, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// Import des images (simulées pour l'exemple)
const CNCPartsImage = '/api/placeholder/600/400';
const CNCTurningImage = '/api/placeholder/400/300';
const CNCMillingImage = '/api/placeholder/400/300';
const CNC5AxesImage = '/api/placeholder/400/300';
const FeedScrew = '/api/placeholder/300/200';
const Flanges = '/api/placeholder/300/200';
const GuidesImages = '/api/placeholder/300/200';
const RingsImage = '/api/placeholder/300/200';
const SlidersImage = '/api/placeholder/300/200';
const TimingScrew = '/api/placeholder/300/200';

function CncParts() {
    const [activeSlide, setActiveSlide] = useState(0);

    // Services CNC
    const cncServices = [
        {
            title: 'Tournage CNC',
            description: 'Usinage de précision pour pièces cylindriques et complexes',
            icon: <Cog className="w-6 h-6" />,
            image: CNCTurningImage,
            specs: ['Précision: ±0.01mm', 'Diamètre max: 500mm', 'Matériaux variés']
        },
        {
            title: 'Fraisage CNC',
            description: 'Fabrication de pièces complexes avec finition haute qualité',
            icon: <Settings className="w-6 h-6" />,
            image: CNCMillingImage,
            specs: ['Multi-axes', 'Surfaces complexes', 'Finition miroir']
        },
        {
            title: 'Usinage 5 Axes',
            description: 'Technologie avancée pour géométries les plus complexes',
            icon: <Target className="w-6 h-6" />,
            image: CNC5AxesImage,
            specs: ['5 axes simultanés', 'Géométries complexes', 'Une seule prise']
        },
        {
            title: 'Découpe Laser',
            description: 'Découpe haute précision pour tous types de matériaux',
            icon: <Zap className="w-6 h-6" />,
            image: CNC5AxesImage,
            specs: ['Épaisseur: 0.5-50mm', 'Découpe fine', 'Contours précis']
        },
        {
            title: 'Soudage Spécialisé',
            description: 'Assemblage professionnel avec contrôle qualité',
            icon: <Shield className="w-6 h-6" />,
            image: CNC5AxesImage,
            specs: ['Soudage TIG/MIG', 'Contrôle qualité', 'Finition soignée']
        },
        {
            title: 'Pliage & Formage',
            description: 'Mise en forme précise de tôles et profilés',
            icon: <Wrench className="w-6 h-6" />,
            image: CNC5AxesImage,
            specs: ['Angles précis', 'Rayons maîtrisés', 'Dimensions stables']
        }
    ];

    // Types de pièces
    const parts = [
        {
            name: 'Vis d\'alimentation',
            img: FeedScrew,
            category: 'Transmission'
        },
        {
            name: 'Brides & Raccords',
            img: Flanges,
            category: 'Assemblage'
        },
        {
            name: 'Guides Linéaires',
            img: GuidesImages,
            category: 'Guidage'
        },
        {
            name: 'Anneaux & Joints',
            img: RingsImage,
            category: 'Étanchéité'
        },
        {
            name: 'Coulisseaux',
            img: SlidersImage,
            category: 'Mouvement'
        },
        {
            name: 'Vis de Réglage',
            img: TimingScrew,
            category: 'Réglage'
        }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % Math.ceil(cncServices.length / 3));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + Math.ceil(cncServices.length / 3)) % Math.ceil(cncServices.length / 3));
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-black/85 to-black overflow-hidden">
                {/* Geometric background pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#ec1c24]/20 rotate-45"></div>
                    <div className="absolute top-40 right-32 w-24 h-24 bg-[#ec1c24]/10 rotate-12"></div>
                    <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rotate-45"></div>
                    <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-[#ec1c24]/20 to-transparent rotate-45"></div>

                    {/* Floating particles */}
                    {[...Array(15)].map((_, i) => (
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

                <div className="relative z-10 container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50 min-h-[80vh] flex items-center mt-15">
                    <div className="grid lg:grid-cols-5 gap-16 items-stretch w-full">

                        {/* Left Content */}
                        <div className="space-y-8 lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-[2px] bg-[#ec1c24]"></div>
                                    <span className="uppercase font-poppins text-[#ec1c24] tracking-wider font-semibold text-sm">
                                        Usinage CNC
                                    </span>
                                </div>

                                <h1 className="font-Stock_No_Bills text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.9] text-white mb-6">
                                    <span className="block">Usinage</span>
                                    <span className="block text-[#ec1c24]">CNC</span>
                                    <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-400 mt-2">
                                        Haute Précision
                                    </span>
                                </h1>

                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                                    Excellence technique et précision millimétrique pour tous vos projets d'usinage.
                                    <span className="text-white font-medium"> Technologie de pointe</span> au service
                                    de vos ambitions industrielles.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        className="group bg-[#ec1c24] hover:bg-[#c71a20] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                                        onClick={() => { const services = document.getElementById('services'); if (services) { services.scrollIntoView({ behavior: 'smooth' }) } }}
                                    >
                                        <span>Découvrir nos services</span>
                                        <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="group border-2 border-gray-400 hover:border-[#ec1c24] text-gray-400 hover:text-[#ec1c24] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                                        <span>Demander un devis</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Visual */}
                        <div className="h-full hidden lg:flex lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="relative w-full h-full"
                            >
                                {/* Main Card */}
                                <div className="bg-gradient-to-br h-full from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-md p-4 transform hover:scale-105 transition-all duration-300">
                                    <img className='rounded-md h-full w-full object-cover' src={CNCPartsImage} alt="CNC Parts" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Light Theme Slider */}
            <div id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">

                <div className="relative container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-red-500"></div>
                            <span className="text-red-600 uppercase tracking-wider text-sm font-medium">Nos Services</span>
                            <div className="w-12 h-0.5 bg-red-500"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
                            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                                Technologies CNC
                            </span>
                            
                        </h2>
                        <p className="text-lg text-gray-600 font-poppins max-w-3xl mx-auto">
                            Une gamme complète de services d'usinage pour répondre à tous vos besoins industriels
                        </p>
                    </div>

                    {/* Slider Container - Fixed */}
                    <div className="relative mx-auto">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {Array.from({ length: Math.ceil(cncServices.length / 3) }, (_, slideIndex) => (
                                    <div key={slideIndex} className="min-w-full">
                                        <div className="p-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {cncServices.slice(slideIndex * 3, slideIndex * 3 + 3).map((service, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                                        className="group relative bg-white border border-gray-200 hover:border-red-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-sm transition-all duration-300 hover:transform hover:scale-[103%] h-full"
                                                    >
                                                        {/* Glow Effect */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/2 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                        {/* Image Container with Overlay */}
                                                        <div className="relative h-56 overflow-hidden">
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                                                            <img
                                                                src={service.image}
                                                                alt={service.title}
                                                                className="w-full h-full object-cover group-hover:scale-[103%] transition-transform duration-300"
                                                            />

                                                            {/* Floating Icon */}
                                                            <div className="absolute top-4 right-4 z-20">
                                                                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-md group-hover:rotate-90 transition-transform duration-300">
                                                                    {service.icon}
                                                                </div>
                                                            </div>

                                                            {/* Animated Border */}
                                                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                                                        </div>

                                                        {/* Content */}
                                                        <div className="relative z-10 p-6 text-gray-800">
                                                            <h3 className="text-xl font-semibold font-poppins mb-3">
                                                                {service.title}
                                                            </h3>
                                                            <p className="text-gray-600 font-poppins text-[0.9rem] mb-6 leading-relaxed">
                                                                {service.description}
                                                            </p>

                                                            {/* Specs with Icons */}
                                                            <div className="space-y-3 mb-6">
                                                                {service.specs.map((spec, idx) => (
                                                                    <div key={idx} className="flex items-center gap-3 group/spec">
                                                                        <div className="w-6 h-6 rounded-full border border-red-500/30 flex items-center justify-center group-hover/spec:bg-red-500/10 transition-colors duration-300">
                                                                            <div className="w-2 h-2 bg-red-500 rounded-full group-hover/spec:scale-125 transition-transform duration-300"></div>
                                                                        </div>
                                                                        <span className="text-sm text-gray-500 group-hover/spec:text-gray-700 transition-colors duration-300">
                                                                            {spec}
                                                                        </span>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                        </div>

                                                        {/* Decorative Elements */}
                                                        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-center mt-12 gap-6">
                            <button
                                onClick={prevSlide}
                                className="group p-4 bg-white hover:bg-red-600 border border-gray-200 hover:border-red-500 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <FaChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                            </button>

                            <div className="flex gap-3">
                                {Array.from({ length: Math.ceil(cncServices.length / 3) }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSlide(index)}
                                        className={`transition-all duration-300 rounded-full ${index === activeSlide
                                                ? "w-12 h-3 bg-red-500"
                                                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="group p-4 bg-white hover:bg-red-600 border border-gray-200 hover:border-red-500 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <FaChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Types de Pièces Section */}
            <div className="relative py-20 bg-gradient-to-br from-black via-black/85 to-black">
                <div className="container mx-auto px-6 md:px-10 xl:px-30 2xl:px-50">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-red-500"></div>
                            <span className="text-red-400 uppercase tracking-wider text-sm font-medium">Notre Production</span>
                            <div className="w-12 h-0.5 bg-red-500"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                Types de Pièces Usinées
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 font-poppins max-w-3xl mx-auto">
                            Fabrication sur mesure de pièces techniques de haute précision
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {parts.map((part, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                                    <img src={part.img} alt={part.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            {part.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="relative z-10 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {part.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Pièce technique usinée selon vos spécifications
                                    </p>
                                    <button className="group text-red-400 hover:text-red-300 font-medium flex items-center gap-2 transition-colors">
                                        <span>Voir détails</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-20 bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10"></div>
                <div className="relative container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                            Prêt à concrétiser ?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contactez nos experts en usinage CNC pour discuter de votre projet et obtenir un devis personnalisé
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group bg-gradient-to-r text-white from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
                            <span>Demander un devis</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="group border-2 border-gray-400 hover:border-red-600 text-gray-600 hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                            <span>Nous Contacter</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CncParts;