import { GraduationCap, Plane, Sparkles, MessageSquare, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const WhyChooseSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Trainers from Leading Airlines',
      description: 'Learn from professionals with real-world cabin crew experience',
    },
    {
      icon: Plane,
      title: 'Realistic Mock Cabin Training',
      description: 'Practice in authentic aircraft cabin environments',
    },
    {
      icon: Sparkles,
      title: 'Personality Development & Grooming',
      description: 'Transform your appearance and confidence professionally',
    },
    {
      icon: MessageSquare,
      title: 'Interview Preparation & Soft Skills',
      description: 'Master communication and ace airline interviews',
    },
    {
      icon: Globe,
      title: 'Global Aviation Insights',
      description: 'Understand international aviation industry standards',
    },
  ];

  return (
    <section id="why-choose" className="py-20 gradient-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Our Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience world-class training that prepares you for a successful aviation career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-large transition-smooth group bg-card border-2 border-border hover:border-accent animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center group-hover:bg-accent transition-smooth">
                  <feature.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-smooth" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
