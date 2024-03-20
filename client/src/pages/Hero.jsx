import React from "react";
import { FiSearch } from "react-icons/fi";
import { images } from "../constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <div className="mt-10 px-5 py-5 text-center lg:text-left">
          <h1 className="font-opensans text-3xl font-bold text-[#6C88D0] md:text-5xl lg:text-4xl xl:text-5xl lg:max-w-[540px]">
            Health Articles that Interests You!!
          </h1>
          <p className="text-dark-hard mt-4 md:text-xl lg:text-base xl:text-xl">
          Discover a treasure trove of captivating health 
          articles tailored to your interests. 
          Stay informed, be inspired, and start your journey to better health today!!V1.0.0
          </p>
          <div className="flex flex-col gap-y-2.5 mt-10 xl:mt-10 relative">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#959EAD]">
                <FiSearch className="w-6 h-6" />
              </div>
              <input
                className="placeholder:font-bold font-semibold text-dark-soft placeholder-text-[#959EAD] rounded-full pl-12 pr-3 w-full py-3 focus:outline-none shadow-md md:py-4 bg-[#F2F2F2] border border-[#E6E6E6]"
                type="text"
                placeholder="Search article"
              />
            </div>
            <div>
              <button className="w-full bg-[#6C88D0] text-white font-semibold rounded-full px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
                Search
              </button>
            </div>
          </div>
          <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
            <span className="text-dark-hard font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
              Trending Posts:
            </span>
            <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold hover:text-dark-hard">
                Health
              </li>
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold hover:text-dark-hard">
                Eating Habits
              </li>
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold hover:text-dark-hard">
                Covid-19
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
