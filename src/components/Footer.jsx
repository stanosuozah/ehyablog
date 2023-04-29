import React from "react";
import { images } from "../constants";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
	return (
		<section className="bg-dark-thick ">
			<footer className="grid grid-cols-10 md:grid-cols-12 md:pt-15 mx-auto px-5 py-10 gap-y-10 gap-x-5 lg:grid-cols-10 lg:gap-x-10">
				<div className="col-span-5 md:col-span-4 lg:col-span-2">
					<h3 className="font-bold text-dark-light">Product</h3>
					<ul className="text-[#959ead] mt-5 space-y-4 text-sm">
						<li>
							<a href="/">Landingpage</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5 md:col-span-4 lg:col-span-2">
					<h3 className="font-bold text-dark-light">Product</h3>
					<ul className="text-[#959ead] mt-5 space-y-4 text-sm">
						<li>
							<a href="/">Landingpage</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
					<h3 className="font-bold text-dark-light">Product</h3>
					<ul className="text-[#959ead] mt-5 space-y-4 text-sm">
						<li>
							<a href="/">Banny</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5 md:col-span-4 lg:col-span-2">
					<h3 className="font-bold text-dark-light">Product</h3>
					<ul className="text-[#959ead] mt-5 space-y-4 text-sm">
						<li>
							<a href="/">Landingpage</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>

				<div className="md:order-first md:col-span-4 col-span-10">
					<img
						src={images.Logo}
						alt="logo"
						className="mx-auto brightness-0 invert md:flex md:mx-0"
					/>
					<p className="mt-4 md:text-left md:text-base text-sm col-span-10 text-dark-light text-center">
						Build a modern and creative website with crealand
					</p>
					<ul className="mt-6 col-span-10 flex justify-center  space-x-4 items-center md:flex md:justify-start">
						<li>
							<a>
								<AiOutlineInstagram className="w-6 h-auto text-white" />
							</a>
						</li>
						<li>
							<a>
								<AiOutlineTwitter className="w-6 h-auto text-white" />
							</a>
						</li>
						<li>
							<a>
								<FaFacebook className="w-6 h-auto text-white" />
							</a>
						</li>
						<li>
							<a>
								<AiOutlineYoutube className="w-6 h-auto text-white" />
							</a>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex md:flex-col md:items-center md:space-4 md:col-span-12">
					<div className="p-3 rounded-full bg-primary text-white">
						<AiFillHeart className="h-auto w-6 " />
					</div>
					<p className="text-dark-light mt-2 italic font-bold">
						Copyright &copy; Stanley Osuozah 2023.
					</p>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
