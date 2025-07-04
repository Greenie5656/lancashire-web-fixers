import React, { useState, useEffect, useRef } from "react";
import { HelpCircle, Wrench, Lightbulb, Zap } from "lucide-react";
import { scrollToForm } from '../utils/scrollToForm';

const ScrollAnimationSection = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
    
    const messages = [
        "Is your website feeling a little outdated?",
        "Lost your web guy and need help?",
        "Got an idea but don't know where to start?",
        "Let us fix it, fast."
        
    ];

    const usps = [
        "Lancashire-based, but we think big",
    "30 years of experience",
    "Full-stack expertise",
    "Shopify & WordPress specialists",
    "In-person meetings available",
    "Digital builders, not just coders"
    ]

    const handleMessageComplete = (index) => {
        // Start the next message after a brief pause
        setTimeout(() => {
            setCurrentMessageIndex(index + 1);
        }, 500);
    };

    return (
        <section className="bg-black py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-16">
                    Let's Talk About Your Website
                </h2>

                <div className="space-y-12">
                    {messages.map((message, index) => (
                        <FixedAnimatedMessage
                            key={index}
                            message={message}
                            index={index}
                            isQuestion={message.includes("?")}
                            shouldStart={index === 0 || index <= currentMessageIndex}
                            onComplete={() => handleMessageComplete(index)}
                        />
                    ))}

                    {currentMessageIndex >= messages.length - 1 && (
                        <USPShowcase usps={usps} />
                    )}
                </div>
            </div>
        </section>
    );
};

const FixedAnimatedMessage = ({ message, index, isQuestion, shouldStart, onComplete }) => {
    const [displayText, setDisplayText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const ref = useRef(null);

    // Intersection observer - trigger when first message comes into view
    useEffect(() => {
        if (index === 0) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.3 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        } else {
            // For other messages, just make them visible immediately
            setIsVisible(true);
        }
    }, [index]);

    // Typewriter effect - now controlled by shouldStart
    useEffect(() => {        
        if (isVisible && shouldStart && !hasStarted) {
            setHasStarted(true);
            
            let currentIndex = 0;
            const intervalId = setInterval(() => {
                if (currentIndex <= message.length) {
                    const newText = message.slice(0, currentIndex);
                    setDisplayText(newText);
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setIsComplete(true);
                    onComplete();
                }
            }, 50);
        }
    }, [isVisible, shouldStart, hasStarted, message, onComplete]);

    return (
        <div
            ref={ref}
            className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <p className={`
                text-2xl md:text-4xl font-bold max-w-4xl mx-auto
                ${isQuestion ? "text-imperial-red-500" : "text-white"}
                min-h-[4rem] leading-relaxed
                transform transition-all duration-500
                ${hasStarted ? "scale-100" : "scale-95"}
                ${isComplete ? "drop-shadow-lg" : ""}
                hover:scale-105 transition-transform duration-300
            `}>
                {displayText}
                {hasStarted && displayText.length < message.length && (
                    <span className="animate-pulse ml-1 text-imperial-red bg-imperial-red-500 px-1">|</span>
                )}
                {isComplete && isQuestion && (
                    <span className="inline-block ml-2 text-white">
                        {index === 0 && <HelpCircle className="w-11 h-11 animate-bounce" />}
                        {index === 1 && <Wrench className="w-11 h-11 animate-bounce" />}
                        {index === 2 && <Lightbulb className="w-11 h-11 animate-bounce" />}
                    </span>
                )}
            </p>
        </div>
    );
};

const USPShowcase = ({ usps }) => {
    const [visibleUSPs, setVisibleUSPs] = useState([]);
    const [showTitle, setShowTitle] = useState(false);
    const [showCTA, setShowCTA] = useState(false);

    useEffect(() => {
        // Show title first
        setTimeout(() => setShowTitle(true), 800);
        
        // Then cascade the USPs quickly
        usps.forEach((usp, index) => {
            setTimeout(() => {
                setVisibleUSPs(prev => [...prev, index]);
            }, 1500 + (index * 200));
        });

        // Show CTA after all USPs are done
        setTimeout(() => {
            setShowCTA(true);
        }, 1500 + (usps.length * 200) + 1000); // Wait for all USPs + 1 second
    }, [usps]);

    return (
        <>
            <div className="mt-16">
                {/* Title */}
                <div className={`text-center mb-8 transition-all duration-1000 ${
                    showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                        Here's what makes <span className="text-imperial-red font-bold">us</span> different:
                    </h3>
                </div>

                {/* Grid of USPs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {usps.map((usp, index) => (
                        <div
                            key={index}
                            className={`
                                bg-gray-800 rounded-lg p-4 text-center border-2 border-gray-500
                                transition-all duration-700 transform
                                ${visibleUSPs.includes(index) 
                                    ? "opacity-100 translate-y-0 scale-100 border-imperial-red-500" 
                                    : "opacity-0 translate-y-4 scale-95"
                                }
                                hover:bg-gray-700 hover:scale-105 transition-all duration-300
                            `}
                            style={{
                                transitionDelay: visibleUSPs.includes(index) ? '0ms' : `${index * 200}ms`
                            }}
                        >
                            <p className="text-white font-light text-sm md:text-base">
                                {usp}
                            </p>
                            {visibleUSPs.includes(index) && (
                                <div className="mt-2">
                                    <span className="text-green-400 text-xl">✓</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA COMPLETELY SEPARATE - OUTSIDE THE GRID CONTAINER */}
            {showCTA && (
                <div className="text-center mt-16 py-8">
                    <div className="animate-bounce">
                        <p className="text-3xl md:text-4xl font-light text-white mb-6">
                            Ready to get started?
                        </p>
                        <button 
                            onClick={scrollToForm}
                            className="bg-imperial-red-500 hover:bg-imperial-red-600 text-white font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Let's Fix Your Website
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollAnimationSection;