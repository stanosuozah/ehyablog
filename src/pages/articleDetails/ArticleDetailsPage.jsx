import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggesstedPosts from "./container/SuggesstedPosts";

const breadCrumbsData = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Blog",
		link: "/blog",
	},
	{
		name: "Article title",
		link: "/blog/1",
	},
];

const postsData = [
	{
		id: "1",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: "2023-01-28T15:35:53.607+0000",
	},
	{
		id: "2",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: "2023-01-28T15:35:53.607+0000",
	},
	{
		id: "3",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: "2023-01-28T15:35:53.607+0000",
	},
	{
		id: "4",
		image: images.PostImage,
		title: "Help children get better education",
		createdAt: "2023-01-28T15:35:53.607+0000",
	},
];

const tagsData = [
	"Lifestyle",
	"Food",
	"Education",
	"Diet",
	"Food",
	"Education",
	"Diet",
];

const ArticleDetailsPage = () => {
	return (
		<div>
			<MainLayout>
				<section className="mx-auto flex flex-col max-w-5xl px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
					<article className="flex-1">
						<BreadCrumbs data={breadCrumbsData} />
						<img
							src={images.PostImage}
							alt="post-image"
							className="w-full rounded-xl"
						/>
						<Link
							to="/blog?category=selectedCategory"
							className="mt-4 text-primary font-medium text-sm md:text-base font-roboto inline-block"
						>
							EDUCATION
						</Link>
						<h2 className="font-medium text-xl md:text-[26px] font-roboto mt-4 text-dark-thick">
							Help children get better education
						</h2>
						<div className="text-dark-soft mt-4">
							<p className="leading-7">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
								congue mauris rhoncus aenean vel elit scelerisque. In egestas
								erat imperdiet sed euismod nisi porta lorem mollis. Morbi
								tristique senectus et netus. Mattis pellentesque id nibh tortor
								id aliquet lectus proin.
							</p>
						</div>
					</article>

					<SuggesstedPosts
						header="Latest Articles"
						posts={postsData}
						tags={tagsData}
						className="mt-8 lg:max-w-xs lg:mt-0"
					/>
				</section>
			</MainLayout>
		</div>
	);
};

export default ArticleDetailsPage;
