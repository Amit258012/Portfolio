import "./about.css";
import ME from "../../assets/imgs/IMG5.jpg";
import { FaAward } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About({ setActive }) {
	const pageHeight = window.innerHeight;
	const observerMargin = Math.floor(pageHeight / 2);
	const { ref, inView } = useInView({
		rootMargin: `-${
			pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
		}px 0px -${observerMargin}px 0px`,
	});

	if (inView) {
		setActive("#about");
	}

	useEffect(() => {
		AOS.init({ duration: 500 });
	}, []);
	useEffect(() => {
		if (AOS) {
			AOS.refresh();
		}
	});

	return (
		<section id="about" className="about" ref={ref}>
			{console.log("about", inView)}
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<img
						src={ME}
						alt="amit's Image"
						className="about__me-image"
					/>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article
							className="about__card"
							data-aos="fade-right"
							data-aos-duration="400">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>Working as Intern</small>
						</article>
						<article
							className="about__card"
							data-aos="fade-right"
							data-aos-duration="800">
							<SiUdemy className="about__icon" />
							<h5>Courses</h5>
							<small>3+ Courses completed</small>
						</article>
						<article
							className="about__card"
							data-aos="fade-right"
							data-aos-duration="1000">
							<BiCodeAlt className="about__icon" />
							<h5>Projects</h5>
							<small>10+ Projects Completed</small>
						</article>
					</div>
					<p className="para">
						I'm Amit, a skilled front-end developer who loves
						creating captivating digital experiences. Using HTML,
						CSS, JavaScript and React, I bring static designs to
						life, making beautiful and interactive websites. Let's
						work together to bring your vision to reality with
						high-performance websites.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;
