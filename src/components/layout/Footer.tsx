import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from "/logo.png"

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Applications', path: '/applications' },
  { name: 'Contact Us', path: '/contact' },
];

const productLinks = [
  { name: 'Fire Protection Systems', path: '/products?category=fire-protection' },
  { name: 'Safety & Monitoring', path: '/products?category=safety-monitoring' },
  { name: 'Proximity Detection', path: '/products?category=proximity-detection' },
  { name: 'Industrial Lighting', path: '/products?category=industrial-lighting' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-industrial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-lg">AEI</span>
              </div> */}
              <img src={logo} alt="" className='w-12'/>
              <div>
                <p className="font-heading font-semibold text-secondary-foreground leading-tight">Associated Engg. Industries</p>
                <p className="text-xs text-industrial-concrete uppercase tracking-wider">AFPS Division</p>
              </div>
            </div>
            <p className="text-industrial-concrete text-sm leading-relaxed">
              India's trusted manufacturer of DGMS-approved Automatic Fire Protection Systems for heavy earth-moving machinery.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">ISO 9001</span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">ISO 14001</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-industrial-concrete text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary-foreground">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-industrial-concrete text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-industrial-concrete text-sm">
                  Uppal Industrial Area,<br />
                  Hyderabad, Telangana 500039
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-industrial-concrete text-sm hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@aei-afps.com" className="flex items-center gap-3 text-industrial-concrete text-sm hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                  info@aei-afps.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-industrial-dark">
        <div className="container-industrial py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-industrial-concrete text-sm text-center md:text-left">
            © {new Date().getFullYear()} Associated Engg. Industries. All rights reserved.
          </p>
          <p className="text-industrial-concrete text-sm">
            DGMS Approved Fire Protection Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
