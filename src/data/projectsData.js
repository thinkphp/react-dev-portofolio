import urlShortener from "../assets/images/portfolio/pro1.png";
import Edgy from "../assets/images/portfolio/pro2.png";
import RestCountries from "../assets/images/portfolio/pro3.png";
import Bankist from "../assets/images/portfolio/pro4.png";

const projectsData = [
  {
    id: "project1",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "#",
    source: "https://github.com/thinkphp",
    description:
      "Description for project.",
  },
  {
    id: "Project2",
    img: urlShortener,
    name: "URL Shortener",
    stack: ["< HTML5 />", "< CSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "#",
    source: "#",
    description:
      "Description for project2",
  },
  {
    id: "Project3",
    img: Bankist,
    name: "pro3",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "#",
    source: "#",
    description:
      "Description for project3",
  },
  {
    id: "project4",
    img: Edgy,
    name: "Edgy",
    stack: ["< Tailwind />", "< React.js />", "< Express.js />", "< Airtable API />", "< Google ReCaptcha />"],
    src: "#",
    source: "#",
    description:
      "Description for project 4.",
  },
];

export { projectsData };
