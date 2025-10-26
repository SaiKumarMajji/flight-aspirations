import { Instagram, Linkedin, Facebook, Plane } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="gradient-sky py-12 border-t-2 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary-light rounded-lg">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">Aviation Academy</span>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft hover:shadow-medium group"
              >
                <social.icon className="h-5 w-5 group-hover:scale-110 transition-smooth" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-center">
            © 2025 Airhostess Academy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
