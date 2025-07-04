import { useRef, useEffect } from 'react';
import videoBackground from '../assets/LWF_Background_Full_Loop.mp4';
import { scrollToForm } from '../utils/scrollToForm';


const HeroSection = () => {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            video.play().catch(console.error);
        }
    };

    // Set up initial video state when component mounts
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleCanPlay = () => {
            // Hide loading fallback
            const fallback = document.getElementById('video-fallback');
            if (fallback) {
                fallback.style.opacity = '0';
            }
        };

        const handleLoadStart = () => {
            // Show loading fallback
            const fallback = document.getElementById('video-fallback');
            if (fallback) {
                fallback.style.opacity = '1';
            }
        };

        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('loadstart', handleLoadStart);

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('loadstart', handleLoadStart);
        };
    }, []);

    return (
        <section className="bg-black px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                    We Build<span className="text-imperial-red">.</span> We Fix<span className="text-imperial-red">.</span> We Maintain<span className="text-imperial-red">.</span>
                </h1>

                {/* Video Background */}
                <div className="relative rounded-lg overflow-hidden mb-12 shadow-2xl">
                    <video
                        ref={videoRef}
                        className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                    >
                        <source src={videoBackground} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Overlay for Better Text Readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>
                    
                    {/* Optional: Video Loading Fallback */}
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center opacity-0 transition-opacity duration-300" id="video-fallback">
                        <div className="text-center">
                            <div className="text-white text-xl mb-2">Loading...</div>
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={scrollToForm}
                    className="bg-imperial-red-500 hover:bg-imperial-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 transform shadow-lg">
                    Arrange a Call
                </button>

                <p className="text-gray-400 mt-6 text-lg">
                    Lancashire-based web experts with 30 years experience
                </p>
            </div>
        </section>
    );
};

export default HeroSection;