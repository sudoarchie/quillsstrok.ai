import React from 'react';
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Personalization Engine',
      category: 'Retail AI',
      description: 'AI-powered recommendation system that increased conversion rates by 45% and customer engagement by 60%.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        { icon: TrendingUp, value: '45%', label: 'Conversion Increase' },
        { icon: Users, value: '2M+', label: 'Users Served' },
        { icon: Clock, value: '3ms', label: 'Response Time' }
      ]
    },
    {
      title: 'Healthcare Diagnostic Assistant',
      category: 'Healthcare AI',
      description: 'Machine learning model that assists doctors in early disease detection with 97% accuracy rate.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        { icon: TrendingUp, value: '97%', label: 'Accuracy Rate' },
        { icon: Users, value: '500+', label: 'Healthcare Workers' },
        { icon: Clock, value: '80%', label: 'Time Saved' }
      ]
    },
    {
      title: 'Financial Risk Management',
      category: 'FinTech AI',
      description: 'Intelligent system for real-time fraud detection and risk assessment, preventing $50M+ in losses.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: [
        { icon: TrendingUp, value: '$50M+', label: 'Losses Prevented' },
        { icon: Users, value: '1M+', label: 'Transactions Processed' },
        { icon: Clock, value: '99.9%', label: 'Uptime' }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with innovative AI solutions 
            that deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  {project.results.map((result, resultIndex) => {
                    const Icon = result.icon;
                    return (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">{result.value}</span>
                          <span className="text-gray-600 ml-2">{result.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Your Success Story
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;