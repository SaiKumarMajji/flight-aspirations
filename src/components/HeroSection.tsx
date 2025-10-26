import heroImage from '@/assets/hero-cabin.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury airplane cabin interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Dream Career <br />
            <span className="text-accent">Takes Flight</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Become a certified air hostess and start your global aviation journey with expert trainers and industry professionals.
          </p>
        </div>
      </div>

      {/* Floating Aviation Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {/* Airplane 1 */}
        <div className="absolute top-1/4 left-0 animate-[slide-in-right_20s_linear_infinite]">
          <div className="text-4xl opacity-30">✈️</div>
        </div>
        {/* Airplane 2 */}
        <div className="absolute top-2/3 right-0 animate-[slide-in-right_25s_linear_infinite_5s]">
          <div className="text-3xl opacity-25">✈️</div>
        </div>
        {/* Clouds */}
        <div className="absolute top-1/3 right-0 animate-[slide-in-right_30s_linear_infinite_2s]">
          <div className="text-5xl opacity-20">☁️</div>
        </div>
        <div className="absolute top-1/2 left-0 animate-[slide-in-right_35s_linear_infinite_8s]">
          <div className="text-6xl opacity-15">☁️</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
