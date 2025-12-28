import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title flex-shrink-0">projects</h2>
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link to="/projects">View all~~~=&gt;</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
