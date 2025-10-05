import { Card } from '@/components/ui/card';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Lead & Coordinator",
      organization: "Codezen Club",
      period: "August 2025 – Present",
      current: true,
      achievements: [
        "Spearheaded the development and launch of the club's official website, continuously architecting key pages to enhance the digital platform and user experience.",
        "Drove the club's technical roadmap and educational initiatives by organizing and facilitating technical workshops, actively fostering skill development among 100+ members.",
        "Technical leadership validated by securing 1st Position in the CodeZen Innovate Challenge."
      ]
    },
    {
      title: "Web Developer & Coordinator",
      organization: "Wiztron Club",
      period: "April 2025 – July 2025",
      current: false,
      achievements: [
        "Architected and launched the official website, spearheading the club's digital transformation which significantly enhanced online presence and member engagement.",
        "Managed critical club data to ensure operational efficiency and streamlined communication processes.",
        "Demonstrated leadership and technical acumen by successfully leading multiple teams through competitive hackathons and technical projects."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Experience & <span className="gradient-text">Leadership</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full" />
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card p-6 sm:p-8 animate-slide-up hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-lg sm:text-xl text-primary font-semibold">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="ml-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-3 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Award className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
