import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 6304352595"],
      action: {
        text: "Call us",
        href: "tel:+916304352595"
      }
    },
    {
      icon: Mail,
      title: "Email",
      details: ["JayaSrinitech@gmail.com", "support@jayasrini.tech"],
      action: {
        text: "Send email",
        href: "mailto:JayaSrinitech@gmail.com"
      }
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Tech Park, Electronic City", "Phase 1, Bangalore 560100"],
      action: {
        text: "Get directions",
        href: "https://maps.google.com"
      }
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
      action: {
        text: null,
        href: null
      }
    }
  ];

  return (
    <div className="animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {contactDetails.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl border border-border shadow-elevation-low"
          >
            <div className="w-10 h-10 rounded-full bg-jaya-100 flex items-center justify-center mb-4">
              <item.icon className="h-5 w-5 text-jaya-700" />
            </div>
            
            <h4 className="font-medium mb-2">{item.title}</h4>
            
            {item.details.map((detail, i) => (
              <p key={i} className="text-muted-foreground">
                {detail}
              </p>
            ))}
            
            {item.action.text && (
              <a 
                href={item.action.href || "#"} 
                className="inline-block mt-3 text-sm font-medium text-jaya-600 hover:text-jaya-700 transition-colors"
              >
                {item.action.text} →
              </a>
            )}
          </div>
        ))}
      </div>
      
      <div className="rounded-xl overflow-hidden h-[300px] shadow-elevation-medium">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2051796257968!2d77.65632107454765!3d12.90246561647937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1341b7ab84c3%3A0xa6d42eecf2b132b2!2sElectronic%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1688544121725!5m2!1sen!2sin" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jaya Srini Tech Solutions location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
