import SkillBlock from "./SkillBlock";
import DotsPattern from "./DotsPattern";

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "Lua", "Python", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["SQLite", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Vue", "Preact", "Express", "Discord.js"],
  },
  {
    title: "Other",
    skills: ["HTML", "CSS", "Stylus", "Pug", "Git", "Figma"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container">
        <h2 className="section-title">skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {skillGroups.map((group) => (
            <SkillBlock key={group.title} {...group} />
          ))}
        </div>
      </div>

      {/* Decorative Dots */}
      <DotsPattern className="absolute top-20 -right-8 opacity-30" />
      <DotsPattern className="absolute bottom-10 left-10 opacity-20" />
    </section>
  );
};

export default Skills;
