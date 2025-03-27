
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import BlurImage from '../ui/BlurImage';

const FounderProfiles = () => {
  const founders = [
    {
      name: "Rajiv Sharma",
      role: "CEO & Technology Visionary",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      background: "With over 15 years in educational technology, Rajiv leads our product development with his vision of transforming traditional classrooms into interactive learning environments.",
      expertise: ["Product Strategy", "Educational Technology", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:rajiv@jayasrini.tech"
      }
    },
    {
      name: "Priya Mehta",
      role: "COO & Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      background: "Priya brings her extensive experience in marketing and business strategy to drive our partnerships and ensure our solutions reach educational institutions nationwide.",
      expertise: ["Marketing Strategy", "Business Partnerships", "Customer Relations"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:priya@jayasrini.tech"
      }
    },
    {
      name: "Dr. Arun Kumar",
      role: "Chief Education Officer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      background: "With a Ph.D. in Educational Psychology, Dr. Kumar ensures our products align with pedagogical best practices and truly enhance the teaching and learning experience.",
      expertise: ["Educational Research", "Curriculum Development", "Teacher Training"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:arun@jayasrini.tech"
      }
    }
  ];

  return (
    <section className="py-20 bg-subtle-grid bg-[length:30px_30px] relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
      
      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-jaya-100 rounded-full px-4 py-1 text-sm font-medium text-jaya-800 mb-4">
            Leadership
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet the Visionaries Behind Our Success
          </h2>
          
          <p className="text-muted-foreground">
            Our leadership team combines expertise in technology, business, and education to create solutions that truly transform learning environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-elevation-medium border border-border/30 transition-all hover:shadow-elevation-high group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <BlurImage
                  src={founder.image}
                  alt={founder.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{founder.name}</h3>
                    <p className="text-white/80 text-sm">{founder.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {founder.background}
                </p>
                
                <h4 className="text-sm font-medium mb-2">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {founder.expertise.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-jaya-50 text-jaya-700 rounded-full px-3 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a 
                    href={founder.social.linkedin} 
                    className="text-muted-foreground hover:text-jaya-600 transition-colors"
                    aria-label={`${founder.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={founder.social.twitter} 
                    className="text-muted-foreground hover:text-jaya-600 transition-colors"
                    aria-label={`${founder.name}'s Twitter profile`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={founder.social.email} 
                    className="text-muted-foreground hover:text-jaya-600 transition-colors"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderProfiles;
