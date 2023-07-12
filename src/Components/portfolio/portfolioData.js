import IMG1 from "../../assets/imgs/portfolio1.jpg";
import IMG2 from "../../assets/imgs/portfolio2.jpg";
import IMG3 from "../../assets/imgs/portfolio3.jpg";
import IMG4 from "../../assets/imgs/portfolio4.jpg";
import IMG5 from "../../assets/imgs/portfolio5.png";
import IMG6 from "../../assets/imgs/portfolio6.jpg";
import IMG7 from "../../assets/imgs/portfolio7.jpg";
import IMG8 from "../../assets/imgs/portfolio8.jpg";

import SUPABASE from "../../assets/imgs/supabase.png";
import { REACT, CSS, HTML, JS, MUI } from "../../iconConfig";

// data
export const data = [
	{
		id: 1,
		image: IMG6,
		title: "Country data",
		githubLink: "https://github.com/Amit258012/Country-Data",
		liveDemo: "https://country-neighbour-data.netlify.app",
		logos: [HTML, CSS, JS],
		desc: "Simple Country app which displays the living country details using geolocation and more",
	},
	{
		id: 2,
		image: IMG5,
		title: "Bank app",
		githubLink: "https://github.com/Amit258012/Bankist-app",
		liveDemo: "https://fend-bankist.netlify.app/",
		logos: [HTML, CSS, JS],
		desc: "Simple bank app with interactive functionality like Loan , Debit ,Withdraw , Login and more.",
	},
	{
		id: 3,
		image: IMG3,
		title: "Omnifood",
		githubLink: "https://github.com/Amit258012/UI-Restaurants-website",
		liveDemo: "https://omnifood-rest-ui.netlify.app/",
		logos: [HTML, CSS],
		desc: "Omnifood is a beautiful UI Static website for restaurants.",
	},
	{
		id: 4,
		image: IMG4,
		title: "Workout Map",
		githubLink: "https://github.com/Amit258012/MAPTY",
		liveDemo: "https://map-wkout.netlify.app/",
		logos: [HTML, CSS, JS],
		desc: "A workout map is used to mark the places on the map, it will display the data on the map.",
	},
	{
		id: 5,
		image: IMG2,
		title: "Forkify",
		githubLink: "https://github.com/Amit258012/Recip-app",
		liveDemo: "https://forkify-v2.netlify.app/",
		logos: [HTML, CSS, JS],
		desc: "Forkify is the web app used to search recipes, and get the amount of ingredients according to the servings.",
	},
	{
		id: 6,
		image: IMG1,
		title: "Optbest",
		githubLink: "https://github.com/Amit258012/Selective-subject",
		liveDemo: "https://optbest.netlify.app/",
		logos: [HTML, CSS, JS],
		desc: "The selective Subject is used to opt for the best-suited optional subject for 6th sem sutdents.",
	},

	{
		id: 7,
		image: IMG8,
		title: "YouTube Clone",
		githubLink: "https://github.com/Amit258012/yt_clone",
		liveDemo: "https://amitstube.netlify.app/",
		logos: [REACT, MUI],
		desc: "YouTube Clone web app is used to search and watch videos, it also recommends related videos.",
	},
	{
		id: 8,
		image: IMG7,
		title: "Today's Fact",
		githubLink: "https://github.com/Amit258012/supabase-project",
		liveDemo: "https://amitfacts.netlify.app/",
		logos: [REACT, CSS, SUPABASE],
		desc: "Today's fact is the web app that is used to share and react to facts in real-time and more.",
	},
];
