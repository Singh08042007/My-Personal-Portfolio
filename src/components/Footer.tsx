import { Github, Linkedin, Globe, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/deepinder-singh-april2007",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:singhdeepinder416@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 bg-gradient-to-t from-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-gold flex items-center justify-center">
                <span className="text-white font-bold">DS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Deepinder Singh</h3>
                <p className="text-muted-foreground text-sm">AI & Data Science Enthusiast</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Building the future through AI, web development, and innovative solutions. 
              Always excited to collaborate on meaningful projects that make a difference.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:text-primary-glow" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:singhdeepinder416@gmail.com"
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  singhdeepinder416@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Punjab, India</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-success font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Deepinder Singh. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of ☕</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-sm text-muted-foreground">
              Powered by React & Tailwind CSS
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="glass-card border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Hidden Easter Egg */}
        <div className="text-center mt-8 opacity-50">
          <p className="text-xs text-muted-foreground font-mono">
            // TODO: Build the future, one line of code at a time 🚀
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;