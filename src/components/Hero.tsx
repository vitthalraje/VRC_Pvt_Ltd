import React from 'react';
import { ArrowRight, Cpu, Leaf } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <Logo size="lg" variant="light" />
            </div>
            
            <div className="flex items-center space-x-2 mb-6">
              <Cpu className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">AI-Powered Solutions</span>
              <Leaf className="h-6 w-6 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Sustainable Development</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Tomorrow's 
              <span className="text-emerald-400"> Sustainable</span> Infrastructure
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              VRC InfraMax combines cutting-edge AI technology with sustainable practices to deliver comprehensive real estate solutions, from development and construction to town planning and renovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all">
                View Our Work
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern sustainable building"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-blue-900 p-6 rounded-xl shadow-lg">
              <p className="font-bold text-lg">10+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;