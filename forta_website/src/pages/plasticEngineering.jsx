import React, { useState } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Droplet, FlaskRound, Shield, Thermometer, Settings, Recycle, Lightbulb, Wrench, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import PlasticEngineeringImage from '../assets/PlasticEngineeringImage.png'
import PlasticRods from '../assets/PlasticRods.png'
import PlasticSheetSlider from '../assets/PlasticSheetSlider.png'



function PlasticEngineering() {
    const [activeSlide, setActiveSlide] = useState(0);
    
    const plastics = [
        {
            name: 'Polypropylène (PP)',
            description: 'Matériau versatile avec excellente résistance chimique et propriétés mécaniques',
            icon: <FlaskRound className="w-6 h-6" />,
            properties: ['Résistant chimique', 'Léger', 'Recyclable']
        },
        {
            name: 'Polyéthylène HD (PEHD)',
            description: 'Haute densité, parfait pour les applications industrielles exigeantes',
            icon: <Droplet className="w-6 h-6" />,
            properties: ['Haute densité', 'Résistant UV', 'Non-toxique']
        },
        {
            name: 'PE 300/500/1000',
            description: 'Gamme ultra haute performance pour applications critiques',
            icon: <Recycle className="w-6 h-6" />,
            properties: ['Ultra résistant', 'Auto-lubrifiant', 'Longue durée']
        },
        {
            name: 'Polyamide 6 (PA6)',
            description: 'Excellente résistance mécanique et à l\'abrasion',
            icon: <Wrench className="w-6 h-6" />,
            properties: ['Haute résistance', 'Anti-abrasion', 'Précis']
        },
        {
            name: 'POM-C (Acetal)',
            description: 'Précision dimensionnelle et stabilité exceptionnelles',
            icon: <Settings className="w-6 h-6" />,
            properties: ['Précis', 'Stable', 'Usinable']
        },
        {
            name: 'PTFE (Téflon)',
            description: 'Propriétés antiadhésives et résistance thermique incomparables',
            icon: <Thermometer className="w-6 h-6" />,
            properties: ['Antiadhésif', 'Haute température', 'Inerte']
        }
    ];

    const products = [
        {
            title: 'Plaques Techniques',
            description: 'Plaques haute performance sur mesure pour tous vos besoins industriels',
            image: '/api/placeholder/400/300',
            specs: ['Épaisseur: 5–100 mm', 'Couleurs: Blanc, Noir, Bleu, Rouge', 'Découpe sur mesure'],
            category: 'Plaques',
            img: PlasticSheetSlider
        },
        {
            title: 'Barres & Profilés',
            description: 'Barres rondes et profilés techniques de haute qualité',
            image: '/api/placeholder/400/300',
            specs: ['Diamètre: 10–200 mm', 'Longueurs standards', 'Usinage de précision'],
            category: 'Barres',
            img: PlasticRods
        },
        {
            title: 'Pièces Sur Mesure',
            description: 'Conception et fabrication de pièces techniques personnalisées',
            image: '/api/placeholder/400/300',
            specs: ['Prototypage rapide', 'Série industrielle', 'Contrôle qualité'],
            category: 'Sur mesure',
            img: PlasticSheetSlider
        }
    ];

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <>
        {/* Hero Section */}
            <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-black/85 to-black overflow-hidden">
                {/* Geometric background pattern */}
                <div className="absolute inset-0 ">
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
                    <div className="grid lg:grid-cols-5 gap-16 items-strecth w-full">
                        
                        {/* Left Content */}
                        <div className="space-y-8 lg:col-span-3">
                            <motion.div 
                                initial={{opacity:0, x:-50}} 
                                animate={{opacity:1, x:0}} 
                                transition={{duration:0.8}}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-[2px] bg-[#ec1c24]"></div>
                                    <span className="uppercase font-poppins text-[#ec1c24] tracking-wider font-semibold text-sm">
                                        Ingénieurie Plastique
                                    </span>
                                </div>
                                
                                <h1 className="font-Stock_No_Bills text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.9] text-white mb-6">
                                    <span className="block">Matériaux</span>
                                    <span className="block text-[#ec1c24]">Plastiques</span>
                                    <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-400 mt-2">
                                        Sur Mesure 
                                    </span>
                                </h1>
                                
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                                    Transformez vos défis industriels en succès avec nos solutions d'ingénierie plastique. 
                                    <span className="text-white font-medium"> Plus de 30 ans d'innovation</span> au service 
                                    de la précision technique.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        className="group bg-[#ec1c24] hover:bg-[#c71a20] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                                        onClick={() => { const materials = document.getElementById('materials'); if (materials) { materials.scrollIntoView({ behavior: 'smooth' }) } }}
                                    >
                                        <span>Explorer nos matériaux</span>
                                        <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="group border-2 border-gray-400 hover:border-[#ec1c24] text-gray-400 hover:text-[#ec1c24] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                                        <span>Nous Contacter</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Visual */}
                        <div className="h-full flex lg:col-span-2 ">
                            <motion.div
                                initial={{opacity:0, x:50, scale:0.8}}
                                animate={{opacity:1, x:0, scale:1}}
                                transition={{duration:1, delay:0.3}}
                                className="relative"
                            >
                                {/* Main Card */}
                                <div className="bg-gradient-to-br h-full from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-md p-4 transform hover:scale-105 transition-all duration-300">
                                <img className='rounded-md h-full w-full object-cover' src={PlasticEngineeringImage} alt="" />
                                </div>
                                    

                                {/* Floating Elements */}
                            </motion.div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Section Matériaux avec design hexagonal */}
            <div className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 ">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-[#ec1c24] rounded-full"></div>
                            <span className="text-[#ec1c24] uppercase tracking-wider text-sm font-medium">Matériaux Experts</span>
                            <div className="w-12 h-0.5 bg-[#ec1c24] rounded-full"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                                Technologies Avancées
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 font-poppins max-w-3xl mx-auto">
                            Une sélection rigoureuse de matériaux haute performance pour répondre aux défis les plus exigeants
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {plastics.map((plastic, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-gray-50/50 to-gray-100/50 backdrop-blur-sm border border-gray-300/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {plastic.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-black/80 mb-4">
                                        {plastic.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {plastic.description}
                                    </p>
                                    <div className="space-y-2"> 
                                        {plastic.properties.map((prop, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                <span className="text-sm text-gray-500">{prop}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section Produits avec slider interactif */}
            <div className="relative py-20 bg-gradient-to-br from-black via-black/85 to-black">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-0.5 bg-red-500"></div>
                            <span className="text-red-400 uppercase tracking-wider text-sm font-medium">Notre Gamme</span>
                            <div className="w-12 h-0.5 bg-red-500"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                                Solutions Techniques
                            </span>
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl">
                            <div 
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                            >
                                {products.map((product, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden h-96">
                                            <div className="grid lg:grid-cols-2 h-full">
                                                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>
                                                    <div className="flex items-center justify-center h-full">
                                                        <img src={product.img} alt={product.img} className='flex h-full w-full' />
                                                    </div>
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                            {product.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6 lg:p-8 flex flex-col justify-center">
                                                    <h3 className="text-2xl font-bold text-white mb-3">
                                                        {product.title}
                                                    </h3>
                                                    <p className="text-gray-200 mb-6 text-base leading-relaxed">
                                                        {product.description}
                                                    </p>
                                                    <div className="space-y-2 mb-6">
                                                        {product.specs.slice(0, 2).map((spec, idx) => (
                                                            <div key={idx} className="flex items-center gap-2">
                                                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                                <span className="text-sm text-gray-300">{spec}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <button className="group text-white  bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 w-fit text-sm">
                                                        <span>En savoir plus</span>
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation du slider */}
                        <div className="flex items-center justify-center mt-8 gap-4">
                            <button
                                onClick={prevSlide}
                                className="p-3 bg-black/50 text-white hover:bg-red-600 border border-white/40 hover:border-red-500 rounded-full transition-all duration-300"
                            >
                                <FaChevronLeft className="w-4 h-4" />
                            </button>
                            
                            <div className="flex gap-2">
                                {products.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === activeSlide ? 'bg-red-500 w-8' : 'bg-white/20 hover:bg-slate-500'
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            <button
                                onClick={nextSlide}
                                className="p-3 bg-black/50 text-white hover:bg-red-600 border border-white/40 hover:border-red-500 rounded-full transition-all duration-300"
                            >
                                <FaChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section finale */}
            <div className="relative py-20 bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10"></div>
                <div className="relative container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                            Prêt à innover ?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contactez nos experts pour discuter de votre projet et découvrir nos solutions sur mesure
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group bg-gradient-to-r text-white from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
                            <span>Demander un devis</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
                }
                .animate-float {
                    animation: float infinite ease-in-out;
                }
            `}</style>
        </>
    );
}

export default PlasticEngineering;