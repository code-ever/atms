
import React, { useState } from "react";
import {
    FaArrowRight,
    FaExternalLinkAlt,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaUsers,
    FaUserTie,
    FaBuilding,
    FaSearch,
    FaCheckCircle,
    FaNewspaper,
    FaBullseye,
    FaHandshake,
    FaEnvelope,
    FaPhone,
    FaPaperPlane
} from "react-icons/fa";
import ATMJoinSection from "../components/ATMJoinSection";

const Index = () => {
    const [selectedLGA, setSelectedLGA] = useState( "Aninri" );
    const [selectedWard, setSelectedWard] = useState( "" );
    const [search, setSearch] = useState( "" );

    const news = [
        {
            category: "Organisation",
            title: "How coordination appointments work",
            date: "28 Oct 2026"
        },
        {
            category: "ATM News",
            title: "Town hall planned for Enugu North",
            date: "27 Oct 2026"
        },
        {
            category: "State Updates",
            title: "New ward coordinators and polling units",
            date: "25 Oct 2026"
        }
    ];

    const events = [
        {
            day: "3",
            month: "NOV",
            category: "Enugu",
            title: "Upcoming community outreach",
            location: "Enugu State"
        },
        {
            day: "7",
            month: "NOV",
            category: "Engagement",
            title: "Nsukka LGA mobilisation meeting",
            location: "Nsukka, Enugu"
        },
        {
            day: "9",
            month: "NOV",
            category: "Support",
            title: "Ward to community town hall",
            location: "Enugu State"
        }
    ];

    const officials = [
        { initials: "AL", title: "Name to be supplied", position: "State Coordinator" },
        { initials: "SS", title: "Name to be supplied", position: "Deputy State Secretary" },
        { initials: "CO", title: "Name to be supplied", position: "Director, Organisation" },
        { initials: "DM", title: "Name to be supplied", position: "Director, Media and Communications" }
    ];

    const statistics = [
        { number: "233", label: "Registered coordinators", icon: <FaUsers /> },
        { number: "17", label: "Local Government Areas", icon: <FaMapMarkerAlt /> },
        { number: "59", label: "Registered wards", icon: <FaBuilding /> },
        { number: "211", label: "Polling units", icon: <FaBullseye /> },
        { number: "83", label: "Registered volunteers", icon: <FaUserTie /> },
        { number: "5", label: "Upcoming events", icon: <FaCalendarAlt /> }
    ];

    const moments = [
        "Community Engagement",
        "Ward Coordination Meeting",
        "Town Hall Gathering",
        "Mobilisation Activities",
        "Leadership Meeting",
        "Community Development"
    ];

    const lgas = [
        "Aninri",
        "Awgu",
        "Enugu East",
        "Enugu North",
        "Enugu South",
        "Ezeagu",
        "Igbo-Etiti",
        "Igbo-Eze North",
        "Igbo-Eze South",
        "Isi-Uzo",
        "Nkanu East",
        "Nkanu West",
        "Nsukka",
        "Oji River",
        "Udenu",
        "Udi",
        "Uzo-Uwani"
    ];

    const movementFeatures = [
        {
            icon: <FaBullseye />,
            title: "Organise",
            text: "Build a structured grassroots network across every level."
        },
        {
            icon: <FaUsers />,
            title: "Coordinate",
            text: "Connect local teams, ward leaders and community organisers."
        },
        {
            icon: <FaHandshake />,
            title: "Inform",
            text: "Share updates, activities and relevant information."
        }
    ];

    return (
        <div className="w-full bg-[#0b1410] text-white overflow-hidden">

            {/* HERO / HOME SECTION */}


            <section
                id="home"
                className="relative isolate overflow-hidden scroll-mt-20 bg-gradient-to-br from-[#032f20] via-[#075638] to-[#08734b] font-['Poppins'] text-white"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 93.5%, 61% 100%, 28% 94.8%, 0 100%)"
                }}
            >

                {/* BACKGROUND DECORATIONS */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

                    {/* Golden glow */}
                    <div className="absolute -top-40 -left-32 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[110px]" />

                    {/* Green glow */}
                    <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-emerald-300/10 blur-[120px]" />

                    {/* Bottom glow */}
                    <div className="absolute -bottom-40 left-1/3 h-[400px] w-[600px] rounded-full bg-green-400/10 blur-[100px]" />

                    {/* Diagonal pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(135deg, transparent 0px, transparent 35px, rgba(255,255,255,0.35) 36px, transparent 37px)"
                        }}
                    />

                    {/* Decorative circles */}
                    <div className="absolute -top-20 right-[20%] h-72 w-72 rounded-full border border-yellow-300/10" />

                    <div className="absolute top-10 right-[22%] h-56 w-56 rounded-full border border-white/10" />

                    <div className="absolute bottom-10 left-[-100px] h-80 w-80 rounded-full border border-green-200/10" />

                    {/* Gold accent line */}
                    <div className="absolute right-0 top-0 h-1 w-1/3 bg-gradient-to-l from-yellow-400/60 to-transparent" />

                </div>


                <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">

                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* HERO CONTENT */}
                        <div>


                            <span className="mb-7 inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-gradient-to-r from-[#124b36] to-[#092f22] px-4 py-2 text-xs font-semibold tracking-wider text-green-100 shadow-lg shadow-black/10 backdrop-blur-sm">

                                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-yellow-300/50 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 text-base font-extrabold text-[#063b27] shadow-[0_0_15px_rgba(250,204,21,0.35)]">
                                    A
                                </span>

                                AS TINUBU & MBAH MOVE

                            </span>

                            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-[58px]">
                                Enugu, organised
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-yellow-200">
                                    from the ground up.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base font-normal leading-8 text-green-50/90 md:text-[17px]">
                                ATM brings supporters, volunteers and coordinators into one
                                accountable structure across all 17 LGAs, every ward and
                                every polling unit.
                            </p>

                            {/* BUTTONS */}
                            <div className="mt-8 flex flex-wrap gap-3">

                                <a
                                    href="/register"
                                    className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 text-sm font-semibold text-[#102419] shadow-lg shadow-yellow-900/20 transition duration-300 hover:-translate-y-1 hover:from-yellow-300 hover:to-yellow-400"
                                >
                                    Join ATM <FaArrowRight className="ml-2 inline" />
                                </a>

                                <a
                                    href="#structure"
                                    className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#075638]"
                                >
                                    Explore Enugu Structure
                                </a>

                            </div>

                            <p className="mt-7 text-xs font-normal tracking-wide text-green-100/70">
                                Building a connected and organised grassroots network.
                            </p>

                        </div>


                        {/* HERO IMAGE GRID */}
                        <div className="relative">

                            {/* Image glow */}
                            <div className="absolute inset-5 rounded-3xl bg-yellow-400/10 blur-3xl" />

                            <div className="relative grid grid-cols-2 gap-4">

                                {/* MAIN IMAGE */}
                                <div className="col-span-2 flex h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-[#06452f]/80 p-3 shadow-2xl backdrop-blur-sm md:h-[330px]">

                                    <img
                                        src="/image/Tinubu.jpg"
                                        alt="ATM leadership and community"
                                        className="h-full w-full object-contain object-center"
                                        onError={( e ) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />

                                </div>

                                {/* COMMUNITY MEETING */}
                                <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-[#06452f]/80 p-2 shadow-xl backdrop-blur-sm md:h-[190px]">

                                    <img
                                        src="/image/mba.jpg"
                                        alt="Community meeting"
                                        className="h-full w-full object-contain object-center"
                                        onError={( e ) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />

                                </div>

                                {/* COMMUNITY ENGAGEMENT */}
                                <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-[#06452f]/80 p-2 shadow-xl backdrop-blur-sm md:h-[190px]">

                                    <img
                                        src="/images/hero-community.jpg"
                                        alt="Community engagement"
                                        className="h-full w-full object-contain object-center"
                                        onError={( e ) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>



            {/* ABOUT ATM */}
            <section id="about" className="py-16 md:py-20 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <span className="text-yellow-500 uppercase text-[10px] tracking-[2px] font-bold">
                            Campaign Overview
                        </span>

                        <h2 className="text-3xl md:text-4xl font-black mt-3 leading-tight">
                            One movement, organised
                            <br /> from state to polling unit.
                        </h2>

                        <p className="text-gray-400 leading-7 mt-5 max-w-xl">
                            Our movement connects members, volunteers and coordinators
                            through a strong administrative structure. Every member
                            plays a role in building a well-organised grassroots network
                            across Enugu State.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-7">

                            <a
                                href="#structure"
                                className="bg-green-700 px-6 py-3 rounded-full text-sm font-bold hover:bg-green-600"
                            >
                                Explore Structure
                            </a>

                            <a
                                href="#leadership"
                                className="border border-gray-600 px-6 py-3 rounded-full text-sm font-bold hover:border-green-500"
                            >
                                Leadership Directory
                            </a>

                        </div>
                    </div>

                    <div className="space-y-3">

                        {movementFeatures.map( ( item, index ) => (
                            <div
                                key={index}
                                className="flex gap-5 p-5 rounded-xl border border-[#293c32] bg-[#111e18]"
                            >

                                <div className="w-11 h-11 rounded-lg bg-[#183d2b] flex items-center justify-center text-green-400 text-lg shrink-0">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">
                                        {item.text}
                                    </p>
                                </div>

                            </div>
                        ) )}

                    </div>

                </div>
            </section>

            {/* STRUCTURE STATISTICS */}
            <section id="structure-stats" className="bg-[#14221b] py-16 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto">

                    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">

                        <div>
                            <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                                State Structure
                            </span>

                            <h2 className="text-3xl font-black mt-2">
                                The ATM structure at a glance
                            </h2>
                        </div>

                        <a
                            href="#structure"
                            className="text-yellow-400 border border-yellow-500/40 rounded-full px-5 py-3 text-xs font-bold"
                        >
                            Explore Structure <FaArrowRight className="inline ml-2" />
                        </a>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

                        {statistics.map( ( item, index ) => (
                            <div
                                key={index}
                                className="bg-[#101b15] border border-[#304438] rounded-xl p-5"
                            >

                                <div className="text-green-400 text-sm mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="text-3xl font-black text-[#a0d1b5]">
                                    {item.number}
                                </h3>

                                <p className="text-gray-400 text-xs mt-2 leading-5">
                                    {item.label}
                                </p>

                            </div>
                        ) )}

                    </div>

                    <p className="text-gray-500 text-xs mt-6">
                        Figures shown are sample display values. Update them with verified
                        organisational records before publishing.
                    </p>

                </div>
            </section>

            {/* ENUGU STATE STRUCTURE / LGA DIRECTORY */}
            <section id="structure" className="py-16 md:py-20 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto">

                    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">

                        <div>
                            <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                                Explore Enugu State
                            </span>

                            <h2 className="text-3xl font-black mt-2">
                                Find your LGA, ward and polling unit
                            </h2>

                            <p className="text-gray-400 text-sm mt-3">
                                Explore the organisational structure in your area.
                            </p>
                        </div>

                        <a
                            href="#structure"
                            className="border border-gray-700 rounded-full px-5 py-3 text-xs font-bold"
                        >
                            Explore Directory
                        </a>

                    </div>

                    <div className="max-w-md mb-5 relative">

                        <FaSearch className="absolute left-4 top-4 text-gray-500" />

                        <input
                            type="text"
                            value={search}
                            onChange={( e ) => setSearch( e.target.value )}
                            placeholder="Search local government..."
                            className="w-full bg-[#14221b] border border-[#304438] rounded-lg py-3 pl-11 pr-4 text-sm outline-none focus:border-green-500"
                        />

                    </div>

                    <div className="grid md:grid-cols-3 gap-3">

                        {/* LGAS */}
                        <div className="bg-[#14221b] border border-[#304438] rounded-xl p-5">

                            <h3 className="font-bold mb-4">LGAs</h3>

                            <div className="space-y-1 max-h-80 overflow-y-auto">

                                {lgas.filter( ( lga ) =>
                                    lga.toLowerCase().includes( search.toLowerCase() )
                                ).map( ( lga ) => (

                                    <button
                                        key={lga}
                                        onClick={() => {
                                            setSelectedLGA( lga );
                                            setSelectedWard( "" );
                                        }}
                                        className={`w-full flex justify-between p-3 rounded-lg text-sm ${selectedLGA === lga
                                            ? "bg-green-800 text-white"
                                            : "text-gray-400 hover:bg-[#20352a]"
                                            }`}
                                    >
                                        {lga}
                                        <FaArrowRight className="text-xs mt-1" />
                                    </button>

                                ) )}

                            </div>
                        </div>

                        {/* WARDS */}
                        <div className="bg-[#14221b] border border-[#304438] rounded-xl p-5">

                            <h3 className="font-bold mb-4">Wards</h3>

                            <p className="text-xs text-gray-500 mb-4">
                                Selected LGA: {selectedLGA}
                            </p>

                            <div className="space-y-2">

                                {[1, 2, 3, 4, 5].map( ( ward ) => (

                                    <button
                                        key={ward}
                                        onClick={() => setSelectedWard( `Ward ${ward}` )}
                                        className={`w-full text-left p-3 rounded-lg text-sm ${selectedWard === `Ward ${ward}`
                                            ? "bg-green-800 text-white"
                                            : "bg-[#101b15] text-gray-400 hover:bg-[#20352a]"
                                            }`}
                                    >
                                        Ward {ward}
                                    </button>

                                ) )}

                            </div>
                        </div>

                        {/* POLLING UNITS */}
                        <div className="bg-[#14221b] border border-[#304438] rounded-xl p-5">

                            <h3 className="font-bold mb-4">Polling Units</h3>

                            {selectedWard ? (

                                <div>

                                    <p className="text-xs text-gray-400 mb-4">
                                        {selectedLGA} · {selectedWard}
                                    </p>

                                    {[1, 2, 3].map( ( unit ) => (

                                        <div
                                            key={unit}
                                            className="p-3 bg-[#101b15] rounded-lg mb-2 text-sm text-gray-300"
                                        >
                                            Polling Unit {unit}
                                        </div>

                                    ) )}

                                </div>

                            ) : (

                                <p className="text-sm text-gray-500 leading-7">
                                    Select a ward to explore its polling units.
                                </p>

                            )}

                        </div>

                    </div>

                    <div className="mt-4 bg-[#102a44] border border-blue-500/50 p-4 rounded-lg text-xs text-blue-200">

                        <FaCheckCircle className="inline mr-2" />

                        Select an LGA and ward to explore the directory.
                        Connect this section to your actual organisational database
                        to display verified records.

                    </div>

                </div>
            </section>

            {/* LATEST NEWS */}
            <section id="news" className="bg-[#14221b] py-16 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto">

                    <div className="flex justify-between items-center mb-8">

                        <div>
                            <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                                News and Updates
                            </span>

                            <h2 className="text-3xl font-black mt-2">
                                Latest from ATM
                            </h2>
                        </div>

                        <a
                            href="/news"
                            className="border border-gray-600 rounded-full px-5 py-2 text-xs font-bold"
                        >
                            All news
                        </a>

                    </div>

                    <div className="grid lg:grid-cols-5 gap-4">

                        {/* FEATURED NEWS */}

                        <div className="lg:col-span-3 bg-[#101b15] border border-[#304438] rounded-xl overflow-hidden">

                            {/* FEATURED NEWS IMAGE */}
                            <div className="h-52 md:h-64 bg-gradient-to-br from-green-700 to-green-500 overflow-hidden">

                                <img
                                    src="/image/IMG_5174.JPG"
                                    alt="Featured ATM News"
                                    className="w-full h-full object-cover object-center"
                                    onError={( e ) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />

                            </div>

                            <div className="p-5">

                                <span className="text-yellow-400 text-[10px] font-bold">
                                    Featured
                                </span>

                                <h3 className="text-xl md:text-2xl font-black mt-2">
                                    Membership registration opens across Enugu State
                                </h3>

                                <p className="text-gray-400 text-sm leading-6 mt-3">
                                    Supporters can now register online and be assigned to
                                    their LGA, ward and polling unit structure.
                                </p>

                                <p className="text-gray-500 text-xs mt-5">
                                    28 October 2026
                                </p>

                                <a
                                    href="/news"
                                    className="inline-block mt-4 text-green-400 text-xs font-bold"
                                >
                                    Read more <FaArrowRight className="inline ml-2" />
                                </a>

                            </div>
                        </div>


                        {/* NEWS LIST */}
                        <div className="lg:col-span-2 flex flex-col gap-3">

                            {news.map( ( item, index ) => (

                                <a
                                    href="/news"
                                    key={index}
                                    className="bg-[#101b15] border border-[#304438] rounded-xl p-5 hover:border-green-600 transition flex-1"
                                >

                                    <span className="text-green-400 text-[10px] font-bold">
                                        {item.category}
                                    </span>

                                    <h3 className="font-bold mt-2 text-sm leading-6">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-xs mt-3">
                                        {item.date}
                                    </p>

                                </a>

                            ) )}

                        </div>

                    </div>
                </div>
            </section>

            {/* UPCOMING EVENTS */}
            <section id="events" className="py-16 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto">

                    <div className="flex justify-between items-center mb-8">

                        <div>
                            <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                                Events and Activities
                            </span>

                            <h2 className="text-3xl font-black mt-2">
                                Upcoming
                            </h2>
                        </div>

                        <a
                            href="/events"
                            className="border border-gray-600 rounded-full px-5 py-2 text-xs font-bold"
                        >
                            All events
                        </a>

                    </div>

                    <div className="grid md:grid-cols-3 gap-4">

                        {events.map( ( event, index ) => (

                            <div
                                key={index}
                                className="bg-[#14221b] border border-[#304438] rounded-xl p-5 flex gap-4"
                            >

                                <div className="bg-green-800 rounded-lg w-14 h-14 flex flex-col items-center justify-center shrink-0">

                                    <span className="text-xl font-black">
                                        {event.day}
                                    </span>

                                    <span className="text-[9px]">
                                        {event.month}
                                    </span>

                                </div>

                                <div>

                                    <span className="text-green-400 text-[10px] font-bold">
                                        {event.category}
                                    </span>

                                    <h3 className="font-bold text-sm mt-2">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-500 text-xs mt-2">
                                        <FaMapMarkerAlt className="inline mr-1" />
                                        {event.location}
                                    </p>

                                </div>

                            </div>

                        ) )}

                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section id="leadership" className="bg-[#14221b] py-16 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto">

                    <div className="flex justify-between items-center mb-8">

                        <div>
                            <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                                Leadership
                            </span>

                            <h2 className="text-3xl font-black mt-2">
                                Approved officials
                            </h2>
                        </div>

                        <a
                            href="/leadership"
                            className="border border-gray-600 rounded-full px-5 py-2 text-xs font-bold"
                        >
                            Full directory
                        </a>

                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

                        {officials.map( ( official, index ) => (

                            <div
                                key={index}
                                className="bg-[#101b15] border border-[#304438] rounded-xl p-5 flex gap-4 items-center"
                            >

                                <div className="w-11 h-11 bg-[#183d2b] text-green-300 rounded-full flex items-center justify-center font-black text-xs shrink-0">
                                    {official.initials}
                                </div>

                                <div>

                                    <h3 className="text-sm font-bold">
                                        {official.title}
                                    </h3>

                                    <p className="text-gray-500 text-xs mt-2">
                                        {official.position}
                                    </p>

                                </div>

                            </div>

                        ) )}

                    </div>
                </div>
            </section>

            {/* LEADERSHIP MOMENTS */}
            <section className="py-16 px-5 md:px-10">

                <div className="max-w-[1400px] mx-auto">

                    <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                        Leadership
                    </span>

                    <h2 className="text-3xl font-black mt-2">
                        Leadership and community moments
                    </h2>

                    <p className="text-gray-400 text-sm mt-2">
                        Pictures from ATM engagements and meetings.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-8">

                        <div className="rounded-xl overflow-hidden border border-[#304438] bg-[#14221b]">

                            <img
                                src="/image/IMG_5183.JPG"
                                alt="Leadership engagement"
                                className="w-full h-64 md:h-80 object-cover"
                                onError={( e ) => e.currentTarget.style.display = "none"}
                            />

                            <div className="p-4 text-sm font-bold">
                                Leadership Engagement
                            </div>

                        </div>

                        <div className="rounded-xl overflow-hidden border border-[#304438] bg-[#14221b]">

                            <img
                                src="/image/IMG_5186.JPG"
                                alt="Community meeting"
                                className="w-full h-64 md:h-80 object-cover"
                                onError={( e ) => e.currentTarget.style.display = "none"}
                            />

                            <div className="p-4 text-sm font-bold">
                                Community Meeting
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* MEDIA GALLERY */}
            <section id="gallery" className="bg-[#14221b] py-16 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto">

                    <div className="flex justify-between items-center mb-8">

                        <div>
                            <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                                Media Gallery
                            </span>

                            <h2 className="text-3xl font-black mt-2">
                                Moments from the field
                            </h2>
                        </div>

                        <a
                            href="/gallery"
                            className="border border-gray-600 rounded-full px-5 py-2 text-xs font-bold"
                        >
                            Open gallery
                        </a>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

                        {moments.map( ( moment, index ) => (

                            <a
                                href="/gallery"
                                key={index}
                                className={`h-36 rounded-xl border border-white/10 p-4 flex flex-col justify-between hover:scale-[1.02] transition ${[
                                    "bg-gradient-to-br from-green-700 to-green-500",
                                    "bg-gradient-to-br from-slate-700 to-slate-500",
                                    "bg-gradient-to-br from-yellow-700 to-yellow-500",
                                    "bg-gradient-to-br from-sky-800 to-sky-600",
                                    "bg-gradient-to-br from-emerald-800 to-gray-600",
                                    "bg-gradient-to-br from-amber-700 to-yellow-500"
                                ][index]
                                    }`}
                            >

                                <FaExternalLinkAlt className="text-white/70" />

                                <div>
                                    <p className="text-white text-xs font-bold">
                                        {moment}
                                    </p>

                                    <p className="text-white/70 text-[9px] mt-2">
                                        View photos
                                    </p>
                                </div>

                            </a>

                        ) )}

                    </div>
                </div>
            </section>

            {/* REGISTRATION CTA */}
            <section id="register" className="py-16 px-5 md:px-10">

                <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#075638] to-[#08734b] rounded-2xl p-7 md:p-12">

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        <div>

                            <span className="text-yellow-300 text-[10px] font-bold uppercase tracking-[2px]">
                                Join ATM
                            </span>

                            <h2 className="text-3xl md:text-4xl font-black mt-3">
                                Register in about three minutes.
                            </h2>

                            <p className="text-green-100/80 leading-7 text-sm mt-5 max-w-xl">
                                Tell us who you are, choose your LGA and ward, pick how
                                you want to help, and confirm your details. An administrator
                                reviews your application before your digital card is issued.
                            </p>

                            <a
                                href="/register"
                                className="inline-block mt-7 bg-yellow-400 text-[#102419] px-7 py-4 rounded-full font-black text-sm hover:bg-yellow-300 transition"
                            >
                                Join ATM <FaArrowRight className="inline ml-2" />
                            </a>

                        </div>

                        <div className="space-y-4">

                            {[
                                "Enter your details",
                                "Select your LGA, ward and polling unit",
                                "Choose a responsibility or volunteer role",
                                "Give consent and submit",
                                "Receive confirmation"
                            ].map( ( step, index ) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-4 text-sm text-white"
                                >

                                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold shrink-0">
                                        {index + 1}
                                    </span>

                                    {step}

                                </div>

                            ) )}

                        </div>

                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="bg-[#14221b] py-16 md:py-20 px-5 md:px-10 scroll-mt-24">

                <div className="max-w-[1400px] mx-auto">

                    <div className="mb-10">

                        <span className="text-yellow-500 text-[10px] tracking-[2px] font-bold uppercase">
                            Get in touch
                        </span>

                        <h2 className="text-3xl md:text-4xl font-black mt-3">
                            Contact ATM
                        </h2>

                        <p className="text-gray-400 mt-3 max-w-xl leading-7">
                            Have questions, suggestions or want to learn more about
                            our activities? Send us a message.
                        </p>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* CONTACT INFORMATION */}
                        <div className="space-y-5">

                            <div className="bg-[#101b15] border border-[#304438] rounded-xl p-6 flex items-center gap-4">

                                <div className="w-12 h-12 rounded-lg bg-green-900 flex items-center justify-center text-green-400">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h3 className="font-bold">Location</h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Enugu State, Nigeria
                                    </p>
                                </div>

                            </div>

                            <div className="bg-[#101b15] border border-[#304438] rounded-xl p-6 flex items-center gap-4">

                                <div className="w-12 h-12 rounded-lg bg-green-900 flex items-center justify-center text-green-400">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Official contact email to be supplied
                                    </p>
                                </div>

                            </div>

                            <div className="bg-[#101b15] border border-[#304438] rounded-xl p-6 flex items-center gap-4">

                                <div className="w-12 h-12 rounded-lg bg-green-900 flex items-center justify-center text-green-400">
                                    <FaPhone />
                                </div>

                                <div>
                                    <h3 className="font-bold">Phone</h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Official contact number to be supplied
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* CONTACT FORM */}
                        <form
                            onSubmit={( e ) => {
                                e.preventDefault();
                                alert( "Your message has been submitted. Connect this form to your backend to receive messages." );
                                e.currentTarget.reset();
                            }}
                            className="bg-[#101b15] border border-[#304438] rounded-xl p-6 md:p-8 space-y-5"
                        >

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full bg-[#14221b] border border-[#304438] rounded-lg p-4 text-white text-sm outline-none focus:border-yellow-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-[#14221b] border border-[#304438] rounded-lg p-4 text-white text-sm outline-none focus:border-yellow-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Enter message subject"
                                    className="w-full bg-[#14221b] border border-[#304438] rounded-lg p-4 text-white text-sm outline-none focus:border-yellow-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Write your message..."
                                    className="w-full bg-[#14221b] border border-[#304438] rounded-lg p-4 text-white text-sm outline-none focus:border-yellow-500 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-300 text-[#102419] py-4 rounded-full font-bold text-sm transition flex items-center justify-center gap-2"
                            >
                                Send Message <FaPaperPlane />
                            </button>

                        </form>

                    </div>
                </div>
            </section>

            <div>
                <ATMJoinSection />
            </div>

        </div>
    );
};

export default Index;
