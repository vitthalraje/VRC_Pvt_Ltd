import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-emerald-400" />
              <div>
                <h3 className="text-xl font-bold">VRC InfraMax</h3>
                <p className="text-sm text-gray-400">Private Limited</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of sustainable infrastructure development through innovative AI-driven solutions and comprehensive real estate services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>vrcinframax@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 8669767002</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Undri,pune City ,pune-411060 Pune,Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Real Estate Development</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Town Planning</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Renovation</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VRC InfraMax Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Sustainability</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;