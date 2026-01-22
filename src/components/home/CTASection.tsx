import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-industrial text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
          Ready to Protect Your Fleet?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Get in touch with our experts to discuss your fire protection requirements. 
          We provide customized solutions for all types of heavy machinery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="industrial" size="xl" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            asChild
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="tel:+919876543210">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
