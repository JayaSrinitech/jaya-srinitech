
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-elevation-low py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          aria-label="Jaya Srini Tech Solutions Home"
        >
          <span className="font-bold text-2xl tracking-tight text-gradient">
            Jaya Srini
          </span>
          <span className="text-sm font-medium text-muted-foreground">Tech Solutions</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-jaya-600 relative',
                location.pathname === item.path 
                  ? 'text-jaya-700 after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-jaya-500' 
                  : 'text-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-jaya-600 hover:bg-jaya-700 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors shadow-elevation-low"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-foreground"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out z-40",
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center gap-8 pt-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-lg font-medium transition-colors hover:text-jaya-600',
                location.pathname === item.path 
                  ? 'text-jaya-700' 
                  : 'text-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-jaya-600 hover:bg-jaya-700 text-white rounded-full px-8 py-3 text-lg font-medium transition-colors mt-4"
          >
            Book a Demo
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
