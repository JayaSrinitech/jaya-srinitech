
import React from 'react';
import { Lightbulb, Users, Award, Heart, Rocket, Shield } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in educational technology, creating solutions that are ahead of the curve."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We place our customers at the center of everything we do, ensuring our products meet their real needs and exceed expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to the highest standards of quality in our products, services, and customer support, with no compromises."
    },
    {
      icon: Heart,
      title: "Passion for Education",
      description: "We believe in the transformative power of education and are passionate about enhancing learning experiences worldwide."
    },
    {
      icon: Rocket,
      title: "Forward Thinking",
      description: "We anticipate future trends and needs in education, developing solutions that prepare institutions for tomorrow's challenges."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "We build products and relationships that stand the test of time, creating trust through consistency and dependability."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-jaya-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-jaya-50/40 rounded-full blur-3xl -z-10" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-jaya-100 rounded-full px-4 py-1 text-sm font-medium text-jaya-800 mb-4">
            Our Principles
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Core Values That Define Us
          </h2>
          
          <p className="text-muted-foreground">
            These fundamental principles guide our decisions, shape our culture, and define how we interact with our customers, partners, and each other.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-elevation-low border border-border/50 transition-all hover:shadow-elevation-medium hover:-translate-y-1 duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-jaya-100 flex items-center justify-center mb-5">
                <value.icon className="h-6 w-6 text-jaya-700" />
              </div>
              
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-jaya-700 to-jaya-900 rounded-2xl overflow-hidden shadow-elevation-high">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Join Us in Revolutionizing Educational Technology
            </h3>
            
            <p className="text-jaya-100 max-w-3xl mx-auto mb-8">
              We're always looking for partners who share our vision and values. Whether you're an educational institution, a distributor, or a technology enthusiast, we'd love to connect with you.
            </p>
            
            <a 
              href="/contact" 
              className="inline-block bg-white text-jaya-800 hover:bg-jaya-50 rounded-full px-8 py-3 font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
