import training1 from '@/assets/training-1.jpg';
import trainingClassroom from '@/assets/training-classroom.jpg';
import trainingPractice from '@/assets/training-practice.jpg';
import trainingGrooming from '@/assets/training-grooming.jpg';

const GallerySection = () => {
  const images = [
    { src: training1, alt: 'Cabin crew training session' },
    { src: trainingClassroom, alt: 'Diverse students in classroom session' },
    { src: trainingPractice, alt: 'Mixed group practicing cabin exercises' },
    { src: trainingGrooming, alt: 'Students learning grooming and presentation' },
  ];

  return (
    <section id="gallery" className="py-20 gradient-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Training <span className="text-primary">Glimpses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A look at our state-of-the-art training facilities and student experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-medium hover:shadow-large transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
