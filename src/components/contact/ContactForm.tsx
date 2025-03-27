
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for reaching out. Our team will contact you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
      
      setLoading(false);
    }, 1500);
  };
  
  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM"
  ];

  return (
    <div className="bg-white rounded-xl shadow-elevation-medium border border-border/30 overflow-hidden animate-fade-in">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-semibold mb-6">Book a Demonstration</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-input focus:border-jaya-500 focus:ring-2 focus:ring-jaya-500/20 focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-input focus:border-jaya-500 focus:ring-2 focus:ring-jaya-500/20 focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-input focus:border-jaya-500 focus:ring-2 focus:ring-jaya-500/20 focus:outline-none transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="organization" className="block text-sm font-medium mb-2">
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-input focus:border-jaya-500 focus:ring-2 focus:ring-jaya-500/20 focus:outline-none transition-colors"
                placeholder="School/Institution name"
              />
            </div>
            
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2.5 rounded-lg border border-input focus:border-jaya-500 focus:ring-2 focus:ring-jaya-500/20 focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input focus:border-jaya-500 focus:ring-2 focus:ring-jaya-500/20 focus:outline-none transition-colors"
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-input focus:border-jaya-500 focus:ring-2 focus:ring-jaya-500/20 focus:outline-none transition-colors"
              placeholder="Tell us about your requirements or questions"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-jaya-600 hover:bg-jaya-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Book Demonstration"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
