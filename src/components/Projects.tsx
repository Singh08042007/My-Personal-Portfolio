import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calculator, Gamepad2, BookOpen, Users, Briefcase, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Financial Calculator",
      description: "Advanced financial calculator with AI-driven insights for investment planning and financial analysis.",
      icon: Calculator,
      technologies: ["React", "AI/ML", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://cheemacalculator.vercel.app/",
      featured: true
    },
    {
      title: "Online Chess Game with AI",
      description: "Interactive chess platform featuring AI opponents with multiple difficulty levels and real-time gameplay.",
      icon: Gamepad2,
      technologies: ["JavaScript", "Chess.js", "AI Algorithms", "Web APIs"],
      liveUrl: "https://bestchessgame.vercel.app/",
      featured: true
    },
    {
      title: "Academic Notes Marketplace",
      description: "E-commerce platform for engineering students to buy and sell academic notes and study materials.",
      icon: BookOpen,
      technologies: ["React", "Node.js", "Payment Gateway", "Database"],
      liveUrl: "https://onlineengineeringnotes.netlify.app/",
      featured: false
    },
    {
      title: "College Life Management App",
      description: "Comprehensive platform for students to manage academics, events, and campus life efficiently.",
      icon: Users,
      technologies: ["React", "Database", "User Authentication", "Dashboard"],
      liveUrl: "https://collegemanagment.lovable.app/",
      featured: false
    },
    {
      title: "Freelancing Portfolio Dashboard",
      description: "Professional dashboard for freelancers to showcase work, manage clients, and track projects.",
      icon: Briefcase,
      technologies: ["React", "Dashboard UI", "Charts", "Project Management"],
      liveUrl: "https://freelancingdashboard.vercel.app/",
      featured: false
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in AI, web development, and innovative solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full mt-6" />
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="ultra-card p-0 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-gold flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                        <span className="text-sm text-gold font-medium">Featured</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      asChild
                      className="luxury-button w-full max-w-xs group-hover:scale-105 transition-transform"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Globe className="mr-2 h-5 w-5" />
                        View Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            More <span className="text-primary">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-primary">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      asChild
                      size="sm"
                      className="luxury-button w-full group-hover:scale-105 transition-transform"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Globe className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Interested in <span className="gradient-text">Collaboration?</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              I'm always excited to work on innovative projects and contribute to meaningful solutions.
            </p>
            <Button 
              className="luxury-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
