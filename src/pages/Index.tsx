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
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
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
      <ScrollToTop />
    </div>
  );
};

export default Index;
