import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SmallProjectCard from "@/components/SmallProjectCard";
import { decentProjects, smallProjects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Elias</title>
        <meta
          name="description"
          content="All of my projects - Web design and front-end development work by Elias."
        />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="section-title text-4xl md:text-5xl">/projects</h1>
              <p className="text-muted-foreground mt-2">All of my projects</p>
            </div>

            {/* Decent Projects */}
            <section className="mb-16">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="text-primary">#</span>decent
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {decentProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>

            {/* Small Projects */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="text-primary">#</span>small
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {smallProjects.map((project) => (
                  <SmallProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
