import { Award, Users, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: 'DGCA-Aligned Curriculum',
      description: 'Training programs aligned with aviation standards',
    },
    {
      icon: Users,
      title: '7+ Years of Experience',
      description: 'Expert instructors from leading airlines',
    },
    {
      icon: TrendingUp,
      title: '100% Placement Support',
      description: 'Career guidance until you get placed',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">Aviation Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We train aspiring flight attendants to meet international cabin crew standards. With expert instructors, modern training modules, and personalized guidance, we prepare you to soar in your aviation career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-large transition-smooth border-2 border-border hover:border-primary group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mb-6 group-hover:bg-accent-light transition-smooth">
                <item.icon className="h-8 w-8 text-primary group-hover:text-accent transition-smooth" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
