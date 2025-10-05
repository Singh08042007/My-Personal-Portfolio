import { Card } from '@/components/ui/card';
import { Award, Trophy, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Certifications = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const achievements = [
    {
      title: "1st Position, CodeZen Innovate Challenge",
      icon: Trophy,
      color: "text-gold"
    },
    {
      title: "AWS Educate Introduction to Generative AI - Training Badge",
      icon: Award,
      color: "text-primary"
    },
    {
      title: "AWS Educate Emerging Talent Community - Badge",
      icon: Award,
      color: "text-primary"
    },
    {
      title: "Attended EV Design Workshop Certificate",
      icon: GraduationCap,
      color: "text-primary"
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 sm:mb-16 reveal ${isVisible ? 'active' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full" />
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className={`glass-card p-6 sm:p-8 hover:scale-105 transition-all duration-300 group reveal stagger-${index + 1} ${isVisible ? 'active' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${achievement.color === 'text-gold' ? 'bg-gold/10' : 'bg-primary/10'} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
