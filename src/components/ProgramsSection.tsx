import { Plane, Users, Sparkles, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Plane,
      title: 'Cabin Crew Training',
      description: 'Comprehensive training covering safety procedures, service excellence, and emergency protocols.',
    },
    {
      icon: Users,
      title: 'Ground Staff Training',
      description: 'Master airport operations, passenger handling, and airline administrative procedures.',
    },
    {
      icon: Sparkles,
      title: 'Personality & Grooming',
      description: 'Professional image enhancement, etiquette training, and confidence building sessions.',
    },
    {
      icon: Headphones,
      title: 'Customer Service Excellence',
      description: 'Advanced communication skills and service delivery for premium passenger experiences.',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Training <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized courses designed to make you industry-ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-large transition-smooth border-2 border-border hover:border-primary group animate-slide-up bg-gradient-to-br from-card to-primary-light/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-light transition-smooth shadow-medium">
                  <program.icon className="h-10 w-10 text-primary group-hover:text-accent transition-smooth" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
