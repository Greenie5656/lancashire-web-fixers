import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Calendar, Database, Code, Wrench, Sparkles } from "lucide-react";

const scrollToForm = () => {
  const formElement = document.getElementById('enquiry-form');
  if (formElement) {
    formElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const ServicesSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.15 }); // Lower threshold for mobile compatibility

    const services = [
        {
            icon: <ShoppingCart className="w-10 h-10" />,
            title: "Shopify Ecommerce Websites",
            description: "Launch your online store with our expert Shopify ecommerce website design in Lancashire. From product listings to payment integration, we build stores that sell.",
            keywords: "Shopify ecommerce website Lancashire",
            color: "from-green-500 to-emerald-600",
            hoverColor: "group-hover:shadow-green-500/50"
        },
        {
            icon: <Calendar className="w-10 h-10" />,
            title: "Booking Website Design",
            description: "Need an online booking system for your small business? Perfect for salons, gyms, and trades. Accept bookings 24/7 with our custom booking website design.",
            keywords: "Booking system for salons UK",
            color: "from-blue-500 to-cyan-600",
            hoverColor: "group-hover:shadow-blue-500/50"
        },
        {
            icon: <Database className="w-10 h-10" />,
            title: "CRM Systems",
            description: "Streamline your business with a custom CRM system for small businesses in the UK. Track customers, manage leads, and boost productivity.",
            keywords: "CRM system for small business UK",
            color: "from-purple-500 to-violet-600",
            hoverColor: "group-hover:shadow-purple-500/50"
        },
        {
            icon: <Code className="w-10 h-10" />,
            title: "Custom Business Apps",
            description: "As a custom business app developer in Lancashire, we build bespoke solutions that fit your exact needs - from inventory systems to client portals.",
            keywords: "Custom business app developer Lancashire",
            color: "from-orange-500 to-red-600",
            hoverColor: "group-hover:shadow-orange-500/50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
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
        <section ref={sectionRef} className="bg-gray-900 py-16 px-4 relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: "radial-gradient(circle at 20% 50%, rgba(255, 0, 54, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)"
                }}
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
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
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Wrench className="w-12 h-12 text-imperial-red mx-auto" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Web Design Lancashire Services
                    </h2>
                    <p className="text-xl text-white font-light max-w-3xl mx-auto">
                        From <span className="text-imperial-red font-bold">website design in Lancashire</span> to advanced booking systems - we've got your business covered across <span className="text-imperial-red font-bold">Preston, Blackpool, and beyond</span>
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="group relative"
                        >
                            <div className={`relative bg-gray-900 rounded-2xl p-8 border-2 border-gray-700 hover:border-imperial-red-500 transition-all duration-300 shadow-2xl ${service.hoverColor}`}>
                                {/* Gradient overlay on hover */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                />
                                
                                {/* Icon with gradient background */}
                                <motion.div 
                                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 relative z-10`}
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.icon}
                                </motion.div>

                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                                    {service.title}
                                </h3>
                                <p className="text-gray-100 text-lg leading-relaxed mb-4 relative z-10 font-light">
                                    {service.description}
                                </p>

                                {/* Keyword badge */}
                                <div className="inline-block bg-imperial-red/30 border-2 border-imperial-red text-white px-4 py-2 rounded-full text-sm font-bold relative z-10">
                                    {service.keywords}
                                </div>

                                {/* Sparkle effect */}
                                <motion.div
                                    className="absolute top-4 right-4"
                                    initial={{ scale: 0, rotate: 0 }}
                                    whileHover={{ scale: 1, rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Sparkles className="w-6 h-6 text-imperial-red-400" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-xl text-white mb-6">
                        Looking for expert <span className="text-imperial-red font-bold">web design in Preston</span> or <span className="text-imperial-red font-bold">Blackpool</span>?
                    </p>
                    <motion.button 
                        onClick={scrollToForm}
                        className="bg-imperial-red hover:bg-imperial-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(255, 0, 54, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Your Free Quote 🚀
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ServicesSection;