import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User, MapPin, Calendar } from "lucide-react";
import { SymbolLogo } from "./Logo";

const CustomerReviewsSection = () => {
    const [activeReview, setActiveReview] = useState(0);
    const [visibleReviews, setVisibleReviews] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const reviews = [
        {
            id: 1,
            name: "Sarah Mitchell",
            location: "Preston, Lancashire",
            rating: 5,
            date: "March 2025",
            review: "Absolutely brilliant! They completely transformed our outdated website into something modern and professional. The team understood our vision perfectly and delivered beyond expectations.",
            service: "Full Website Redesign",
            avatar: "SM",
            color: "bg-blue-500"
        },
        {
            id: 2,
            name: "James Thompson",
            location: "Blackpool, Lancashire",
            rating: 5,
            date: "February 2025",
            review: "Lost our previous web developer and Lancashire Web Fixers saved the day! Quick response, fair pricing, and they fixed everything that was broken. Highly recommended!",
            service: "Website Maintenance",
            avatar: "JT",
            color: "bg-green-500"
        },
        {
            id: 3,
            name: "Emma Richardson",
            location: "Lancaster, Lancashire",
            rating: 5,
            date: "January 2025",
            review: "From concept to launch, they handled everything professionally. The Shopify integration works perfectly and our online sales have increased by 40% since the redesign.",
            service: "E-commerce Development",
            avatar: "ER",
            color: "bg-purple-500"
        },
        {
            id: 4,
            name: "Michael Davies",
            location: "Burnley, Lancashire",
            rating: 5,
            date: "December 2024",
            review: "30 years of experience really shows! They understood our industry-specific needs and created a website that perfectly represents our brand. Great communication throughout.",
            service: "Custom Web Development",
            avatar: "MD",
            color: "bg-orange-500"
        },
        {
            id: 5,
            name: "Lisa Parker",
            location: "Chorley, Lancashire",
            rating: 5,
            date: "November 2024",
            review: "The team's expertise in both frontend and backend development is impressive. They solved complex technical issues that our previous developer couldn't handle.",
            service: "Full-Stack Development",
            avatar: "LP",
            color: "bg-pink-500"
        }
    ];

    // Intersection observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    // Cascade animation for review cards
                    reviews.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleReviews(prev => [...prev, index]);
                        }, index * 200);
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Auto-rotate featured review
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % reviews.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    // Reset activeReview if it's out of bounds (e.g., after removing reviews)
    useEffect(() => {
        if (activeReview >= reviews.length) {
            setActiveReview(0);
        }
    }, [reviews.length, activeReview]);

    const nextReview = () => {
        setActiveReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section ref={sectionRef} className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                        We've Fixed More Than Just Code
                        <span className="text-imperial-red ml-2">🛠️</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                        Don't just take our word for it - here's what our Lancashire clients say about working with us
                    </p>
                </div>

                {/* Featured Review Carousel */}
                <div className={`mb-16 transition-all duration-1000 delay-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                    <div className="relative bg-imperial-red-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                        {/* Quote Icon */}
                        <Quote className="absolute top-6 left-6 w-12 h-12 text-white/30" />
                        
                        {/* Navigation Arrows */}
                        <button 
                            onClick={prevReview}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextReview}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Review Content */}
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="flex justify-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
                                ))}
                            </div>
                            
                            <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                                "{reviews[activeReview].review}"
                            </blockquote>
                            
                            <div className="flex items-center justify-center space-x-4">
                                <div className={`w-16 h-16 ${reviews[activeReview].color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                                    {reviews[activeReview].avatar}
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-xl">{reviews[activeReview].name}</div>
                                    <div className="flex items-center text-white/80">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {reviews[activeReview].location}
                                    </div>
                                    <div className="text-sm text-white/70">{reviews[activeReview].service}</div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveReview(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                        index === activeReview ? 'bg-white' : 'bg-white/40'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Review Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className={`
                                relative bg-black rounded-xl p-6 border-2 border-gray-700 hover:border-imperial-red-500
                                transition-all duration-700 transform hover:scale-105 hover:shadow-lg
                                ${visibleReviews.includes(index) 
                                    ? "opacity-100 translate-y-0" 
                                    : "opacity-0 translate-y-8"
                                }
                            `}
                            style={{
                                transitionDelay: `${index * 200}ms`
                            }}                            
                        >
                            <div className="absolute top-1 right-1 z-10 w-20 h-20">
                                <SymbolLogo className="w-full h-full object-contain opacity-40" />
                            </div>
                            {/* Review Header */}
                            <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                                    {review.avatar}
                                </div>
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
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
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
                            <div className="inline-block bg-imperial-red-100 text-imperial-red-700 px-3 py-1 rounded-full text-xs font-medium">
                                {review.service}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl font-extrabold text-imperial-red mb-2">5.0</div>
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <div className="text-gray-600">Average Rating</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                            <div className="text-4xl font-extrabold text-imperial-red mb-2">30+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                            <div className="text-4xl font-extrabold text-imperial-red mb-2">100%</div>
                            <div className="text-gray-600">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`mt-12 text-center transition-all duration-1000 delay-1200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                    <p className="text-xl text-gray-700 mb-6">
                        Ready to join our happy clients?
                    </p>
                    <button className="bg-imperial-red-500 hover:bg-imperial-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                        Get Your Free Quote
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviewsSection;