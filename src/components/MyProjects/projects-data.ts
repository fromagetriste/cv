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
    src: "/icons/projects/movies.svg",
    srcGreen: "/icons/projects/movies-green.svg",
    framework: "Movies",
    title: "Movies App from API",
    description:
      "A React project consisting in fetching data from a movies API, sorting and filtering data, and rendering in Card components. Possibility to add Movies to Favorites with Local Storage",
    tech: ["TypeScript", "Local Storage", "React Router", "Axios"],
    website: "https://damien-movies.netlify.app/",
    github: "https://github.com/fromagetriste/movies-API",
    screenshot: "/photos/myprojects/movies-app.png",
  },
  {
    id: 2,
    src: "/icons/projects/cv.svg",
    srcGreen: "/icons/projects/cv-green.svg",
    framework: "Portfolio",
    title: "My Portfolio in Typescript",
    description:
      "I wanted to show my Portfolio as a project since I have used many technologies to build it. I took inspiration from the Tailwind website for Hero Section and from Next UI for theme but coded all by myself with SASS",
    tech: ["TypeScript", "Framer-Motion", "useEffect", "SASS"],
    website: "",
    github: "https://github.com/fromagetriste/portfolio-TypeScript",
    screenshot: "/photos/myprojects/portfolio-app.png",
  },
  {
    id: 3,
    src: "/icons/projects/globe.svg",
    srcGreen: "/icons/projects/globe-green.svg",
    framework: "Countries",
    title: "Countries API",
    description:
      "A React project consisting of fetching data from a countries API, sorting and filtering data, and rendering it in Card components. It's my first project in React",
    tech: ["React Router", "useEffect", "Axios", "SASS"],
    website: "https://countries-damien.netlify.app/",
    github: "https://github.com/fromagetriste/countries-API",
    screenshot: "/photos/myprojects/countries-app.png",
  },
  {
    id: 4,
    src: "/icons/projects/ecommerce.svg",
    srcGreen: "/icons/projects/ecommerce-green.svg",
    framework: "Store",
    title: "E-Commerce in TypeScript",
    description:
      "A e-commerce project built in TypeScript, using an API to fetch products' data",
    tech: ["TypeScript", "Tailwind", "Context API", "React"],
    website: "https://e-com-typescript.netlify.app/",
    github: "https://github.com/fromagetriste/E-Com-React-Typescript",
    screenshot: "/photos/myprojects/ecom-app.png",
  },
];

export type { ProjectsDataType };
export { projectsData };
