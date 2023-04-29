import React from "react";
import { images } from "../../../constants";

const CTA = () => {
	return (
		<>
			<svg
				preserveAspectRatio="none"
				className="h-auto w-full translate-y-1 max-h-40"
				viewBox="0 0 2160 263"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Wave"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
					fill="#0D2436"
				/>
			</svg>

			<section className="bg-dark-thick relative px-5">
				<div className="grid grid-cols-12 md:pb-20 mx-auto lg:place-items-center ">
					<div className="col-span-12 lg:col-span-6">
						<h1 className="font-roboto md:text-4l md:text-center font-bold lg:text-left text-white text-2xl">
							Get our stories delivered from us to your inbox weekly.
						</h1>
						<div className="w-full max-w[494px] md:px-8 space-y-3 md:flex md:space-y-0 md:space-x-2 md:justify-center md:items-center mt-10 mx-auto lg:mx-0 lg:flex lg:justify-start lg:items-start lg:px-0">
							<input
								placeholder="your email"
								type="text"
								className="placeholder:text-dark-light  w-full px-4 py-3 rounded-lg"
							/>

							<button className="py-3 px-4 w-full bg-primary text-white md:w-fit md:whitespace-nowrap font-bold text-center font-roboto text-base rounded-lg">
								Get started
							</button>
						</div>
						<p className="lg:text-left text-sm mt-6 text-dark-light leading-6 md:text-center">
							<span className="italic md:not-italic md:font-normal md:-text-dark-lift font-bold text-base text-white">
								Get a response tomorrow &nbsp;
							</span>
							if you submit by 9pm today. If we received after 9pm will get a
							reponse the following day.
						</p>
					</div>
					<div className="hidden md:block md:order-first col-span-12 mb-[70px] lg:order-last lg:col-span-6">
						<div className="relative mx-auto w-3/4">
							<div className="absolute rounded-md bg-[#FC5A5A] w-1/2 h-1/2 top-[10%] -right-[8%]"></div>
							<div className="absolute rounded-md bg-dark-soft w-1/2 h-1/2 -bottom-[10%] -left-[8%]"></div>
							<div className=" bg-white p-3 z-[1] relative rounded-xl w-full">
								<img
									className="w-full h-auto object-cover object-center"
									src={images.CtaImage}
									alt="first post"
								/>
								<div className="p-4">
									<h2 className="md:text-2xl font-roboto text-[20px] font-bold text-dark-soft">
										The best articles every week
									</h2>
									<p className="md:text-lg text-[14px] text-dark-light mt-3">
										Our insurance plans offers are priced the same everywhere
										else.
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
