import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import CTA from "./container/CTA";

const Homepage = () => {
	return (
		<div className="">
			<MainLayout>
				<Hero />
				<Articles />
				<CTA />
			</MainLayout>
		</div>
	);
};

export default Homepage;
