import React from 'react';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'AI Specialists' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of AI technology, constantly exploring new possibilities.'
    },
    {
      icon: Users,
      title: 'Human-Centered',
      description: 'Our AI solutions are designed to augment human capabilities, not replace them.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Every solution is measured by its impact on your business objectives.'
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'We maintain the highest standards of quality and ethical AI development.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Leading the AI Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Quills AI, we're not just building software—we're crafting intelligent solutions 
              that reshape how businesses operate. Our team of AI experts, data scientists, and 
              engineers work together to deliver transformative results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From startups to Fortune 500 companies, we've helped organizations harness the power 
              of AI to automate processes, improve decision-making, and create exceptional customer experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;