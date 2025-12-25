import { Button } from "@/components/ui/button";

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techs: string[];
  links: ProjectLink[];
}

const ProjectCard = ({
  image,
  title,
  description,
  techs,
  links,
}: ProjectCardProps) => {
  return (
    <div className="border border-border group">
      {/* Image */}
      <div className="h-48 overflow-hidden border-b border-border bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Tech Stack */}
      <div className="px-4 py-2 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Button key={link.label} variant="outline" size="sm" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label} =&gt;
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
