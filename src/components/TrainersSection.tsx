import { Card } from '@/components/ui/card';
import founderImage from '@/assets/founder-hamsa.jpg';

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet your <span className="text-primary">Mentor and Founder</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden hover:shadow-large transition-smooth border-2 border-border gradient-sky">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={founderImage}
                  alt="Captain Hamsa - Founder & Mentor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="space-y-6 text-foreground">
                  <p className="text-lg leading-relaxed">
                    The vision and leadership behind Airline Airhostess Academy come from a seasoned aviation professional who began her journey as a cabin crew with SpiceJet Airlines. Her time in the skies shaped her understanding of the dedication, elegance, and excellence that define the aviation and hospitality industry.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Driven by a passion to share that experience, she founded Airline Airhostess Academy to bridge the gap between dream and destination. Under her mentorship, students are guided to develop not only professional competence but also the confidence, personality, and poise essential to excel in the airline world.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Her goal is to inspire every student to rise above limits, embrace discipline, and step into the aviation industry as refined, world-ready professionals.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xl font-bold text-primary">— Captain Hamsa</p>
                    <p className="text-muted-foreground">Founder & Mentor, Airline Airhostess Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
