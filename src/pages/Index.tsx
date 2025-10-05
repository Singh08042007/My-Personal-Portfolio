import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Handbooks from '@/components/Handbooks';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Handbooks />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
