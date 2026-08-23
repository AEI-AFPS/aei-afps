import { Layout } from '../components/layout/Layout';
import { ContactForm } from '../components/contact/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: (
      <>Uppal Industrial Area,<br />Hyderabad, Telangana 500039<br />India</>
    ),
  },
  {
    icon: Phone,
    title: 'Phone',
    content: (
      <a href="tel:+919876543210" className="hover:text-flame-orange transition-colors">
        +91 98765 43210
      </a>
    ),
    sub: 'For sales and general inquiries',
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a href="mailto:info@aei-afps.com" className="hover:text-flame-orange transition-colors">
        info@aei-afps.com
      </a>
    ),
    sub: "We'll respond within 24 hours",
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: (
      <>Monday – Saturday: 9:00 AM – 6:00 PM<br />Sunday: Closed</>
    ),
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative bg-navy-dark py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="h-0.5 w-full bg-gradient-flame absolute top-0" />
        <div className="container-full relative z-10">
          <p className="text-flame-orange text-sm font-semibold uppercase tracking-[0.2em] mb-3 animate-fade-down">Get In Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-5 animate-fade-up leading-tight">
            Contact <span className="text-gradient-flame">Us</span>
          </h1>
          <p className="text-lg text-white/55 max-w-2xl animate-fade-up delay-200">
            Get in touch with our team for inquiries, quotes, or technical support.
          </p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="section-padding">
        <div className="container-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

            {/* Contact Info */}
            <div className="animate-slide-right">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
                Reach Out to Our Team
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need a quote, technical assistance, or have questions about our products,
                our team is here to help.
              </p>

              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 bg-card border border-border/50 rounded-xl hover:border-flame-crimson/30 transition-colors">
                    <div className="w-11 h-11 bg-flame-crimson/10 border border-flame-crimson/20 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-flame-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                      <div className="text-muted-foreground text-sm">{item.content}</div>
                      {item.sub && <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 lg:p-10 shadow-card animate-slide-left relative overflow-hidden card-beam">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-flame" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-flame-crimson/10 border border-flame-crimson/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-flame-orange" />
                </div>
                <h2 className="font-heading text-xl md:text-2xl text-foreground">Send Us a Message</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form below and our team will get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="h-72 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="w-full h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-flame-crimson/15 border border-flame-crimson/25 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <MapPin className="h-8 w-8 text-flame-orange" />
            </div>
            <p className="text-white/70 font-medium">Uppal Industrial Area, Hyderabad, Telangana</p>
            <p className="text-white/40 text-sm mt-1">Telangana 500039, India</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
