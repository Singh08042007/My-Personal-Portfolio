import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail, Github, Linkedin, Globe, Youtube, Instagram, Twitter } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Deepinder</span>
                <br />
                <span className="text-foreground">Singh</span>
              </h1>
              
              <div className="h-10 sm:h-12 lg:h-16 flex items-center justify-center lg:justify-start">
                <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium transition-all duration-500 px-2">
                  {titles[currentTitle]}
                </p>
              </div>
              
              <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
                BTech AI & Data Science student at CGC University, passionate about building 
                innovative solutions that shape the future of technology.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start px-2 lg:px-0">
              <Button 
                className="luxury-button text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 min-h-[44px]"
                onClick={() => window.open('https://deepindersinghresume.netlify.app/', '_blank')}
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">Download Resume</span>
              </Button>
              <Button 
                variant="outline" 
                className="gold-button text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 min-h-[44px]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">Contact Me</span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start px-2 lg:px-0">
              <a 
                href="https://linkedin.com/in/deepinder-singh-april2007" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 glass-card hover:scale-110 transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-primary-glow" />
              </a>
              <a 
                href="https://github.com/Singh08042007" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 glass-card hover:scale-110 transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-primary-glow" />
              </a>
              <a 
                href="https://www.youtube.com/@DeepinderSingh-e5t" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 glass-card hover:scale-110 transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-primary-glow" />
              </a>
              <a 
                href="https://www.instagram.com/deep__cheema__2007/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 glass-card hover:scale-110 transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-primary-glow" />
              </a>
              <a 
                href="https://x.com/Singh3364" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 glass-card hover:scale-110 transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary group-hover:text-primary-glow" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-gold rounded-3xl blur-2xl opacity-20 scale-105" />
              <div className="relative glass-card p-1 sm:p-2 floating">
                <img 
                  src="/lovable-uploads/c19c2994-4990-4725-b18a-26a414d521d0.png" 
                  alt="Deepinder Singh" 
                  className="w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-card p-2 sm:p-3 floating delay-500">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-card p-2 sm:p-3 floating delay-1000">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gold rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-3 sm:p-4 rounded-full border border-primary/30 hover:border-primary transition-all duration-300 group glass-card backdrop-blur-md"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-bounce group-hover:text-primary-glow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;