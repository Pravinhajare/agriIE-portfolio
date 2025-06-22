import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your agricultural trade journey? Contact us today 
            to discuss your import and export needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
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
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us about your agricultural trade needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-gray-300">
                    Kole, Tal: Sangola, Dist: Solapur<br />
                    Maharashtra 413314<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">+91 7263897038</p>
                  {/* <p className="text-gray-300">+91 98765 43211</p> */}
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-300">pratikbodhgire21@gmail.com</p>
                  {/* <p className="text-gray-300">exports@agrotradeco.com</p> */}
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Find Us</h4>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0284845844743!2d72.8776608!3d18.9899842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7b1b1b3b3b%3A0x3b3b3b3b3b3b3b3b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
