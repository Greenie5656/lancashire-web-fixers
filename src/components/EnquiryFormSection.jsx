import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Send, Coffee, Phone, Mail, MessageCircle, PoundSterling, Clock, Wrench, X, CheckCircle } from "lucide-react";

const EnquiryFormSection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({
        name: "",
        email: "",
        problem: "",
        urgency: "",
        contactPreference: "",
        priceEstimate: "",
        websiteMood: 50,
        additionalDetails: ""
    });
    const [isVisible, setIsVisible] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionRef = useRef(null);

    // Questions configuration 
    const questions = [
        {
            id: "name",
            question: "What is your name?",
            type: "text",
            placeholder: "Just your first name is fine...",
            icon: <Coffee className="w-6 h-6" />,
            required: true
        },
        {
            id: "email",
            question: "What is your email?",
            type: "email",
            placeholder: "So we can get back to you...",
            icon: <Mail className="w-6 h-6" />,
            required: true
        },
        {
            id: "problem",
            question: "What is your website's biggest problem?",
            type: "dropdown",
            icon: <Wrench className="w-6 h-6" />,
            options: [
                "It looks like it's from 2010 😬",
                "Nobody can find it on Google",
                "It's slower than a Lancashire drizzle",
                "The design makes my eyes hurt",
                "It doesn't work on phones",
                "I lost my web guy and it's broken",
                "I need something completely new",
                "Other (let me explain in the details...)"
            ],
            required: true
        },
        {
            id: "urgency",
            question: "How urgent is this?",
            type: "dropdown",
            icon: <Clock className="w-6 h-6" />,
            options: [
                "ASAP - my website is on fire! 🔥",
                "Soon - within a few weeks",
                "No rush - just exploring options"
            ],
            required: true
        },
        {
            id: "contactPreference",
            question: "How would you prefer us to get back to you?",
            type: "dropdown",
            icon: <Phone className="w-6 h-6" />,
            options: [
                "Email works perfectly 📧",
                "Give me a quick call ☎️",
                "WhatsApp me 📱",
                "Let's meet for a proper Lancashire brew ☕"
            ],
            required: true
        },
        {
            id: "priceEstimate",
            question: "Are you looking for a rough estimate?",
            type: "dropdown",
            icon: <PoundSterling className="w-6 h-6" />,
            options: [
                "Yes please - ballpark figures help! 💰",
                "Not yet - let's chat about the project first 💬",
                "I'm just exploring options right now 🤔"
            ],
            required: true
        },
        {
            id: "websiteMood",
            question: "What is your website mood right now?",
            type: "slider",
            icon: <MessageCircle className="w-6 h-6" />,
            min: 0,
            max: 100,
            required: false
        },
        {
            id: "additionalDetails",
            question: "Any other details?",
            type: "textarea",
            placeholder: "Tell us anything else that may help...",
            icon: <MessageCircle className="w-6 h-6" />,
            required: false
        }
    ];

    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
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

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (showSuccessModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showSuccessModal]);

    const handleAnswerChange = (value) => {
        setAnswers(prev => ({
            ...prev,
            [questions[currentQuestion].id]: value
        }));
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const canProceed = () => {
        const currentQ = questions[currentQuestion];
        const currentAnswer = answers[currentQ.id];
        
        if (!currentQ.required) return true;
        if (currentQ.type === "slider") return true;

        return currentAnswer && currentAnswer.trim() !== "";
    };

    const getMoodEmoji = (value) => {
        if (value < 20) return "😬";
        if (value < 40) return "😕";
        if (value < 60) return "😐";
        if (value < 80) return "🙂";
        return "😍";
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            // Replace formspree id here once generated
            const response = await fetch("https://formspree.io/f/xvgrybjw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: answers.name,
                    email: answers.email,
                    problem: answers.problem,
                    urgency: answers.urgency,
                    contactPreference: answers.contactPreference,
                    priceEstimate: answers.priceEstimate,
                    websiteMood: `${answers.websiteMood}% happy (${getMoodEmoji(answers.websiteMood)})`,
                    additionalDetails: answers.additionalDetails || "No additional details provided",
                    // Add a subject line for easy email filtering
                    _subject: `New Website Enquiry from ${answers.name}`,
                })
            });

            if (response.ok) {
                setShowSuccessModal(true);
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Sorry, there was an error sending your message. Please try again or email us directly");
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setShowSuccessModal(false);
        // Optional: Reset form or redirect
        // setCurrentQuestion(0);
        // setAnswers({...initialAnswers});
    };

    const getProgressPercentage = () => {
        return ((currentQuestion + 1) / questions.length) * 100;
    };

    const getContactMethodText = () => {
        if (answers.contactPreference.includes('call')) return 'phone';
        if (answers.contactPreference.includes('Email')) return 'email';
        if (answers.contactPreference.includes('WhatsApp')) return 'WhatsApp';
        if (answers.contactPreference.includes('meet')) return 'meeting';
        return 'our preferred method';
    };

    return (
        <>
            <section ref={sectionRef} id="enquiry-form" className="bg-black py-16 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Section Header */}
                    <div className={`text-center mb-12 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Let's Fix Your Website
                            <span className="text-red-500 ml-2">🔧</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Just a few quick questions to get started...
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className={`mb-8 transition-all duration-1000 delay-300 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>Question {currentQuestion + 1} of {questions.length}</span>
                            <span>{Math.round(getProgressPercentage())}% complete</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${getProgressPercentage()}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className={`bg-gray-900 rounded-xl p-8 border-2 border-gray-700 transition-all duration-1000 delay-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                        <div className="flex items-center mb-6">
                            <div className="text-red-500 mr-3">
                                {questions[currentQuestion].icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                {questions[currentQuestion].question}
                            </h3>
                        </div>

                        {/* Answer Input */}
                        <div className="mb-8">
                            {questions[currentQuestion].type === "text" && (
                                <input
                                    type="text"
                                    value={answers[questions[currentQuestion].id]}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                    placeholder={questions[currentQuestion].placeholder}
                                    className="w-full p-4 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                                />
                            )}

                            {questions[currentQuestion].type === "email" && (
                                <input
                                    type="email"
                                    value={answers[questions[currentQuestion].id]}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                    placeholder={questions[currentQuestion].placeholder}
                                    className="w-full p-4 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                                />
                            )}

                            {questions[currentQuestion].type === "dropdown" && (
                                <select
                                    value={answers[questions[currentQuestion].id]}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                    className="w-full p-4 bg-gray-800 border-2 border-gray-600 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Choose an option...</option>
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            )}

                            {questions[currentQuestion].type === "slider" && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-4xl">😬</span>
                                        <span className="text-6xl">{getMoodEmoji(answers.websiteMood)}</span>
                                        <span className="text-4xl">😍</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={answers.websiteMood}
                                        onChange={(e) => handleAnswerChange(parseInt(e.target.value))}
                                        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                        style={{
                                            background: `linear-gradient(to right, #ff0036 0%, #ff0036 ${answers.websiteMood}%, #374151 ${answers.websiteMood}%, #374151 100%)`
                                        }}
                                    />
                                    <div className="text-center mt-2 text-gray-400">
                                        Current Mood: {answers.websiteMood}% happy
                                    </div>
                                </div>
                            )}

                            {questions[currentQuestion].type === "textarea" && (
                                <textarea
                                    value={answers[questions[currentQuestion].id]}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                    placeholder={questions[currentQuestion].placeholder}
                                    rows="4"
                                    className="w-full p-4 bg-gray-800 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                                />
                            )}
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between items-center">
                            <button
                                onClick={prevQuestion}
                                disabled={currentQuestion === 0}
                                className={`flex items-center px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                                    currentQuestion === 0
                                        ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                        : "bg-gray-700 text-white hover:bg-gray-600"
                                }`}
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back
                            </button>

                            {currentQuestion === questions.length - 1 ? (
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="flex items-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 transform shadow-lg disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Send My Request
                                        </>
                                    )}
                                </button>
                            ) : (
                                <button
                                    onClick={nextQuestion}
                                    disabled={!canProceed()}
                                    className={`flex items-center px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                                        canProceed()
                                            ? 'bg-red-500 hover:bg-red-600 text-white hover:scale-105 transform'
                                            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    Next
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Fun Footer Message */}
                    <div className={`text-center mt-8 transition-all duration-1000 delay-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}>
                        <p className="text-gray-400 text-sm">
                            Don't worry - we're not robots. Real Lancashire humans will read this! 🤖❌ 👥✅
                        </p>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-100 animate-bounce">
                        <div className="p-8 text-center relative">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Success Content */}
                            <div className="mb-6">
                                <div className="text-green-500 mb-4">
                                    <CheckCircle className="w-16 h-16 mx-auto" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    Right then!
                                </h3>
                                <p className="text-lg text-gray-600 mb-4">
                                    We'll get back to you via <span className="text-red-500 font-bold">
                                        {getContactMethodText()}
                                    </span> about <span className="text-red-500 font-bold">
                                        {answers.problem.toLowerCase()}
                                    </span>
                                </p>
                                <p className="text-gray-500">
                                    Sit tight - help is on the way! 🛠️
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={closeModal}
                                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Perfect! 👍
                                </button>
                                <button
                                    onClick={() => window.open('https://wa.me/447464561135?text=Hi! Just sent through the form - excited to chat!', '_blank')}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    WhatsApp us now 📱
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom slider styles */}
            <style>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    background: #ff0036;
                    cursor: pointer;
                    border: 2px solid #fff;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }

                .slider::-moz-range-thumb {
                    height: 24px;
                    width: 24px;
                    border-radius: 50%;
                    background: #ff0036;
                    cursor: pointer;
                    border: 2px solid #fff;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
            `}</style>
        </>
    );
};

export default EnquiryFormSection;