interface ProjectsDataType {
  id: number;
  src: string;
  srcGreen: string;
  framework: string;
  title: string;
  description: string;
  tech: string[];
  website: string;
  github: string;
  screenshot: string;
}

const projectsData: ProjectsDataType[] = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}/icons/projects/movies.svg`,
    srcGreen: `${import.meta.env.BASE_URL}/icons/projects/movies-green.svg`,
    framework: "Movies",
    title: "Movies App in TypeScript",
    description:
      "A React project consisting in fetching data from a movies API, filtering and sorting data, and rendering in Card components. Possibility to add Movies to Favorites with Local Storage",
    tech: ["TypeScript", "Local Storage", "React Router", "Axios"],
    website: "https://damien-movies.netlify.app/",
    github: "https://github.com/fromagetriste/movies-API",
    screenshot: `${import.meta.env.BASE_URL}/photos/myprojects/movies-app.png`,
  },
  {
    id: 2,
    src: `${import.meta.env.BASE_URL}/icons/projects/cv.svg`,
    srcGreen: `${import.meta.env.BASE_URL}/icons/projects/cv-green.svg`,
    framework: "Portfolio",
    title: "My Portfolio in Typescript",
    description:
      "I wanted to show my Portfolio as a project since I have used many technologies to build it. I took inspiration from the Tailwind website for Hero Section and from Next UI for theme but coded all by myself with SASS",
    tech: ["TypeScript", "Framer-Motion", "useEffect", "SASS"],
    website: "",
    github: "https://github.com/fromagetriste/portfolio-TypeScript",
    screenshot: `${
      import.meta.env.BASE_URL
    }/photos/myprojects/portfolio-app.png`,
  },
  {
    id: 3,
    src: `${import.meta.env.BASE_URL}/icons/projects/globe.svg`,
    srcGreen: `${import.meta.env.BASE_URL}/icons/projects/globe-green.svg`,
    framework: "Countries",
    title: "Countries API",
    description:
      "A React project consisting of fetching data from a countries API, sorting and filtering data, and rendering it in Card components. It's my first project in React",
    tech: ["React Router", "useEffect", "Axios", "SASS"],
    website: "https://countries-damien.netlify.app/",
    github: "https://github.com/fromagetriste/countries-API",
    screenshot: `${
      import.meta.env.BASE_URL
    }/photos/myprojects/countries-app.png`,
  },
  {
    id: 4,
    src: `${import.meta.env.BASE_URL}/icons/projects/ecommerce.svg`,
    srcGreen: `${import.meta.env.BASE_URL}/icons/projects/ecommerce-green.svg`,
    framework: "Store",
    title: "E-Commerce in Next JS",
    description: "A e-commerce project built in Next JS and Stripe",
    tech: ["Next JS", "TypeScript", "Zustand", "Stripe"],
    website:
      "https://ecommerce-tutorial-ehyzf6rso-fromagetristes-projects.vercel.app/",
    github: "https://github.com/fromagetriste/ecommerce-tutorial",
    screenshot: `${import.meta.env.BASE_URL}/photos/myprojects/ecom-nextJS.png`,
  },
];

export type { ProjectsDataType };
export { projectsData };
