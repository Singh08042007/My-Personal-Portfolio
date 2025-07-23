import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail, Github, Linkedin, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    "AI & Data Science Enthusiast",
    "Web & Game Developer", 
    "Tech Blogger & Innovator",
    "Future Tech Leader"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Deepinder</span>
                <br />
                <span className="text-foreground">Singh</span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium transition-all duration-500">
                  {titles[currentTitle]}
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                BTech AI & Data Science student at CGC University, passionate about building 
                innovative solutions that shape the future of technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="luxury-button text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" className="gold-button text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/deepinder-singh-april2007" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-primary group-hover:text-primary-glow" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:scale-110 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-primary group-hover:text-primary-glow" />
              </a>
              <a 
                href="https://www.cheematalks.site/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:scale-110 transition-all duration-300 group"
              >
                <Globe className="h-6 w-6 text-primary group-hover:text-primary-glow" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-gold rounded-3xl blur-2xl opacity-20 scale-105" />
              <div className="relative glass-card p-2 floating">
                <img 
                  src={heroImage} 
                  alt="Deepinder Singh" 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 glass-card p-3 floating delay-500">
                <div className="w-6 h-6 bg-primary rounded-full animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 floating delay-1000">
                <div className="w-6 h-6 bg-gold rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 group"
          >
            <ChevronDown className="h-6 w-6 text-primary animate-bounce group-hover:text-primary-glow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;