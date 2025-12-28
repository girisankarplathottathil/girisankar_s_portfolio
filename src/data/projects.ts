export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  image?: string;
  title: string;
  description: string;
  techs: string[];
  links: ProjectLink[];
}

export const decentProjects: Project[] = [
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/saudi_tourism.png?raw=true",
    title: "Saudi Tourism Website",
    description: "Created as a project ",
    techs: ["Pug", "Stylus", "Node.js"],
    links: [
      { label: "Figma", url: "https://figma.com" },
      { label: "Live", url: "https://id-preview--ae482a06-df13-48f1-8507-8719f8eac1b2.lovable.app/?__lovable_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicWFpMUp1bFkxQmM1cjhDdkZ2VDNTeldjNU9GMiIsInByb2plY3RfaWQiOiJhZTQ4MmEwNi1kZjEzLTQ4ZjEtODUwNy04NzE5ZjhlYWMxYjIiLCJub25jZSI6IjBkNjk2YWE5MzQ5OTVmM2UxODkzYThkZmVkNjVkNmU1IiwiaXNzIjoibG92YWJsZS1hcGkiLCJzdWIiOiJhZTQ4MmEwNi1kZjEzLTQ4ZjEtODUwNy04NzE5ZjhlYWMxYjIiLCJhdWQiOlsibG92YWJsZS1hcHAiXSwiZXhwIjoxNzY3NDIwNTA4LCJuYmYiOjE3NjY4MTU3MDgsImlhdCI6MTc2NjgxNTcwOH0.etYGFg0CTrn1JM1BPDZlFEuHsYWuq8A3nI_yJuh6Zmc" },
      { label: "Github", url: "https://github.com" },
    ],
  },
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/architure.png?raw=true",
    title: "Architecture",
    description: "Design of a modern architecture firm webpage",
    techs: ["react", "CSS", "HTML", "TypeScript"],
    links: [
      { label: "Figma", url: "https://figma.com" },
      { label: "Github", url: "https://github.com/girisankarplathottathil/remix-of-stark-architect-showcase.git" },
    ],
  },
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/TravelEssentials.png?raw=true",
    title: "TravelEssentials",
    description: "Component of a Travel agency webapp",
    techs: ["Node.js", "Next", "React", "CSS"],
    links: [
      { label: "Github", url: "https://github.com/girisankarplathottathil/portfolio/blob/main/TravelEssentialsSection.tsx" },
      { label: "Figma", url: "https://figma.com" },
    ],
  },
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/WhatsApp%20Image%202025-12-24%20at%207.24.31%20PM.jpeg?raw=true",
    title: "SreTryp",
    description: "Mindblowing travel blog design",
    techs: ["Python", "Flask", "SCSS"],
    links: [
      { label: "Figma", url: "https://figma.com" },
    ],
  },
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/WhatsApp%20Image%202025-12-24%20at%207.24.33%20PM.jpeg?raw=true",
    title: "Territory",
    description: "Travel booking system design",
    techs: ["React", "Node.js", "Discord.js"],
    links: [
      { label: "Figma", url: "https://figma.com" },
    ],
  },
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/varshaelectronics.jpeg?raw=true",
    title: "Varsha Electronics",
    description: "Electronics Store Website",
    techs: ["javascript", "Node.js", "EJS"],
    links: [
      { label: "Live", url: "http://localhost:8080/404error" },
      { label: "Github", url: "https://github.com/varshaelectronics/varsha_electronics" },
    ],
  },
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/WhatsApp%20Image%202025-12-24%20at%207.24.35%20PM.jpeg?raw=true",
    title: "MadHost",
    description: "Hosting Services",
    techs: ["Pug", "Less", "Gulp", "Node.js"],
    links: [
      { label: "Figma", url: "https://figma.com" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/portfolio.webp",
    title: "This Portfolio",
    description: "My personal portfolio",
    techs: ["TypeScript", "SASS", "WebPack"],
    links: [
      { label: "Figma", url: "https://figma.com" },
      { label: "Github", url: "https://github.com/EliasDevis/EliasDevis.github.io" },
      { label: "Live", url: "https://eliasdevis.github.io/" },
    ],
  },
  {
    image: "https://github.com/girisankarplathottathil/portfolio/blob/main/ledtvservicetech.jpeg?raw=true",
    title: "LED TV Service Tech",
    description: "Multi-functional webpage for TV service centre(*first project ever)",
    techs: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "Live", url: "https://ledtvsrvicetech.in/" },
      { label: "Github", url: "https://github.com/girisankarplathottathil/LED-TV-SERVICE-TECH" },
    ],
  },
];

export const smallProjects: Project[] = [
  {
    title: "TopPicks",
    description: "The Ecommerce landing page",
    techs: ["TypeScript", "Discord.js", "Node.js"],
    links: [
      { label: "Github", url: "https://github.com/girisankarplathottathil/portfolio/blob/main/TopPicks.tsx" },
    ],
  },
  {
    title: "Chess PRO",
    description: "Landing page about service for viewing chess tournaments",
    techs: ["Figma"],
    links: [],
  },
];

// Featured projects for the homepage (first 3)
export const featuredProjects = decentProjects.slice(0, 3);
