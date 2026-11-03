import React from "react";

const ATMJoinSection = () => {
    return (
        <section className="w-full bg-[#0c1511] text-white py-16 px-4 md:px-10">

            {/* MAIN REGISTRATION SECTION */}
            <div className="max-w-[1750px] mx-auto">

                <div className="bg-gradient-to-r from-[#052e20] to-[#08603f] rounded-[22px] px-8 md:px-16 py-12 md:py-16">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            <p className="text-[#d4a51c] font-bold tracking-[3px] text-sm md:text-base mb-3">
                                JOIN ATM
                            </p>

                            <h2 className="text-2xl md:text-5xl lg:text-[40px] font-extrabold leading-tight mb-7">
                                Register in about three minutes
                            </h2>

                            <p className="text-gray-100 text-lg md:text-[17px] leading-relaxed mb-6">
                                Tell us who you are, choose your LGA and ward, pick how you
                                want to help, and confirm your consent. An administrator
                                reviews your application before your digital card is issued.
                            </p>

                            <a
                                href="/register"
                                className="inline-flex items-center gap-4 bg-[#d0a51f] hover:bg-[#e2b72e] text-black font-bold text-lg md:text-xl px-8 py-5 rounded-full transition-all duration-300 hover:scale-105"
                            >
                                Register as a Member

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>

                        </div>

                        {/* RIGHT CONTENT - REGISTRATION STEPS */}
                        <div className="space-y-5 md:pl-5">

                            {[
                                "Enter your details",
                                "Select your LGA, ward and polling unit",
                                "Choose a membership category",
                                "Give consent and submit",
                                "Receive your member ID",
                            ].map( ( step, index ) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-2 text-MD md:text-sm text-gray-100"
                                >
                                    <span className="font-medium shrink-0">
                                        {index + 1}.
                                    </span>

                                    <p>{step}</p>
                                </div>
                            ) )}

                        </div>

                    </div>

                </div>

            </div>


            {/* INFORMATION NOTICE */}
            <div className="mt-24 -mx-4 md:-mx-10 bg-[#2b2a17] border-t border-[#b99a24] px-6 md:px-16 py-7">

                <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">

                    {/* INFORMATION ICON */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                    </svg>

                    <p className="text-base md:text-[22px] leading-relaxed text-gray-100">

                        <strong>
                            ATM membership is not INEC voter registration.
                        </strong>{" "}

                        To register as a voter, transfer your registration or confirm
                        your polling unit, use official INEC services.

                    </p>

                </div>

            </div>


            {/* FLOATING PROTOTYPE GUIDE BUTTON */}
            <button
                onClick={() => {
                    window.scrollTo( {
                        top: 0,
                        behavior: "smooth",
                    } );
                }}
                className="fixed bottom-4 left-3 z-50 flex items-center gap-3 bg-[#10271d] border-[3px] border-[#d0a51f] text-white font-bold text-base md:text-xl px-6 py-3 rounded-full shadow-xl hover:bg-[#19402e] transition-all duration-300"
            >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 22V4" />
                    <path d="M4 4h15l-3 5 3 5H4" />
                </svg>

                Prototype guide

            </button>

        </section>
    );
};

export default ATMJoinSection;