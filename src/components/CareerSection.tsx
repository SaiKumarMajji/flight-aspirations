import { CheckCircle, Briefcase, TrendingUp } from 'lucide-react';

const CareerSection = () => {
  const airlines = [
    { name: 'IndiGo', color: 'text-blue-600' },
    { name: 'Air India', color: 'text-red-600' },
    { name: 'Emirates', color: 'text-red-500' },
    { name: 'Qatar Airways', color: 'text-purple-600' },
    { name: 'Vistara', color: 'text-purple-700' },
    { name: 'SpiceJet', color: 'text-red-700' },
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Resume Building & Portfolio Creation' },
    { icon: Briefcase, text: 'Mock Interview Sessions with Experts' },
    { icon: TrendingUp, text: 'Direct Airline Interview Coordination' },
  ];

  return (
    <section id="career" className="py-20 gradient-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Placement & <span className="text-primary">Career Support</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our students have successfully joined domestic and international airlines. We guide you from training to interviews and ensure you're industry-ready.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-medium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="h-5 w-5 text-accent" />
                <span className="text-foreground font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Our Alumni Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 flex items-center justify-center shadow-soft hover:shadow-medium transition-smooth group animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className={`text-lg font-bold ${airline.color} group-hover:scale-110 transition-smooth`}>
                  {airline.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
