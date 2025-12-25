import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elias - Web Designer & Front-End Developer</title>
        <meta
          name="description"
          content="Elias is a self-taught front-end developer and web designer crafting responsive websites where technologies meet creativity."
        />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
