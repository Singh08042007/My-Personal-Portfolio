import { Card } from '@/components/ui/card';
import { Brain, Code, Users, Trophy, Heart, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Analytical thinker who breaks down complex challenges"
    },
    {
      icon: Code,
      title: "Innovator", 
      description: "Building cutting-edge solutions with modern technologies"
    },
    {
      icon: Heart,
      title: "Chess Lover",
      description: "Strategic thinking through my passion for chess"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills"
    },
    {
      icon: BookOpen,
      title: "Tech Blogger",
      description: "Sharing knowledge and insights with the tech community"
    },
    {
      icon: Trophy,
      title: "Community Mentor",
      description: "Helping fellow students and developers grow"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 animate-slide-up">
            {/* Left - Description */}
            <div className="space-y-6">
              <div className="glass-card p-6 sm:p-8">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  I'm a <span className="text-primary font-semibold">motivated BTech student</span> from 
                  CGC University with a passion for <span className="text-gold font-semibold">AI, Machine Learning, and innovation</span>. 
                  My journey in technology started with curiosity and has evolved into a dedicated pursuit 
                  of excellence.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mt-4">
                  Skilled in <span className="text-primary font-semibold">full-stack development</span> and 
                  <span className="text-primary font-semibold"> game development</span>, I'm a self-taught, 
                  collaborative learner focused on solving real-world problems through technology. 
                  I believe in the power of <span className="text-gold font-semibold">continuous learning</span> and 
                  sharing knowledge with the community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="glass-card p-3 sm:p-4 text-center hover:scale-105 transition-transform">
                  <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="glass-card p-3 sm:p-4 text-center hover:scale-105 transition-transform">
                  <div className="text-xl sm:text-2xl font-bold text-gold">2029</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Graduation</div>
                </div>
                <div className="glass-card p-3 sm:p-4 text-center hover:scale-105 transition-transform">
                  <div className="text-xl sm:text-2xl font-bold text-primary">∞</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Learning</div>
                </div>
              </div>
            </div>

            {/* Right - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card key={index} className="glass-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="text-center space-y-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{highlight.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Education Section */}
          <div className="glass-card p-6 sm:p-8 animate-scale-in">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary to-gold flex items-center justify-center">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Education</h3>
                <p className="text-sm sm:text-base text-muted-foreground">My Academic Journey</p>
              </div>
            </div>
            
            <div className="border-l-2 border-primary/30 pl-4 sm:pl-6 space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">BTech in AI & Data Science</h4>
                </div>
                <p className="text-sm sm:text-base text-primary font-medium">Chandigarh Group of Colleges (CGC), Jhanjeri</p>
                <p className="text-sm text-muted-foreground">Expected Graduation: 2029</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  Focusing on artificial intelligence, machine learning, data analytics, and modern software development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;