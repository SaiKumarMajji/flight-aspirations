import { Plane, Ticket, MapPin, Hotel, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Plane,
      title: 'Cabin Crew Training',
      description: 'Aviation hospitality, grooming, and service protocols',
    },
    {
      icon: Ticket,
      title: 'Airline Ticketing & Reservation',
      description: 'Booking systems and passenger service operations',
    },
    {
      icon: MapPin,
      title: 'Ground Operations',
      description: 'Airport operations and customer service excellence',
    },
    {
      icon: Hotel,
      title: 'Hospitality Management',
      description: 'Comprehensive hospitality sector training',
    },
    {
      icon: Globe,
      title: 'Travel & Tourism Management',
      description: 'Tourism industry operations and management',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized programs designed to make you industry-ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
