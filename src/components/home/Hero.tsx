
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BlurImage from '../ui/BlurImage';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-radial from-jaya-50/50 to-transparent -z-10" />
      <div className="absolute top-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full bg-jaya-100/30 blur-3xl -z-10" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="inline-block bg-jaya-100 rounded-full px-4 py-1 text-sm font-medium text-jaya-800 mb-6 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              Transforming Educational Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
              Elevate Learning with <span className="text-gradient">Interactive</span> Technology
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md animate-slide-in-bottom" style={{ animationDelay: '0.6s' }}>
              Jaya Srini Tech Solutions delivers cutting-edge interactive panels that transform classrooms into dynamic learning environments.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-in-bottom" style={{ animationDelay: '0.8s' }}>
              <Link 
                to="/contact" 
                className="bg-jaya-600 hover:bg-jaya-700 text-white rounded-full px-6 py-3 text-sm font-medium transition-all hover:shadow-elevation-medium flex items-center gap-2 group"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white text-foreground border border-border rounded-full px-6 py-3 text-sm font-medium transition-all hover:shadow-elevation-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative bg-white p-2 rounded-2xl shadow-elevation-medium overflow-hidden animate-float">
              <BlurImage
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
                alt="TONZO Interactive Flat Panel"
                className="rounded-xl aspect-[4/3] object-cover"
              />
              
              {/* Badge overlay */}
              <div className="absolute top-5 right-5 bg-white rounded-full px-3 py-1 shadow-elevation-low text-xs font-medium text-jaya-700 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-jaya-500 rounded-full"></span>
                TONZO Elegant Pro
              </div>
            </div>
            
            {/* Floating features */}
            <div className="absolute top-[20%] -left-12 bg-white/90 backdrop-blur-md shadow-elevation-low rounded-lg px-4 py-2 animate-fade-in border border-border/50" style={{ animationDelay: '0.8s' }}>
              <p className="text-xs font-medium">Ultra HD Display</p>
              <p className="text-xs text-muted-foreground">3840 Pixels Resolution</p>
            </div>
            
            <div className="absolute bottom-[15%] -right-4 lg:-right-12 bg-white/90 backdrop-blur-md shadow-elevation-low rounded-lg px-4 py-2 animate-fade-in border border-border/50" style={{ animationDelay: '1s' }}>
              <p className="text-xs font-medium">Multi-Touch Capability</p>
              <p className="text-xs text-muted-foreground">Seamless Interaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
