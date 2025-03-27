
import React from 'react';

const CompanyOverview = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-jaya-100/40 rounded-bl-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/4 bg-jaya-50/30 rounded-tr-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block bg-jaya-100 rounded-full px-4 py-1 text-sm font-medium text-jaya-800 mb-6">
            Our Story
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Education Through <span className="text-gradient">Innovation</span>
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Jaya Srini Tech Solutions, we're dedicated to revolutionizing educational environments with cutting-edge interactive technology that enhances learning experiences for students and educators alike.
          </p>
          
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-jaya-600 to-jaya-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Our Mission
            </h2>
            
            <p className="text-muted-foreground mb-6">
              We strive to bridge the gap between traditional teaching methods and modern technology, creating intuitive and powerful tools that empower educators and engage students in meaningful ways.
            </p>
            
            <p className="text-muted-foreground">
              Our mission is to make advanced interactive technology accessible to educational institutions of all sizes, fostering environments where learning becomes more dynamic, collaborative, and effective.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-elevation-low">
                <div className="text-3xl font-bold text-jaya-600 mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-elevation-low">
                <div className="text-3xl font-bold text-jaya-600 mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Schools Equipped</div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-elevation-low">
                <div className="text-3xl font-bold text-jaya-600 mb-1">20+</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-elevation-low">
                <div className="text-3xl font-bold text-jaya-600 mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-slide-in-right">
            <div className="relative">
              <div className="bg-white p-3 rounded-2xl shadow-elevation-medium rotate-3 z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Educational technology in action" 
                  className="rounded-xl aspect-[4/3] object-cover"
                />
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-jaya-200 to-jaya-400/50 rounded-2xl -rotate-3 translate-y-[5%] translate-x-[-3%] -z-10 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
