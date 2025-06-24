const HeroSection = () => {
    return (
        <section className="bg-black px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                    We Build. We Fix. We Maintain.
                </h1>

                {/* Video Background Placeholder */}
                <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-12 mb-12 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-green-400 text-xl mb-4">🎬 AI VIDEO BACKGROUND</div>
                        <p className="text-gray-400">
                            Future Home of AI-Generated video<br />
                            "Builder duo in Lancashire rose field"
                        </p> 
                    </div>
                </div>

                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 hover:scale-105 transform shadow-lg">
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