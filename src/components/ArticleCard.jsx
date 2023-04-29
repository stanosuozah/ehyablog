import React from "react";
import images from "../constants/images";
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className, title, description, date, profileImage }) => {
	return (
		<div
			className={`rounded-xl overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${className}`}
		>
			<img
				className="w-full h-auto object-cover object-center"
				src={images.PostImage}
				alt="first post"
			/>
			<div className="p-4">
				<h2 className="md:text-2xl font-roboto text-[20px] font-bold text-dark-soft">
					{title}
				</h2>
				<p className="md:text-lg text-[14px] text-dark-light mt-3">
					{description}
				</p>
				<div className="flex justify-between items-center flex-nowrap mt-6">
					<div className="flex justify-between items-center md:gap-x-2.5 gap-x-2">
						<img
							className="rounded-full md:h-[52px] md:w-[52px]"
							width={42}
							height={42}
							src={profileImage}
							alt=""
						/>
						<div className="flex flex-col">
							<h3 className="italic text-dark-soft font-bold text-sm md:text-base">
								Stanley Osuozah
							</h3>
							<div className="flex items-center gap-x-2">
								<span className="bg-[#36B37E] w-fit p-1.5 bg-opacity-20 rounded-full">
									<BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
								</span>

								<p className="text-dark-light text-xs italic">
									Verified writer
								</p>
							</div>
						</div>
					</div>
					<span className="font-bold text-sm italic text-dark-light md:text-base">
						{date}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
