import React from 'react';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Quills AI</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through intelligent automation and AI-powered solutions. 
              We help organizations harness the power of artificial intelligence to drive growth and innovation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                quillsstrok.ai@gmail.com
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                +91 9532340629
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                Noida, UP
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom AI Agents</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Conversational AI</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI Governance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Quills AI. All rights reserved. Built with cutting-edge AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;