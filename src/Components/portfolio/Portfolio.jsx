import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import { useInView } from "react-intersection-observer";

// data
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Optbest",
    githubLink: "https://github.com/Amit258012/Selective-subject",
    liveDemo: "https://optbest.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Forkify",
    githubLink: "https://github.com/Amit258012/Recip-app",
    liveDemo: "https://forkify-v2.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Omnifood",
    githubLink: "https://github.com/Amit258012/UI-Restaurants-website",
    liveDemo: "https://omnifood-rest-ui.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Workout Map",
    githubLink: "https://github.com/Amit258012/MAPTY",
    liveDemo: "https://map-wkout.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Bank app",
    githubLink: "https://github.com/Amit258012/Bankist-app",
    liveDemo: "https://fend-bankist.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Country data",
    githubLink: "https://github.com/Amit258012/Country-Data",
    liveDemo: "https://country-neighbour-data.netlify.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "Dice game",
    githubLink: "https://github.com/Amit258012/Dice-game",
    liveDemo: "https://dice-pig-game2.netlify.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Guess my number",
    githubLink: "https://github.com/Amit258012/Guess-my-number",
    liveDemo: "https://gmngame2.netlify.app/",
  },
];

console.log(data);

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

  return (
    <section id="portfolio" ref={ref}>
      {console.log("portfolio", inView)}
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, githubLink, liveDemo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
        })}
      </div>
    </section>
  );
}

export default Portfolio;
