import { Button } from "@/components/ui/button";
import DotsPattern from "./DotsPattern";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <h2 className="section-title">about-me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Hello, I'm Elias!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm a self-taught front-end developer based in Ukraine. I can
              develop responsive websites from scratch and raise them into modern
              user-friendly web experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Transforming my creativity and knowledge into websites has been my
              passion for over 2 years. I have been helping various clients to
              establish their presence online.
            </p>
            <Button variant="primary" asChild>
              <a href="#about">Read more =&gt;</a>
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-80 border border-primary bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                <span className="text-7xl">🧑‍💻</span>
              </div>
              <DotsPattern className="absolute -bottom-8 -right-8 opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <DotsPattern className="absolute top-40 -left-8 opacity-20" />
    </section>
  );
};

export default About;
