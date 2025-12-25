import { Button } from "@/components/ui/button";
import DotsPattern from "./DotsPattern";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Elias is a{" "}
              <span className="text-primary">web designer</span> and{" "}
              <span className="text-primary">front-end</span> developer
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-md">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Button variant="primary" size="lg" asChild>
              <a href="#contacts">Contact ME =&gt;</a>
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Logo Outline SVG */}
              <svg
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-24 text-primary animate-float"
                viewBox="0 0 300 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="10" y="10" width="80" height="80" rx="8" />
                <rect x="110" y="30" width="80" height="80" rx="8" />
                <rect x="210" y="10" width="80" height="80" rx="8" />
              </svg>

              {/* Main Hero Image Area */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 border border-primary flex items-end justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <div className="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
                <div className="text-8xl mb-8">👨‍💻</div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-0 right-0 mx-auto w-fit border border-border bg-background px-3 py-2 flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-sm" />
                <span className="text-muted-foreground text-sm">
                  Open for new opportunities
                </span>
              </div>

              {/* Dots Pattern */}
              <DotsPattern className="absolute -bottom-12 -left-12 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
