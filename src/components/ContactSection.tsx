import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Kukatpally, Telangana, India',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'airlineairhostess@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8121859590',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Take Off?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join India's most trusted air hostess training academy today.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-large transition-smooth border-2 border-border hover:border-primary group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-light rounded-full mb-4 group-hover:bg-accent-light transition-smooth">
                  <info.icon className="h-7 w-7 text-primary group-hover:text-accent transition-smooth" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.content}</p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center items-center animate-scale-in">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
