
import React from 'react';
import BlurImage from '../ui/BlurImage';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

const ProductShowcase = () => {
  const features = [
    {
      title: "Interactive Touchscreen",
      description: "Multi-touch capability with up to 40 touch points for seamless interaction"
    },
    {
      title: "4K Ultra HD Display",
      description: "Maximum 3840 pixels resolution for crystal-clear visuals and presentations"
    },
    {
      title: "128GB Storage",
      description: "Ample storage capacity for all your educational content and applications"
    },
    {
      title: "Versatile Connectivity",
      description: "Multiple input/output ports supporting various devices and peripherals"
    },
    {
      title: "Built-in Learning Tools",
      description: "Comprehensive software for enhanced teaching and learning experiences"
    },
    {
      title: "Durable Construction",
      description: "Robust design specifically engineered for educational environments"
    }
  ];

  return (
    <section className="py-20 bg-subtle-grid bg-[length:30px_30px] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
      <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-jaya-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-jaya-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="container relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Introducing the <span className="text-gradient">TONZO</span> Interactive Flat Panel
          </h2>
          <p className="text-muted-foreground">
            Elegant Pro series combines cutting-edge technology with intuitive design to create the perfect tool for modern educational environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white rounded-2xl p-3 shadow-elevation-medium relative z-10 lg:rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
              <BlurImage
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="TONZO Interactive Panel in a classroom"
                className="rounded-xl aspect-video object-cover"
              />
            </div>
            
            {/* Specification labels */}
            <div className="absolute top-[-15px] left-[10%] bg-white rounded-full px-4 py-2 shadow-elevation-low text-sm font-medium z-20 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-jaya-500 rounded-full animate-pulse-gentle"></span>
              65 Inches
            </div>
            
            <div className="absolute bottom-[-15px] right-[10%] bg-white rounded-full px-4 py-2 shadow-elevation-low text-sm font-medium z-20 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-jaya-500 rounded-full animate-pulse-gentle"></span>
              128GB Storage
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-jaya-100 to-jaya-300/50 rounded-2xl -z-10 -rotate-[4deg] translate-y-[5%] translate-x-[3%] blur-sm" />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Features & Specifications</h3>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className={cn(
                    "flex gap-4 p-4 rounded-xl animate-slide-in-right",
                    index % 2 === 0 ? "bg-white shadow-elevation-low" : "bg-secondary"
                  )}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-jaya-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
