interface SkillBlockProps {
  title: string;
  skills: string[];
}

const SkillBlock = ({ title, skills }: SkillBlockProps) => {
  return (
    <div className="border border-border p-4">
      <h3 className="text-foreground font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {skills.join(" ")}
      </p>
    </div>
  );
};

export default SkillBlock;
