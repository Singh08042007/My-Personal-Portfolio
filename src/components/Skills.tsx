import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Brain, 
  Code, 
  Database, 
  Globe, 
  Gamepad2, 
  MessageSquare,
  Palette,
  Cloud,
  GitBranch,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const skillCategories = [
    {
      title: "Core Expertise",
      icon: Brain,
      color: "from-primary to-primary-glow",
      skills: [
        "AI/ML Modeling",
        "Problem Solving", 
        "Data Analysis",
        "Algorithm Design",
        "Research & Development"
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-gold to-gold-muted",
      skills: [
        "JavaScript",
        "TypeScript", 
        "Python",
        "HTML/CSS",
        "SQL"
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-primary to-gold",
      skills: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "Responsive Design",
        "REST APIs"
      ]
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      color: "from-gold to-primary",
      skills: [
        "Chess.js",
        "Game Logic",
        "AI Opponents",
        "Interactive UI",
        "Real-time Systems"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Terminal,
      color: "from-primary-glow to-primary",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "Canva",
        "ChatGPT"
      ]
    },
    {
      title: "Deployment",
      icon: Cloud,
      color: "from-gold-muted to-gold",
      skills: [
        "Vercel",
        "Netlify",
        "Cloud Hosting",
        "Domain Management",
        "Performance Optimization"
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "Hindi", level: "Fluent", flag: "🇮🇳" },
    { name: "Punjabi", level: "Native", flag: "🇮🇳" }
  ];

  const softSkills = [
    "Team Collaboration",
    "Leadership",
    "Communication",
    "Mentoring",
    "Tech Blogging",
    "Community Building",
    "Project Management",
    "Strategic Thinking"
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and languages that drive innovation.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full mt-4 sm:mt-6" />
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className={`ultra-card group reveal stagger-${(index % 6) + 1} ${isVisible ? 'active' : ''}`}>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Languages & Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 animate-slide-up">
          {/* Languages */}
          <Card className="glass-card p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r from-primary to-gold flex items-center justify-center">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Languages</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl sm:text-2xl">{language.flag}</span>
                    <span className="font-medium text-foreground text-sm sm:text-base">{language.name}</span>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 text-xs sm:text-sm">
                    {language.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="glass-card p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-r from-gold to-primary flex items-center justify-center">
                <Palette className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Soft Skills</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-2 sm:p-3 rounded-lg border border-gold/20 bg-gold/5 hover:bg-gold/10 transition-colors text-center"
                >
                  <span className="text-xs sm:text-sm font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skill Highlights */}
        <div className="glass-card p-6 sm:p-8 text-center animate-fade-in">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            What Makes Me <span className="gradient-text">Different</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">AI-First Mindset</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Integrating artificial intelligence into every solution for smarter, more efficient outcomes.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center">
                <GitBranch className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />
              </div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">Full-Stack Vision</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Understanding both frontend user experience and backend architecture for complete solutions.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">Future-Ready</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Always learning emerging technologies to stay ahead in the rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;