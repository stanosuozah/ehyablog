import React from "react";
import { images } from "../../../constants";
import { Link } from "react-router-dom";

const SuggesstedPosts = ({ className, header, tags, posts = [] }) => {
	return (
		<div
			className={`${className} shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 rounded-lg  w-full lg:flex-row lg:gap-x-5 lg:items-start`}
		>
			<h2 className="font-medium font-roboto text-dark-hard md:text-xl">
				{header}
			</h2>
			<div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
				{posts.map((item) => (
					<div
						key={item.id}
						className="flex flex-nowrap space-x-3 items-center"
					>
						<img
							src={item.image}
							alt="first post"
							className="aspect-square object-cover rounded-lg w-1/5"
						/>
						<div className="font-roboto text-dark-thick font-medium text-sm">
							<h3 className="text-sm font-roboto font-medium text-dark-thick md:text-base lg:text-lg">
								{item.title}
							</h3>
							<span className="opacity-60 text-xs">
								{new Date(item.createdAt).toLocaleDateString("en-GB", {
									day: "numeric",
									month: "short",
									year: "numeric",
								})}
							</span>
						</div>
					</div>
				))}
			</div>
			<h2 className="font-roboto mt-8 text-dark-thick font-medium md:text-xl">
				Tags
			</h2>
			<div className="flex flex-wrap gapy-y-2 gap-x-2 mt-4 lg:gap-x-3 lg:gap-y-3">
				{tags.map((item) => (
					<Link className="rounded-md px-3 py-1.5 bg-primary inline-block text-white font-roboto text-xs md:text-sm">
						{item}
					</Link>
				))}
			</div>
		</div>
	);
};

export default SuggesstedPosts;
