import React from "react";
import { Facebook, Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
import { SymbolLogo } from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <SymbolLogo className="h-24 w-24" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        LANCASHIRE WEB FIXERS
                    </h2>
                    <p className="text-2xl md:text-3xl font-light text-imperial-red mb-8">
                        We Build<span className="text-white">.</span> We Fix<span className="text-white">.</span> We Maintain<span className="text-white">.</span>
                    </p>
                    <p className="text-lg text-gray-400">
                        30 years of web expertise in Lancashire
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Email Card */}
                    <a 
                        href="mailto:hello@lancashirewebfixers.co.uk
"
                        className="bg-gray-800 hover:bg-imperial-red-500 border-2 border-gray-600 hover:border-imperial-red-500 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 transform group"
                    >
                        <Mail className="w-12 h-12 text-imperial-red group-hover:text-white mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                        <p className="text-gray-300 group-hover:text-white text-xs break-words">
                            hello@lancashirewebfixers.co.uk
                        </p>
                    </a>

                    {/* WhatsApp Card */}
                    <a 
                        href="https://wa.me/447464561135?text=Hi! I'd like to discuss my website project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-green-500 border-2 border-gray-600 hover:border-green-500 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 transform group"
                    >
                        <MessageCircle className="w-12 h-12 text-green-400 group-hover:text-white mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                        <p className="text-gray-300 group-hover:text-white text-lg font-bold">
                            07464 561 135
                        </p>
                    </a>

                    {/* Facebook Card */}
                    <a 
                        href="https://www.facebook.com/LancashireWebFixers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-blue-600 border-2 border-gray-600 hover:border-blue-600 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 transform group"
                    >
                        <Facebook className="w-12 h-12 text-blue-400 group-hover:text-white mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Facebook</h3>
                        <p className="text-gray-300 group-hover:text-white">
                            Follow us
                        </p>
                    </a>

                    {/* Instagram Card */}
                    <a 
                        href="https://www.instagram.com/lancashire_web_fixers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-pink-500 border-2 border-gray-600 hover:border-pink-500 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 transform group"
                    >
                        <Instagram className="w-12 h-12 text-pink-400 group-hover:text-white mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                        <p className="text-gray-300 group-hover:text-white">
                            Follow us
                        </p>
                    </a>
                </div>

                {/* Location */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-gray-800 border-2 border-gray-600 rounded-xl px-6 py-4">
                        <MapPin className="w-6 h-6 text-imperial-red mr-3" />
                        <span className="text-white font-bold text-lg">
                            Based in Lancashire, England
                        </span>
                    </div>
                </div>

                {/* Big CTA */}
                <div className="text-center mb-12">
                    <a 
                        href="https://wa.me/447464561135?text=Hi! I'd like to discuss my website project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-imperial-red-500 hover:bg-imperial-red-600 text-white font-extrabold py-6 px-12 rounded-xl text-2xl transition-all duration-300 hover:scale-105 transform shadow-2xl"
                    >
                        Let's Fix Your Website! 🛠️
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-gray-800">
                    <p className="text-gray-500 font-light">
                        © 2025 Lancashire Web Fixers. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;