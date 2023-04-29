import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ArticleCard from "../../../components/ArticleCard";
import images from "../../../constants/images";

const Articles = () => {
	return (
		<section className="flex flex-col">
			<div className="mx-auto flex flex-wrap  md:grid md:grid-cols-2 md:gap-x-5  gap-y-5 px-5 py-10 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 ">
				<ArticleCard
					className="w-full"
					title="Future of Work"
					description="Majority of peole will work in jobs that don’t exist today."
					date="02 May"
					profileImage={images.ProfileImage}
				/>
				<ArticleCard
					className="w-full"
					title="Future of Work"
					description="Majority of peole will work in jobs that don’t exist today."
					date="02 May"
					profileImage={images.ProfileImage}
				/>
				<ArticleCard
					className="w-full"
					title="Future of Work"
					description="Majority of peole will work in jobs that don’t exist today."
					date="02 May"
					profileImage={images.ProfileImage}
				/>
				<ArticleCard
					className="w-full"
					title="Future of Work"
					description="Majority of peole will work in jobs that don’t exist today."
					date="02 May"
					profileImage={images.ProfileImage}
				/>
			</div>
			<button className="flex items-center gap-x-2 border-2 font-bold text-primary text-sm  font-roboto self-center rounded-md px-2.5 py-0.5 border-primary">
				More articles
				<span>
					<AiOutlineArrowRight className="h-3 w-3" />
				</span>
			</button>
		</section>
	);
};

export default Articles;
