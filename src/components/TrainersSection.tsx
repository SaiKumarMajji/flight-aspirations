import { Card } from '@/components/ui/card';
import trainerImage from '@/assets/trainer-1.jpg';

const TrainersSection = () => {
  const trainers = [
    {
      name: 'Priya Sharma',
      designation: 'Senior Training Manager',
      experience: '12 years with Emirates & Air India',
      image: trainerImage,
    },
    {
      name: 'Anjali Verma',
      designation: 'Grooming & Etiquette Specialist',
      experience: '10 years with Qatar Airways',
      image: trainerImage,
    },
    {
      name: 'Kavita Reddy',
      designation: 'Safety & Service Trainer',
      experience: '8 years with IndiGo & Vistara',
      image: trainerImage,
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Learn from <span className="text-primary">the Best</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our instructors are former cabin crew and aviation professionals with real-world experience in leading airlines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-large transition-smooth group animate-slide-up border-2 border-border hover:border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <div className="p-6 text-center gradient-sky">
                <h3 className="text-xl font-bold text-foreground mb-2">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-2">{trainer.designation}</p>
                <p className="text-muted-foreground text-sm">{trainer.experience}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
