import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'quillsstrok.ai@gmail.com',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this
        'YOUR_TEMPLATE_ID', // You'll need to replace this
        templateParams,
        'YOUR_PUBLIC_KEY' // You'll need to replace this
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how AI can revolutionize your operations. Get in touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">quillsstrok.ai@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">+91 9532340629</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Office</div>
                  <div className="text-gray-600">Noida, UP</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">Free Consultation Available</h4>
              <p className="text-gray-600 text-sm">
                Book a 30-minute strategy session to explore how AI can benefit your specific business needs.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project and AI requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isSubmitted || isLoading
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </span>
                )}
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                Your message will be sent directly to our team at quillsstrok.ai@gmail.com
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;