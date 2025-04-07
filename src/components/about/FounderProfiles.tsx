
import React from 'react';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import BlurImage from '../ui/BlurImage';

const FounderProfiles = () => {
  const founders = [
    {
      name: "Prudhvi",
      role: "Chief Product Officer",
      image: "https://i.postimg.cc/kG5ZZKqV/Prudhvi.jpg",
      background: "Prudhvi is a visionary leader passionate about revolutionizing educational technology. He believes that interactive learning environments are the future of education and is dedicated to transforming traditional classrooms into engaging spaces that foster curiosity and creativity. With a keen eye for innovation, Prudhvi leads the development of cutting-edge products like the TONZO Interactive Flat Panel, ensuring they meet the evolving needs of educators and students alike.",
      expertise: ["EdTech Innovation", "Product Development", "Educational Technology Trends"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:prudhvi@jayasrini.tech"
      }
    },
    {
      name: "Venkatesh",
      role: "Chief Marketing Officer",
      image: "https://i.postimg.cc/MT5Ndd22/Venky.jpg",
      background: "Venkatesh is a seasoned marketing professional with a proven track record of driving business growth through strategic partnerships and effective marketing strategies. He leverages his expertise to expand Jaya Srini Tech Solutions' reach across educational institutions nationwide, ensuring that their innovative products benefit schools and colleges everywhere.",
      expertise: ["Marketing Strategy", "Partnership Development", "Business Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:venkatesh@jayasrini.tech"
      }
    },
    {
      name: "Noel",
      role: "Chief Education Officer",
      image: "https://i.postimg.cc/KjsVyj80/Noel.jpg",
      background: "Noel is an education expert dedicated to ensuring that Jaya Srini Tech Solutions' products align with the best pedagogical practices. He works closely with educators and researchers to understand the evolving needs of the education sector, ensuring that the company's interactive panels enhance both teaching and learning experiences.",
      expertise: ["Pedagogical Design", "Educational Research", "Teacher Support"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:noel@jayasrini.tech"
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
          
          <div className="mt-6 flex items-center justify-center gap-3">
            <Phone className="h-5 w-5 text-jaya-600" />
            <span className="text-lg font-medium">+91 6304352595</span>
          </div>
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
