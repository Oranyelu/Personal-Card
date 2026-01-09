import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProfileImage from "../assets/user profile 1.jpg";

const CardContent = () => {
    return (
        <div className="w-[300px] h-[450px] bg-slate-100 rounded-[20px] shadow-2xl overflow-hidden flex flex-col relative select-none">
            {/* Top Design Element - Lanyard Hole Area */}
            <div className="h-4 bg-slate-200 w-full absolute top-0 left-0 z-20 flex justify-center items-end">
                <div className="w-16 h-2 bg-white rounded-t-lg"></div>
            </div>

            {/* Header / Design Strip */}
            <div className="h-32 bg-gradient-to-br from-blue-900 to-blue-700 relative w-full">
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full blur-md"></div>
                <div className="absolute bottom-[-20px] left-0 w-full h-10 bg-slate-100 rounded-t-[50%]"></div>
            </div>

            <div className="flex flex-col items-center -mt-16 z-10 px-6">
                {/* Profile Image with Border */}
                <div className="p-1.5 bg-white rounded-full shadow-md">
                    <img
                        src={ProfileImage}
                        alt="George Chiemerie Chime"
                        className="w-32 h-32 rounded-full object-cover border-4 border-sky-400"
                    />
                </div>

                <div className="text-center mt-4">
                    <h2 className="text-2xl font-bold text-slate-800">George Chiemerie Chime</h2>
                    <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mt-1">Full Stack Developer</p>
                    <p className="text-xs text-slate-500 mt-1">UI/UX Designer | Radiographer</p>
                </div>

                <div className="mt-6 flex space-x-5">
                    <a href="https://github.com/Oranyelu" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-colors transform hover:scale-110">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/george-chime-a927881b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700 transition-colors transform hover:scale-110">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/chime.george?igsh=MXJjbWNkZDc1cjBiOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-pink-600 transition-colors transform hover:scale-110">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://twitter.com/oranyelu_" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-500 transition-colors transform hover:scale-110">
                        <FaTwitter size={24} />
                    </a>
                </div>

                <Link
                    to="/about"
                    className="mt-8 px-8 py-2.5 bg-blue-900 text-white text-sm font-medium rounded-full shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                    View Portfolio
                </Link>
            </div>

            {/* Decorative Bottom */}
            <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-orange-400 to-sky-400"></div>
        </div>
    );
};

export default CardContent;
