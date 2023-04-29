import React from "react";
import { FiSearch } from "react-icons/fi";
import { images } from "../../../constants";

const Hero = () => {
	return (
		<section className="z-5 flex flex-col mx-auto py-5 px-5 lg:flex-row ">
			<div className="lg:w-1/2 mt-10">
				<div className="mb-10">
					<h1 className="text-3xl lg:text-left lg:text-4xl xl:text-5xl font-bold lg:max-w-[540px] text-dark-soft md:text-5xl font-roboto text-center">
						Read the most interesting articles
					</h1>
					<p className="text-center md:text-xl lg:text-left mt-4 text-dark-light lg:text-base xl:text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua
					</p>
				</div>

				<div className="flex flex-col gap-y-3 relative mt-8 lg:mt-6 xl:mt-8">
					<div className="relative">
						<FiSearch className="absolute -translate-y-1/2  w-6 h-6 text-[#959ead] top-1/2 left-3" />
						<input
							type="text"
							placeholder="Search articles"
							className="md:p-y-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full pl-12 py-3 focus:outline-none rounded-lgplaceholder:font-bold font-semibold text-dark-soft"
						/>
					</div>
					<button className="bg-primary px-5 py-3 font-semibold md:absolute md:right-2 md:top-1/2 md:w-fit md:py-2 md:-translate-y-1/2 rounded-lg text-white w-full">
						Search
					</button>
				</div>

				<div className="flex flex-col mt-4 lg:items-start lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
					<span className="lg:mt-4 mt-1 font-semibold italic text-dark-light lg:text-sm xl:text-base">
						Popular Tags:
					</span>
					<ul className="flex flex-wrap mt-3 gap-y-2 gap-x-2 lg:text-sm xl:text-base">
						<li className="bg-primary bg-opacity-10 font-semibold rounded-lg py-1.5 px-3 text-primary">
							Design Principles
						</li>
						<li className="bg-primary bg-opacity-10 font-semibold rounded-lg py-1.5 px-3 text-primary">
							User Experience
						</li>
						<li className="bg-primary bg-opacity-10 font-semibold rounded-lg py-1.5 px-3 text-primary">
							Designers Chess
						</li>
					</ul>
				</div>
			</div>
			<div className="lg:block hidden lg:w-1/2">
				<img className="w-full" src={images.Hero} alt="Reading articles" />
			</div>
		</section>
	);
};

export default Hero;
