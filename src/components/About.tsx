import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "50+", label: "Expert Team Members" },
    { icon: Award, number: "25+", label: "Industry Awards" },
    { icon: TrendingUp, number: "15+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading the Future of 
              <span className="text-emerald-600"> Sustainable</span> Infrastructure
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              VRC InfraMax Private Limited stands at the forefront of sustainable infrastructure development, combining decades of industry expertise with cutting-edge AI technology to create environments that serve communities while protecting our planet.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to innovation drives us to explore new possibilities in construction, design, and urban planning, ensuring every project we undertake contributes to a more sustainable and technologically advanced future.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 text-blue-800 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction team planning"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
              <p className="font-bold text-lg">AI-Powered</p>
              <p className="text-sm">Smart Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;