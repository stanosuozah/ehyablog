import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const navItemsInfo = [
	{
		name: "Home",
		type: "link",
	},
	{
		name: "Articles",
		type: "link",
		link: "blog/1",
	},
	{
		name: "Pages",
		type: "dropdown",
		items: ["About us", "Contact us"],
	},
	{
		name: "Pricing",
		type: "link",
	},
	{
		name: "Faq",
		type: "link",
	},
];

const NavItem = ({ item }) => {
	const [pageDropDown, setPageDropDown] = useState(false);

	const handlePageDropDown = () => {
		setPageDropDown(!pageDropDown);
	};
	return (
		<li className="relative group">
			{item.type === "link" ? (
				<>
					<a
						href={item.link}
						className="py-2 cursor-pointer font-bold font-sans px-4"
					>
						{item.name}
					</a>
					<span className="group-hover:right-[92%] group-hover:opacity-100 opacity-0 font-bold transition-all duration-500 absolute">
						/
					</span>
				</>
			) : (
				<div className="flex flex-col items-center">
					<button
						onClick={handlePageDropDown}
						className="py-2 flex gap-x-1 items-center cursor-pointer font-bold font-sans px-4"
					>
						{item.name}
						<MdKeyboardArrowDown />
					</button>

					<div
						className={`${
							pageDropDown ? "block" : "hidden"
						} w-max lg:hidden lg:absolute lg:transform lg:translate-y-full lg:group-hover:block lg:right-0 lg:bottom-0 transition-all pt-3 duration-500`}
					>
						<ul className="flex bg-dark-soft text-center lg:bg-transparent flex-col rounded-lg shadow-lg overflow-hidden">
							{item.items.map((page) => (
								<a className="cursor-pointer hover:bg-dark-thick hover:text-white py-2 px-4 lg:text-black lg:bg-white">
									{page}
								</a>
							))}
						</ul>
					</div>
				</div>
			)}
		</li>
	);
};

const Header = () => {
	//state for controlling responsiveness of the nav
	const [navIsOpen, setNavIsOpen] = useState(false);

	const handleNav = () => {
		setNavIsOpen(!navIsOpen);
	};
	return (
		<section className="sticky left-0 top-0 right-0 z-50 bg-white">
			<header className="flex justify-between px-5 py-5 items-center">
				<div>
					<Link to="/">
						<img src={images.Logo} alt="logo" className="w-16" />
					</Link>
				</div>
				<div className="z-40 lg:hidden">
					{navIsOpen ? (
						<AiOutlineClose className="h-6 w-6" onClick={handleNav} />
					) : (
						<AiOutlineMenu className="h-6 w-6" onClick={handleNav} />
					)}
				</div>
				<div
					className={`${navIsOpen ? "right-0" : "hidden"}
						 lg:mt-0 mt-[56px]  bg-dark-thick lg:bg-transparent z-50 fixed w-full  justify-center flex flex-col lg:static lg:w-auto lg:flex lg:flex-row bottom-0 top-0 lg:justify-end gap-x-9
                            `}
				>
					<ul className="gap-y-5 lg:flex-row text-white  lg:text-black flex flex-col lg:flex  lg:justify-between gap-x-2 items-center">
						{navItemsInfo.map((navitem, index) => (
							<NavItem key={navitem.name} item={navitem} />
						))}
					</ul>

					<button className="border-2 mt-5 self-center lg:mt-0 rounded-[200px] font-bold text-sm font-sans text-[#1565D8] transition-all duration-500 hover:bg-blue-700 hover:text-white border-[#1565D8] px-6 py-2">
						Sign in
					</button>
				</div>
			</header>
		</section>
	);
};

export default Header;
