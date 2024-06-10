import React from "react";
import CountUp from "react-countup";
import Contact from "./Contact";
import { useTheme } from "next-themes";
import Testimonials from "./Testimonials";

export default function MainContent() {
    const { theme } = useTheme()
    return (
        <section className="bg-white dark:bg-gray-800">
            <header className="max-w-6xl mx-auto my-10 text-center bg-white dark:bg-gray-800">
                <h3 className="text-2xl md:text-5xl font-black mx-20 my-10 md:leading-relaxed">
                    Need a Well Designed & Developed Game from an Expert?
                </h3>
            </header>
            <div className="block py-6 md:-my-4 md:py-0">
                <svg className="animate-bounce mx-auto w-6 h-6 text-amber-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
                <div className="max-w-6xl mx-auto p-20 text-center dark:bg-gray-900">
                    <p className="text-lg pb-10">
                        As a Unity Game Development professional I can help create any custom game or feature. While utilizing my expert skills in 2D, 3D and VR Game Development I can help create any game you desire. I have already helped a lot of clients with making Unity games and I cant wait to work on your idea too!
                    </p>
                    <div className="flex flex-col md:flex-row justify-around py-6 mt-4 border-4 border-white">
                        <div>
                            <p className="text-3xl font-black md:text-5xl py-2">
                                <CountUp end="13" duration="2" />+
                            </p>
                            Games Developed
                        </div>
                        <p className="border-b-4 w-full md:border-l-4 border-white md:h-24 md:w-0" />
                        <div>
                            <p className="text-3xl font-black md:text-5xl py-2">
                                <CountUp end="10" duration="2" />
                            </p>
                            Happy Clients
                        </div>
                        <p className="border-b-4 w-full md:border-l-4 border-white md:h-24 md:w-0" />
                        <div>
                            <p className="text-3xl font-black md:text-5xl py-2">
                                <CountUp end="1" duration="2" />+
                            </p>
                            Fiver Level
                        </div>
                        <p className="border-b-4 w-full md:border-l-4 border-white md:h-24 md:w-0" />
                        <div>
                            <p className="text-3xl font-black md:text-5xl py-2">
                                <CountUp end="5" duration="2" />K+
                            </p>
                            In Client Earnings
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-20 text-center">
                <h3 className="text-4xl md:text-6xl font-black py-10">
                    Happy Clients
                    <span className="block w-1/6 mx-auto border-b-4 border-[#3B82F6] pt-4"></span>
                </h3>
                <Testimonials />
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
                <div className="max-w-6xl mx-auto p-20 text-center">
                    <h3 className="text-4xl md:text-6xl font-black py-10">
                        Game Development Services
                        <span className="block w-1/6 mx-auto border-b-4 border-[#3B82F6] pt-4"></span>
                    </h3>
                    <div className="grid grid-cols-2">
                        <div className="m-4">
                            <h1 className="text-2xl font-bold py-4">
                                3D Games
                            </h1>
                            <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                            <p className="text-lg py-4">
                                I can develop a complete 3D Game solution for any of your custom ideas. I develop 3D games with my extensive experience in the Unity Platform and Excellent C# skills.
                            </p>
                        </div>
                        <div className="m-4">
                            <h1 className="text-2xl font-bold py-4">
                                2D Games
                            </h1>
                            <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                            <p className="text-lg py-4">
                                I can develop a complete 2D Game solution for any of your custom ideas. I develop 3D games with my extensive experience in the Unity Platform and Excellent C# skills.
                            </p>
                        </div>
                        <div className="m-4">
                            <h1 className="text-2xl font-bold py-4">
                                VR Games
                            </h1>
                            <span className="block w-1/6 mx-auto border-b-2 border-[#F59E0B]"></span>
                            <p className="text-lg py-4">
                                I can create any VR game for you with my expert Unity VR Game development Experience. I can fully develop, test, and ship an excellent VR game.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center my-10 lg:my-20">
                    <img
                        className="hidden lg:block w-1/2 rounded-md mx-auto shadow-md"
                        src="/qari-side.jpeg"
                    />
                    <div className="p-4 lg:p-20 lg:ml-20">
                        <h3 className="text-3xl lg:text-5xl font-bold">
                            Why Hire Me?
                        </h3>
                        <div className="py-10 text-lg">
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Level 1 Fiverr Professional: </strong> I have spent a lot of time relentlessly working on my Fiverr profile and have produced a lot of happy clients.
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Best Practices:</strong> I take every detail seriously, and ensure the quality of our work matches industry standard
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Error-free Code:</strong> I test our code rigorously with all possible scenarios before making the project live
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Experience:</strong> I bring alot of experience from various industries at various levels
                            </p>
                            <p>
                                <span className="px-2">{"->"}</span>
                                <strong>Straight-forward:</strong> I do not make any commitments if I am not 100% sure about the outcome. I value your time!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact bg="bg-[#F1F1F1]" />
        </section>
    )
}