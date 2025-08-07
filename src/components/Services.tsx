import React from 'react';
import { Bot, MessageSquare, BarChart3, Cog, Users, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'Custom AI Agents',
      description: 'Tailored autonomous agents designed specifically for your business needs and workflows.',
      features: ['Process Automation', 'Decision Making', 'Task Scheduling', 'Performance Monitoring']
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Intelligent chatbots and virtual assistants that enhance customer engagement.',
      features: ['24/7 Customer Support', 'Multi-language Support', 'Context Understanding', 'Human Handoff']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered insights that forecast trends and optimize business strategies.',
      features: ['Market Analysis', 'Risk Assessment', 'Revenue Forecasting', 'Customer Behavior']
    },
    {
      icon: Cog,
      title: 'Workflow Automation',
      description: 'Streamline operations with intelligent process automation and optimization.',
      features: ['Document Processing', 'Data Integration', 'Quality Assurance', 'Error Reduction']
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'AI agents that work alongside your team to boost productivity and efficiency.',
      features: ['Skill Enhancement', 'Task Distribution', 'Knowledge Sharing', 'Training Support']
    },
    {
      icon: Shield,
      title: 'AI Governance',
      description: 'Ensure responsible AI deployment with comprehensive governance frameworks.',
      features: ['Compliance Monitoring', 'Ethics Guidelines', 'Risk Management', 'Audit Trails']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intelligent automation to predictive analytics, we deliver end-to-end AI solutions 
            that transform how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;