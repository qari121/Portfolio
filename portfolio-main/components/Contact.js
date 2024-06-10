import React from "react";
import userData from "@constants/data";

export default function Contact({ bg }) {
    return (
        <div className={`${bg}` + " dark:bg-gray-900"} id="contact">
            <div className="max-w-6xl mx-auto py-10">
                <div className="flex flex-col lg:flex-row justify-center items-center my-10">
                    <div className="p-4 lg:p-20">
                        <h3 className="text-3xl lg:text-5xl font-bold">
                            Get in Touch, Let's Talk
                        </h3>
                        <div className="py-10 text-xl">
                            <p className="py-2">
                                <span className="px-2">{"->"}</span>
                                <a
                                    href={`mailto:${userData.email}`}
                                    className="underline text-blue-500"
                                >
                                    <strong>{userData.email}</strong>
                                </a>
                                <br />
                                <span className="px-2">{"->"}</span>
                                <a
                                    target="_blank"
                                    href="https://calendly.com/qarixaeed1/new-project"
                                    className="underline text-blue-500"
                                >
                                    <strong>Schedule online Meeting with Me</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                    <img
                        className="lg:block w-1/2 rounded-md mx-auto border-2 border-gray-50 shadow-md"
                        src="/avatar.jpeg"
                    />
                </div>
            </div>
        </div>
    )
}