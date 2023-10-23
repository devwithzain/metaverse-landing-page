"use client";
import Lenis from "@studio-freight/lenis";
import { Footer, Navbar } from "@components";
import {
	About,
	Explore,
	Feedback,
	GetStarted,
	Hero,
	Insights,
	WhatsNew,
	World,
} from "@sections";
import { useEffect } from "react";

const Page: React.FC = () => {
	useEffect(() => {
		const lenis = new Lenis();

		lenis.on("scroll", (e: any) => {
			console.log(e);
		});

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<div className="bg-primary-black overflow-hidden">
			<Navbar />
			<Hero />
			<div className="relative">
				<About />
				<div className="gradient-03 z-0" />
				<Explore />
			</div>
			<div className="relative">
				<GetStarted />
				<div className="gradient-04 z-0" />
				<WhatsNew />
			</div>
			<World />
			<div className="relative">
				<Insights />
				<div className="gradient-04 z-0" />
				<Feedback />
			</div>
			<Footer />
		</div>
	);
};
export default Page;
