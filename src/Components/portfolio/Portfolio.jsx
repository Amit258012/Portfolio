import "./portfolio.css";
import { useInView } from "react-intersection-observer";
import { data } from "./portfolioData.js";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Portfolio({ setActive }) {
	const pageHeight = window.innerHeight;
	const observerMargin = Math.floor(pageHeight / 2);
	const { ref, inView } = useInView({
		rootMargin: `-${
			pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
		}px 0px -${observerMargin}px 0px`,
	});

	if (inView) {
		setActive("#portfolio");
	}
	useEffect(() => {
		AOS.init({ duration: 900 });
	}, []);
	useEffect(() => {
		if (AOS) {
			AOS.refresh();
		}
	});

	return (
		<section id="portfolio" ref={ref}>
			<h5>My Recent Projects</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data
					.slice()
					.reverse()
					.map(
						({
							id,
							image,
							title,
							githubLink,
							liveDemo,
							logos,
							desc,
						}) => {
							return (
								<article
									key={id}
									className="portfolio__item"
									data-aos="zoom-in-down">
									<div className="portfolio__item-image">
										<img
											src={image}
											alt={title}
											className="portfolio__image"
										/>
									</div>
									<div className="title-logo">
										<h3>{title}</h3>
										<div className="logos-container">
											{logos.map((logo, i) => (
												<img
													className="logos"
													src={logo}
													key={i}
												/>
											))}
										</div>
									</div>
									<div className="desc">
										<p>{desc}</p>
									</div>
									<div className="portfolio__item-cta">
										<a
											href={githubLink}
											className="btn"
											target="_blank"
											rel="noreferrer">
											Github
										</a>
										<a
											href={liveDemo}
											className="btn btn-primary"
											target="_blank"
											rel="noreferrer">
											Live Demo
										</a>
									</div>
								</article>
							);
						}
					)}
			</div>
		</section>
	);
}

export default Portfolio;
