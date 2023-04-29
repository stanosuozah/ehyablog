import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
	return (
		<div className="flex items-center overflow-x-auto py-4 whitespace-nowrap">
			{data.map((item, index) => (
				<div className="text-black opacity-50 text-xs md:text-sm font-roboto">
					<Link to={item.link}>{item.name}</Link>
					{index !== data.length - 1 ? (
						<span className="text-black opacity-50 px-3">/</span>
					) : (
						""
					)}
				</div>
			))}
		</div>
	);
};

export default BreadCrumbs;
