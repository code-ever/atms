
import { useState, useEffect } from "react";
import {
    FaSearch,
    FaSignInAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const Header = () => {
    const [activeLink, setActiveLink] = useState( "Home" );
    const [mobileMenu, setMobileMenu] = useState( false );
    const [searchOpen, setSearchOpen] = useState( false );

    // All links point to sections on the same homepage
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About ATM", href: "#about" },
        { name: "Leadership", href: "#leadership" },
        { name: "Enugu State Structure", href: "#structure" },
        { name: "News & Updates", href: "#news" },
        { name: "Events", href: "#events" },
        { name: "Media Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    // Smooth navigation
    const handleNavigation = ( name, href ) => {
        setActiveLink( name );
        setMobileMenu( false );
        setSearchOpen( false );

        const target = document.querySelector( href );

        if ( target ) {
            target.scrollIntoView( {
                behavior: "smooth",
                block: "start",
            } );

            // Update URL without reloading the page
            window.history.replaceState( null, "", href );
        }
    };

    // Automatically highlight active section while scrolling
    useEffect( () => {
        const sectionIds = navLinks.map( ( link ) =>
            link.href.replace( "#", "" )
        );

        const sections = sectionIds
            .map( ( id ) => document.getElementById( id ) )
            .filter( Boolean );

        if ( !sections.length ) return;

        const observer = new IntersectionObserver(
            ( entries ) => {
                const visibleSections = entries
                    .filter( ( entry ) => entry.isIntersecting )
                    .sort(
                        ( a, b ) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if ( visibleSections.length ) {
                    const currentId = visibleSections[0].target.id;

                    const currentLink = navLinks.find(
                        ( link ) => link.href === `#${currentId}`
                    );

                    if ( currentLink ) {
                        setActiveLink( currentLink.name );
                    }
                }
            },
            {
                root: null,
                rootMargin: "-100px 0px -55% 0px",
                threshold: [0, 0.1, 0.25, 0.5],
            }
        );

        sections.forEach( ( section ) => observer.observe( section ) );

        return () => observer.disconnect();
    }, [] );

    return (
        <header className="w-full bg-[#0d1512] border-t border-[#c6a43a] relative z-50">

            {/* MAIN HEADER */}
            <div className="max-w-[1920px] mx-auto min-h-[80px] lg:min-h-[87px] px-2 sm:px-2 lg:px-[2.15%] flex items-center justify-between gap-2">

                {/* DESKTOP LOGO */}
                <a
                    href="#home"
                    onClick={( e ) => {
                        e.preventDefault();
                        handleNavigation( "Home", "#home" );
                    }}
                    className="hidden xl:flex flex-col shrink-0 mr-4"
                >
                    <span className="text-white text-[20px] font-bold leading-none tracking-tight">
                        ATM
                    </span>

                    <span className="text-[#a2aea9] text-[13px] font-medium tracking-[1.1px] mt-1.5 whitespace-nowrap">
                        AS TINUBU & MBAH MOVE · ENUGU
                    </span>
                </a>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden xl:flex items-center justify-center flex-1 gap-0.5 2xl:gap-1">

                    {navLinks.map( ( link ) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={( e ) => {
                                e.preventDefault();
                                handleNavigation( link.name, link.href );
                            }}
                            className={`px-2 2xl:px-[13px] py-3 2xl:py-[17px] rounded-full text-[14px] 2xl:text-[17px] font-medium whitespace-nowrap transition-all duration-300 ${activeLink === link.name
                                    ? "bg-[#101d18] text-[#91b6a7]"
                                    : "text-[#e1e6e3] hover:text-[#91b6a7] hover:bg-[#101d18]"
                                }`}
                        >
                            {link.name}
                        </a>
                    ) )}

                </nav>

                {/* DESKTOP ACTIONS */}
                <div className="hidden xl:flex items-center gap-2 ml-3 shrink-0">

                    {/* SEARCH BUTTON */}
                    <button
                        type="button"
                        aria-label="Search"
                        onClick={() => setSearchOpen( !searchOpen )}
                        className="w-[40px] h-[45px] rounded-[20px] border border-[#293a33] text-white flex items-center justify-center hover:bg-[#18241f] transition-all"
                    >
                        <FaSearch className="text-[18px]" />
                    </button>

                    {/* MEMBER LOGIN */}
                    <a
                        href="/login"
                        className="h-[40px] px-4 rounded-full border-2 border-[#293a33] text-[#e4e9e6] flex items-center gap-2 text-[11px] font-medium whitespace-nowrap hover:bg-[#18241f] transition-all"
                    >
                        <FaSignInAlt />
                        Member Login
                    </a>

                </div>

                {/* MOBILE HEADER */}
                <div className="xl:hidden w-full flex items-center justify-between gap-2">

                    {/* MOBILE LOGO */}
                    <a
                        href="#home"
                        onClick={( e ) => {
                            e.preventDefault();
                            handleNavigation( "Home", "#home" );
                        }}
                        className="flex items-center gap-2 sm:gap-3 shrink-0"
                    >

                        <div className="w-[48px] h-[48px] min-[480px]:w-[60px] min-[480px]:h-[60px] rounded-[15px] min-[480px]:rounded-[17px] bg-[#075c42] border-[1.5px] border-[#d4ad28] flex items-center justify-center shrink-0">

                            <svg
                                viewBox="0 0 64 64"
                                className="w-[38px] h-[38px] min-[480px]:w-[45px] min-[480px]:h-[45px]"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 51L29 10C30 7 34 7 35 10L55 51C57 55 52 58 49 54L32 19L15 54C12 58 7 55 9 51Z"
                                    fill="#FFFFFF"
                                />

                                <path
                                    d="M20 38H46"
                                    stroke="#D4AD28"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                />

                            </svg>
                        </div>

                        <span className="text-white text-[20px] min-[480px]:text-[24px] font-bold tracking-tight">
                            ATM
                        </span>
                    </a>

                    {/* MOBILE SEARCH */}
                    <button
                        type="button"
                        aria-label="Search"
                        onClick={() => {
                            setSearchOpen( !searchOpen );
                            setMobileMenu( false );
                        }}
                        className="w-[44px] h-[48px] min-[480px]:w-[69px] min-[480px]:h-[69px] shrink-0 rounded-[14px] min-[480px]:rounded-[20px] border border-[#293a33] bg-[#111b17] text-[#e4e9e6] flex items-center justify-center hover:bg-[#1b2922] transition-all"
                    >
                        <FaSearch className="text-[17px] min-[480px]:text-[20px]" />
                    </button>

                    {/* JOIN ATM */}
                    <a
                        href="/join"
                        className="h-[43px] min-[480px]:h-[55px] px-3 min-[480px]:px-6 rounded-full bg-[#d0a923] hover:bg-[#e0b72e] text-[#11150e] flex items-center justify-center shrink-0 text-[13px] min-[480px]:text-[18px] font-semibold whitespace-nowrap transition-all duration-300"
                    >
                        Join ATM
                    </a>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        type="button"
                        onClick={() => {
                            setMobileMenu( !mobileMenu );
                            setSearchOpen( false );
                        }}
                        aria-label={mobileMenu ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenu}
                        className="w-[44px] h-[48px] min-[480px]:w-[69px] min-[480px]:h-[69px] shrink-0 rounded-[14px] min-[480px]:rounded-[20px] border border-[#293a33] bg-[#111b17] text-[#e4e9e6] flex items-center justify-center hover:bg-[#1b2922] transition-all"
                    >
                        {mobileMenu ? (
                            <FaTimes className="text-[19px] min-[480px]:text-[21px]" />
                        ) : (
                            <FaBars className="text-[18px] min-[480px]:text-[19px]" />
                        )}
                    </button>

                </div>
            </div>

            {/* SEARCH DROPDOWN */}
            {searchOpen && (
                <div className="absolute top-full right-3 sm:right-5 xl:right-[5%] w-[calc(100%-24px)] sm:w-[320px] bg-[#111d18] border border-[#293a33] rounded-xl p-3 shadow-xl">

                    <form
                        onSubmit={( e ) => {
                            e.preventDefault();

                            const query = e.currentTarget.elements.search.value.trim();

                            if ( query ) {
                                window.location.href = `/search?q=${encodeURIComponent( query )}`;
                            }
                        }}
                        className="flex gap-2"
                    >
                        <input
                            type="search"
                            name="search"
                            placeholder="Search website..."
                            className="w-full min-w-0 bg-[#0d1512] border border-[#293a33] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[#d0a923]"
                        />

                        <button
                            type="submit"
                            className="bg-[#d0a923] text-[#11150e] px-4 rounded-lg text-sm font-medium"
                        >
                            Search
                        </button>
                    </form>

                </div>
            )}

            {/* MOBILE MENU DROPDOWN */}
            {mobileMenu && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-[#0d1512] border-t border-[#293a33] shadow-2xl">

                    <nav className="flex flex-col px-4 sm:px-6 py-4 gap-1">

                        {navLinks.map( ( link ) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={( e ) => {
                                    e.preventDefault();
                                    handleNavigation( link.name, link.href );
                                }}
                                className={`px-5 py-3.5 rounded-lg text-[15px] sm:text-[16px] font-medium transition-all ${activeLink === link.name
                                        ? "bg-[#18241f] text-[#91b6a7]"
                                        : "text-[#e1e6e3] hover:bg-[#18241f]"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ) )}

                        {/* MEMBER LOGIN */}
                        <a
                            href="/login"
                            className="mt-2 border border-[#293a33] rounded-full px-5 py-3.5 flex items-center justify-center gap-3 text-white text-[15px] font-medium hover:bg-[#18241f] transition-all"
                        >
                            <FaSignInAlt />
                            Member Login
                        </a>

                    </nav>
                </div>
            )}

        </header>
    );
};

export default Header;
