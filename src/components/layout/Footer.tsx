
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/30 pt-16 pb-8 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-2xl tracking-tight text-gradient">Jaya Srini</span>
              <span className="block text-sm font-medium text-muted-foreground">Tech Solutions</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming educational spaces with cutting-edge interactive technology solutions designed for modern learning environments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-elevation-low transition-transform hover:translate-y-[-2px]">
                <Facebook size={18} className="text-jaya-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-elevation-low transition-transform hover:translate-y-[-2px]">
                <Twitter size={18} className="text-jaya-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-elevation-low transition-transform hover:translate-y-[-2px]">
                <Linkedin size={18} className="text-jaya-600" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-elevation-low transition-transform hover:translate-y-[-2px]">
                <Instagram size={18} className="text-jaya-600" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-md">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} /> About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-md">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} /> Interactive Panels
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} /> Digital Whiteboards
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-1">
                  <ArrowRight size={14} /> Education Software
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4 text-md">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+916304352595" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-2">
                  <Phone size={16} className="text-jaya-600" /> +91 6304352595
                </a>
              </li>
              <li>
                <a href="mailto:JayaSrinitech@gmail.com" className="text-sm text-muted-foreground hover:text-jaya-600 transition-colors flex items-center gap-2">
                  <Mail size={16} className="text-jaya-600" /> JayaSrinitech@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="text-jaya-600 flex-shrink-0 mt-1" />
                <span className="text-sm text-muted-foreground">
                  123 Tech Park, Electronic City Phase 1, Bangalore, Karnataka 560100
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © {currentYear} Jaya Srini Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 order-1 md:order-2">
            <Link to="#" className="text-xs text-muted-foreground hover:text-jaya-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-jaya-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
