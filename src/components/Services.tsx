import React from 'react';
import { Building, MapPin, Wrench, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Real Estate Development",
      description: "Comprehensive real estate services including property purchase, leasing, development, and construction of residential, commercial, and industrial properties.",
      features: ["Property Acquisition", "Development Planning", "Construction Management", "Leasing Services"]
    },
    {
      icon: MapPin,
      title: "Town Planning & Infrastructure",
      description: "Sustainable urban planning and infrastructure development focused on creating environmentally responsible communities for the future.",
      features: ["Master Planning", "Sustainable Design", "Infrastructure Development", "Environmental Impact Assessment"]
    },
    {
      icon: Wrench,
      title: "Renovation & Redevelopment",
      description: "Expert renovation and redevelopment services that transform existing structures while preserving architectural integrity and enhancing functionality.",
      features: ["Structural Assessment", "Design Enhancement", "Modern Upgrades", "Heritage Preservation"]
    },
    {
      icon: Cpu,
      title: "AI-Driven Solutions",
      description: "Cutting-edge AI-powered construction, design, and professional services that optimize efficiency, reduce costs, and improve project outcomes.",
      features: ["Smart Design Systems", "Predictive Analytics", "Automated Planning", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive infrastructure solutions that combine traditional expertise with innovative technology and sustainable practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors">
                    <Icon className="h-8 w-8 text-blue-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;