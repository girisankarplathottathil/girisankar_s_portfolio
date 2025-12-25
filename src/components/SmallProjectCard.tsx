import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

const SmallProjectCard = ({ title, description, techs, links }: Omit<Project, "image">) => {
  return (
    <div className="border border-border">
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

        {links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Button key={link.label} variant="outline" size="sm" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label} =&gt;
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallProjectCard;
