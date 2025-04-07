
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Warranty Protection",
      description: "3-year comprehensive warranty with option to extend"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance for all our customers"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "Products meet international standards for education technology"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-jaya-50/30 to-background -z-10" />
      
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Environment?
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a personalized demonstration to see how TONZO Interactive Panels can enhance teaching and learning at your institution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-elevation-low border border-border/50 transition-transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-jaya-100 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-jaya-700" />
              </div>
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-jaya-800 to-jaya-600 rounded-2xl overflow-hidden shadow-elevation-medium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Book Your Exclusive Demo Session
              </h3>
              <p className="text-jaya-100 mb-8">
                Experience the power of interactive learning firsthand with a personalized demonstration tailored to your specific requirements.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-jaya-800 hover:bg-jaya-50 rounded-full px-6 py-3 text-sm font-medium transition-colors group"
              >
                Schedule Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="lg:p-8 flex items-end justify-center">
              <img 
                src="https://m.media-amazon.com/images/I/51TnnvAhkZL._SX679_.jpg" 
                alt="Interactive learning session" 
                className="w-full h-full object-cover lg:object-contain lg:h-auto lg:max-h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
