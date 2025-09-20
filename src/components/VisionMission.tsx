import React from 'react';
import { Eye, Target, Lightbulb, Globe } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving the future of sustainable infrastructure through innovation, technology, and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <Eye className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 ml-4">Our Vision</h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To be the leading force in transforming India's infrastructure landscape through sustainable development, innovative AI-driven solutions, and environmentally conscious practices that create lasting value for communities and future generations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Globe className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">Global standards with local expertise and understanding</p>
              </div>
              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">Innovation-driven approach to every project and challenge</p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-4 rounded-xl">
                <Target className="h-8 w-8 text-emerald-800" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 ml-4">Our Mission</h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To deliver comprehensive real estate and infrastructure solutions that seamlessly integrate cutting-edge AI technology with sustainable practices, ensuring every project contributes to a smarter, greener, and more prosperous future.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-800">100%</div>
                <div className="text-sm text-gray-600">Sustainable Focus</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-800">AI-Driven</div>
                <div className="text-sm text-gray-600">Smart Solutions</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-800">360°</div>
                <div className="text-sm text-gray-600">Service Coverage</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-800">Future</div>
                <div className="text-sm text-gray-600">Ready Infrastructure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-lg">I</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Embracing cutting-edge technology and creative solutions</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-800 font-bold text-lg">S</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-sm text-gray-600">Protecting our environment for future generations</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-800 font-bold text-lg">E</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">Delivering superior quality in every project</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-800 font-bold text-lg">T</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Trust</h4>
              <p className="text-sm text-gray-600">Building lasting relationships through integrity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;