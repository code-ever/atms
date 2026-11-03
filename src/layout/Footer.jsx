
import React from "react";

const Footer = () => {
  const navigation = [
    "Home",
    "About ATM",
    "Leadership",
    "Enugu State Structure",
    "News & Updates",
    "Events",
    "Media Gallery",
    "Contact",
    "Member Login",
    "Join ATM",
  ];

  const legal = [
    "Privacy policy",
    "Terms of use",
    "Accessibility",
    "Design system",
  ];

  return (
    <footer className="w-full border-t border-[#b99316] bg-[#002719] text-white">

      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-8 px-[3.75%] py-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_1.1fr_1.15fr_1.15fr_0.9fr] lg:gap-8 lg:py-16">

        {/* BRAND */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="text-lg text-[#d7a817]">♙</span>

            <div>
              <h2 className="text-xl font-bold leading-tight">
                ATM
              </h2>

              <p className="text-xs tracking-[1px] text-[#aabbb2]">
                AS TINUBU & MBAH MOVE · ENUGU
              </p>
            </div>
          </div>

          <p className="max-w-[290px] text-[15px] leading-7 text-[#e1e9e4]">
            An organised grassroots movement across Enugu
            State. Prototype with demonstration data.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-4 text-base font-bold tracking-[1.5px] text-[#d7a817]">
            NAVIGATE
          </h3>

          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[15px] text-white transition-colors hover:text-[#d7a817]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-4 text-base font-bold tracking-[1.5px] text-[#d7a817]">
            CONTACT
          </h3>

          <div className="flex flex-col gap-3 text-[15px] leading-6 text-[#e2e9e5]">

            <p>
              [ATM State Secretariat address – to be supplied],
              Enugu
            </p>

            <a
              href="mailto:info@atm.example"
              className="transition-colors hover:text-[#d7a817]"
            >
              info@atm.example
            </a>

            <a
              href="tel:08000009000"
              className="transition-colors hover:text-[#d7a817]"
            >
              0800 000 9000
            </a>

            <p className="text-[#9eafa6]">
              Placeholders: replace with approved details.
            </p>

          </div>
        </div>

        {/* OFFICIAL CHANNELS */}
        <div>
          <h3 className="mb-4 text-base font-bold tracking-[1.5px] text-[#d7a817]">
            OFFICIAL CHANNELS
          </h3>

          <div className="flex flex-col gap-3 text-[15px] leading-6 text-[#e2e9e5]">

            <p>
              Facebook · <span className="text-[#9eafa6]">
                handle to be supplied
              </span>
            </p>

            <p>
              X (Twitter) · <span className="text-[#9eafa6]">
                handle to be supplied
              </span>
            </p>

            <p>
              Instagram · <span className="text-[#9eafa6]">
                handle to be supplied
              </span>
            </p>

            <p>
              WhatsApp channel · <span className="text-[#9eafa6]">
                to be supplied
              </span>
            </p>

          </div>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="mb-4 text-base font-bold tracking-[1.5px] text-[#d7a817]">
            LEGAL
          </h3>

          <ul className="space-y-3">
            {legal.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[15px] text-white transition-colors hover:text-[#d7a817]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto max-w-[1800px] border-t border-white/10 px-[3.75%] py-4">
        <p className="text-[13px] leading-6 text-[#c4d0c9]">
          © 2026 ATM. All rights reserved. This site does not use
          government or INEC insignia and is not affiliated with
          any political party's official channels unless stated.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
