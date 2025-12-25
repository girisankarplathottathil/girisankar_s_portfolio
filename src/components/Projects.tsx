import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    image: "https://eliasdevis.github.io/images/projects/deplos.webp",
    title: "Deplos",
    description: "Game servers hosting",
    techs: ["Pug", "Stylus", "Node.js"],
    links: [
      { label: "Figma", url: "https://figma.com/community/file/1198393124994627983" },
      { label: "Live", url: "https://deplos.github.io/" },
      { label: "Github", url: "https://github.com/Deplos/deplos.github.io" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/pixel-battle.webp",
    title: "Pixel Battle",
    description: "Pixel art battle game",
    techs: ["Preact", "CSS", "PixiJS", "TypeScript"],
    links: [
      { label: "Live", url: "https://pixelbattle.fun/" },
      { label: "Github", url: "https://github.com/pixelate-it/pixelbattle-frontend" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/feedrum.webp",
    title: "Feedrum",
    description: "Ukrainian social network designed for programmers",
    techs: ["Node.js", "Next", "React", "Zod"],
    links: [
      { label: "Github", url: "https://github.com/Feedrum-Project/feedrum-next" },
      { label: "Figma", url: "https://figma.com/community/file/1314605686829534158" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title flex-shrink-0">projects</h2>
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <a href="#projects">View all =&gt;</a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
