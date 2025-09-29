import React from 'react';
import { Brain, BarChart3, Zap, Shield, Eye, Cog } from 'lucide-react';

const AIServices = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "Smart Design & Planning",
      description: "AI-powered architectural design and urban planning that optimizes space utilization, energy efficiency, and structural integrity.",
      features: ["Automated Floor Planning", "Energy Optimization", "Structural Analysis", "Code Compliance Check"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced data analytics for project forecasting, cost estimation, and risk assessment to ensure successful project delivery.",
      features: ["Cost Prediction", "Timeline Forecasting", "Risk Assessment", "Resource Optimization"]
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "AI-powered visual inspection and monitoring systems for construction quality control and safety compliance.",
      features: ["Quality Inspection", "Safety Monitoring", "Progress Tracking", "Defect Detection"]
    },
    {
      icon: Cog,
      title: "Smart Building Automation",
      description: "Intelligent building management systems that optimize energy consumption, security, and occupant comfort.",
      features: ["Energy Management", "Security Systems", "Climate Control", "Maintenance Scheduling"]
    },
    {
      icon: Shield,
      title: "AI-Driven Safety Systems",
      description: "Advanced safety monitoring and incident prevention systems powered by machine learning and IoT sensors.",
      features: ["Hazard Detection", "Emergency Response", "Worker Safety", "Equipment Monitoring"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamlined construction workflows and project management through intelligent automation and digital twins.",
      features: ["Workflow Optimization", "Digital Twin Technology", "Automated Reporting", "Real-time Monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-12 w-12 text-yellow-400 mr-4" />
            <h2 className="text-4xl font-bold">AI-Powered Solutions</h2>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Revolutionizing construction and real estate through artificial intelligence, machine learning, and advanced automation technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all group border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400/20 p-3 rounded-xl group-hover:bg-yellow-400/30 transition-colors">
                    <Icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                </div>
                
                <p className="text-blue-100 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* AI Technology Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">AI Technology Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
              <div className="text-blue-100">Faster Project Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">30%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-blue-100">Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-blue-100">Monitoring & Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Project with AI?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Discover how our AI-powered solutions can optimize your construction and development projects for better outcomes, reduced costs, and faster delivery.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors">
            Schedule AI Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIServices;