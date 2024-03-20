import React from "react";
//import { images } from "../constants/images";

const CTA = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320">
                <path fill="#6C88D0" fill-opacity="1"
                    d="M0,96L120,117.3C240,139,480,181,720,181.3C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                </path></svg>
            <section className="relative bg-dark-light px-5">
                <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
                    <div className="col-span-12 lg:col-span-6">
                        <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
                            Enjoy our weekly stories delivered into your inbox directly.
                        </h2>
                        <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
                            <input
                                type="text"
                                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                                placeholder="Your Email"
                            />
                            <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap">
                                Get started
                            </button>
                        </div>
                        <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
                            <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light">
                                Get our respone
                            </span>{" "}
                            through your email
                        </p>
                    </div>
                    <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
                        <div className="w-3/4 mx-auto relative">
                            <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
                            <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
                            <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                                {/* <img
                                    src={images.CTA}
                                    alt="title"
                                    className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                                /> */}
                                <div className="p-5">
                                    <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                                        Get Better Everyday
                                    </h2>
                                    <p className="text-dark-light mt-3 text-sm md:text-lg">
                                        Elevate your Potential, Achieve Your Goals, Embrace your Growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;
