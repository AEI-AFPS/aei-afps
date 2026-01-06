import { Layout } from '@/components/layout/Layout';
import { ContactForm } from '@/components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-industrial px-4">
          <h1 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-industrial-concrete max-w-2xl">
            Get in touch with our team for inquiries, quotes, or technical support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you need a quote, technical assistance, or have questions about our products, 
                our team is here to help. Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground">
                      Uppal Industrial Area,<br />
                      Hyderabad, Telangana 500039<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      For sales and general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@aei-afps.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@aei-afps.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday – Saturday: 9:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-6 md:p-8 card-shadow">
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and our team will get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-muted">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Uppal Industrial Area, Hyderabad, Telangana
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
