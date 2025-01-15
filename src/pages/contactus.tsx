import React, { useState, FC } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Instagram,
  Twitter,
  LucideIcon
} from 'lucide-react';

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string[];
}

interface SocialLink {
  icon: LucideIcon;
  url: string;
  name: string;
}

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Fitness Street", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@powerfit.gym", "support@powerfit.gym"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 5:00 AM - 11:00 PM", "Sat - Sun: 6:00 AM - 10:00 PM"]
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, url: "#", name: "Facebook" },
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Twitter, url: "#", name: "Twitter" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-black min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-Oddiline font-bold mb-6 bg-gradient-to-r from-[#87a922] to-[#e5f2bf] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-[#e5f2bf] font-Oddiline  text-xl max-w-2xl mx-auto">
            Have questions? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-[rgba(135,169,34,0.1)] p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#e5f2bf] mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#87a922] text-[#e5f2bf] focus:outline-none focus:ring-2 focus:ring-[#87a922]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#e5f2bf] mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-black border border-[#87a922] text-[#e5f2bf] focus:outline-none focus:ring-2 focus:ring-[#87a922]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#e5f2bf] mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-[#87a922] text-[#e5f2bf] focus:outline-none focus:ring-2 focus:ring-[#87a922]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#e5f2bf] mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black border border-[#87a922] text-[#e5f2bf] focus:outline-none focus:ring-2 focus:ring-[#87a922] resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#87a922] text-black py-4 px-8 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#6a7a38] transition-colors duration-300"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl bg-[rgba(135,169,34,0.1)] hover:bg-[rgba(135,169,34,0.2)] transition-colors duration-300"
              >
                <info.icon className="w-6 h-6 text-[#87a922]" />
                <div>
                  <h3 className="text-[#87a922] font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-[#e5f2bf]">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-[#87a922] font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-3 rounded-full bg-[rgba(135,169,34,0.1)] hover:bg-[#87a922] transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 text-[#87a922] group-hover:text-black" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;