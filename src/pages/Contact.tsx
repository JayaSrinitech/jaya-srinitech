
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-jaya-50/50 to-transparent -z-10" />
          <div className="absolute top-[5%] right-[5%] w-96 h-96 bg-jaya-100/40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-jaya-50/30 rounded-full blur-3xl -z-10" />
          
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <span className="inline-block bg-jaya-100 rounded-full px-4 py-1 text-sm font-medium text-jaya-800 mb-4">
                Get in Touch
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We'd Love to Hear From You
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Have questions about our products or want to schedule a demonstration? Reach out to us and our team will get back to you promptly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
