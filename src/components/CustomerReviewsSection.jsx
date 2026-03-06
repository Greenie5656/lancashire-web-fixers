import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar, Sparkles } from "lucide-react";

// scrollToForm function would be imported from utils
const scrollToForm = () => {
  const formElement = document.getElementById('enquiry-form');
  if (formElement) {
    formElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const CustomerReviewsSection = () => {
    const [activeReview, setActiveReview] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const reviews = [
        {
            id: 1,
            name: "Ryan Hughes",
            location: "Sweet Bros, Lancashire",
            rating: 5,
            date: "October 2025",
            review: "Amazing service and guidance from start to finish. Nothing was ever to much trouble and I would highly recommend Lancashire Web Fixers. Since the website launch they have only ever been a message away for any queries. Thank you for creating the perfect website 🙌🏻",
            service: "Custom Shopify FrontEnd & Hosting",
            avatar: "RH",
            color: "bg-green-500"
        },
        {
            id: 2,
            name: "Michael Davies",
            location: "BNCY Music, Lancashire",
            rating: 5,
            date: "March 2025",
            review: "Needed custom Spotify chart integration on our Wix site to show real-time sales and popularity data. The team built a brilliant React solution using Spotify and Wix APIs - exactly what we needed for our record label. Professional hosting and seamless integration!",
            service: "Custom API Integration & Hosting",
            avatar: "MD",
            color: "bg-purple-500"
        },
        {
            id: 3,
            name: "Chris Poole",
            location: "The Alchemy Gym, Darwen",
            rating: 5,
            date: "February 2025",
            review: "Built our WordPress site from scratch and provides ongoing maintenance - blogs, news updates, class schedules, everything. As a Hyrox competitor, I need my gym's online presence to be as strong as my training. They deliver every time!",
            service: "WordPress Development & Maintenance",
            avatar: "CP",
            color: "bg-orange-500"
        },
        {
            id: 4,
            name: "Ben Lee",
            location: "Bad Behaviour, Lancashire",
            rating: 5,
            date: "January 2025",
            review: "Perfect website showcasing our latest music and events. Built from the ground up with ongoing updates for new releases and gigs. The team understands the music industry and delivered exactly what we needed for our dance music act.",
            service: "Music Industry Website & Updates",
            avatar: "BL",
            color: "bg-blue-500"
        },
        {
            id: 5,
            name: "A2A Couriers",
            location: "A2A Couriers, Lancashire",
            rating: 5,
            date: "March 2026",
            review: "Andrew and the team at Lancashire Web Fixers are something else...they totally understand your needs, execute every detail with expert knowledge at a very competitive price. Andrew was always updating me and was on hand during the build, nothing is too much trouble...10/10 from start to finish!!",
            service: "Website Design & Development",
            avatar: "A2",
            color: "bg-red-500"
        },
        {
            id: 6,
            name: "Feal Electrical Automotive Ltd",
            location: "Feal Electrical Automotive Ltd, Lancashire",
            rating: 5,
            date: "March 2026",
            review: "Andrew at Lancashire Web Fixers helped create my company website and what a job he did. He took everything I asked for and delivered it exactly how I wanted. The website was up within a week, which is seriously impressive. I highly recommend him, great to talk to, easy to work with, and patient too. At one point I completely changed my mind about the design, and he didn't complain once, just got on with it and made every change I asked for.",
            service: "Website Design & Development",
            avatar: "FE",
            color: "bg-yellow-500"
        }
    ];

    // Auto-rotate featured review
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % reviews.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextReview = () => {
        setActiveReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30, scale: 0.9 },
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

    const carouselVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateY: -10 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1
            }
        })
    };

    const trustVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: index * 0.2
            }
        })
    };

    return (
        <section 
            ref={sectionRef} 
            className="bg-white py-16 px-4 relative overflow-hidden"
            style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgb(229, 231, 235) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }}
        >
            {/* Animated background elements */}
            <motion.div
                className="absolute top-10 right-10 w-64 h-64 bg-imperial-red/5 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
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
                    <motion.h2 
                        className="text-4xl md:text-5xl font-extrabold text-black mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        We've Fixed More Than Just Code
                        <motion.span 
                            className="inline-block ml-2"
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            🛠️
                        </motion.span>
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Don't just take our word for it - here's what our Lancashire clients say about working with us
                    </motion.p>
                </motion.div>

                {/* Featured Review Carousel */}
                <motion.div 
                    className="mb-16"
                    variants={carouselVariants}
                >
                    <div className="relative bg-imperial-red rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                        {/* Animated Quote Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Quote className="absolute top-6 left-6 w-12 h-12 text-white/30" />
                        </motion.div>
                        
                        {/* Navigation Arrows */}
                        <motion.button 
                            onClick={prevReview}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 z-10"
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous review"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        <motion.button 
                            onClick={nextReview}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 z-10"
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next review"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </motion.button>

                        {/* Review Content with AnimatePresence for smooth transitions */}
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeReview}
                                className="text-center max-w-4xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex justify-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 + 0.2 }}
                                        >
                                            <Star className="w-8 h-8 text-yellow-300 fill-current" />
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                                    "{reviews[activeReview].review}"
                                </blockquote>
                                
                                <div className="flex items-center justify-center space-x-4">
                                    <motion.div 
                                        className={`w-16 h-16 ${reviews[activeReview].color} rounded-full flex items-center justify-center text-white font-bold text-xl`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        {reviews[activeReview].avatar}
                                    </motion.div>
                                    <div className="text-left">
                                        <div className="font-bold text-xl">{reviews[activeReview].name}</div>
                                        <div className="flex items-center text-white/80">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {reviews[activeReview].location}
                                        </div>
                                        <div className="text-sm text-white/70">{reviews[activeReview].service}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {reviews.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveReview(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                        index === activeReview ? 'bg-white' : 'bg-white/40'
                                    }`}
                                    whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Review Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            custom={index}
                            variants={cardVariants}
                            className="relative bg-black rounded-xl p-6 border-2 border-gray-700 hover:border-imperial-red-500 transition-colors duration-300"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(255, 0, 54, 0.3)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Sparkle effect on hover */}
                            <motion.div
                                className="absolute -top-1 -right-1"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Sparkles className="w-5 h-5 text-imperial-red-500" />
                            </motion.div>

                            {/* Review Header */}
                            <div className="flex items-center mb-4">
                                <motion.div 
                                    className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {review.avatar}
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <div className="flex items-center text-white text-sm">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {review.location}
                                    </div>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, rotate: -180 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                    >
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    </motion.div>
                                ))}
                                <span className="ml-2 text-sm text-white flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {review.date}
                                </span>
                            </div>

                            {/* Review Text */}
                            <p className="text-white text-sm leading-relaxed mb-3">
                                "{review.review}"
                            </p>

                            {/* Service Tag */}
                            <motion.div 
                                className="inline-block bg-imperial-red-100 text-imperial-red-700 px-3 py-1 rounded-full text-xs font-medium"
                                whileHover={{ scale: 1.05 }}
                            >
                                {review.service}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                    {[
                        { value: "5.0", label: "Average Rating", stars: true },
                        { value: "30+", label: "Years Experience", stars: false },
                        { value: "100%", label: "Client Satisfaction", stars: false }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={trustVariants}
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div 
                                className="text-4xl font-extrabold text-imperial-red mb-2"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 200,
                                    delay: index * 0.2 + 1
                                }}
                            >
                                {item.value}
                            </motion.div>
                            {item.stars && (
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                            transition={{ delay: i * 0.05 + 1.2 }}
                                        >
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                            <div className="text-gray-600">{item.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                >
                    <p className="text-xl text-gray-700 mb-6">
                        Ready to join our happy clients?
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
                        Get Started Below ↓
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CustomerReviewsSection;