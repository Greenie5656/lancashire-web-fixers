import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const AreasServedSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const areas = [
        { name: "Preston", featured: true },
        { name: "Blackpool", featured: true },
        { name: "Blackburn", featured: false },
        { name: "Burnley", featured: false },
        { name: "Bolton", featured: false },
        { name: "Manchester", featured: false },
        { name: "Lancaster", featured: false },
        { name: "Lancashire", featured: true }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const areaVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section 
            ref={sectionRef} 
            className="bg-black py-16 px-4 relative overflow-hidden"
        >
            {/* Animated map-like background pattern */}
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 0, 54, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 0, 54, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div 
                className="max-w-7xl mx-auto relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    variants={headerVariants}
                >
                    <motion.div
                        className="inline-block mb-4"
                        animate={{ 
                            y: [0, -10, 0],
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    >
                        <MapPin className="w-12 h-12 text-imperial-red mx-auto" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Proudly Serving Lancashire
                    </h2>
                    <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                        Professional web design and development across the North West
                    </p>
                </motion.div>

                {/* Areas Grid */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                    variants={containerVariants}
                >
                    {areas.map((area, index) => (
                        <motion.div
                            key={index}
                            variants={areaVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: area.featured 
                                    ? "0 20px 40px rgba(255, 0, 54, 0.3)"
                                    : "0 10px 30px rgba(255, 0, 54, 0.2)"
                            }}
                            className={`
                                relative group cursor-pointer
                                ${area.featured 
                                    ? 'bg-gradient-to-br from-imperial-red-500 to-imperial-red-700' 
                                    : 'bg-gray-800 hover:bg-gray-700'
                                }
                                rounded-xl p-6 border-2 
                                ${area.featured ? 'border-imperial-red-400' : 'border-gray-700 hover:border-imperial-red-500'}
                                transition-all duration-300 shadow-lg
                            `}
                        >
                            {/* Featured badge */}
                            {area.featured && (
                                <motion.div
                                    className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                                >
                                    ⭐ Featured
                                </motion.div>
                            )}

                            <div className="flex flex-col items-center text-center">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <CheckCircle2 className={`w-8 h-8 mb-3 ${area.featured ? 'text-white' : 'text-imperial-red-400'}`} />
                                </motion.div>
                                <h3 className={`text-xl font-bold ${area.featured ? 'text-white' : 'text-white'}`}>
                                    {area.name}
                                </h3>
                                {area.featured && (
                                    <p className="text-sm text-white/80 mt-2">
                                        High demand area
                                    </p>
                                )}
                            </div>

                            {/* Pulse effect for featured areas */}
                            {area.featured && (
                                <motion.div
                                    className="absolute inset-0 rounded-xl bg-imperial-red-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: [0, 0.2, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Coverage Statement */}
                <motion.div 
                    className="text-center bg-gray-800 rounded-2xl p-8 border-2 border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 1 }}
                    whileHover={{ 
                        borderColor: "rgb(255, 0, 54)",
                        boxShadow: "0 20px 40px rgba(255, 0, 54, 0.2)"
                    }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Based in Lancashire, Serving the North West
                    </h3>
                    <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Whether you need <span className="text-imperial-red font-bold">web design in Preston</span>, <span className="text-imperial-red font-bold">Blackpool</span>, or anywhere across <span className="text-imperial-red font-bold">Lancashire</span>, we're here to help. We also work with businesses in <span className="text-imperial-red font-bold">Manchester, Bolton, Burnley, Blackburn, and Lancaster</span>. Local meetings available, or we can work remotely - whatever suits you best.
                    </p>
                    
                    <motion.div 
                        className="mt-6 inline-flex items-center space-x-2 text-imperial-red-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <MapPin className="w-5 h-5" />
                        <span className="font-bold">30+ Years Local Experience</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AreasServedSection;