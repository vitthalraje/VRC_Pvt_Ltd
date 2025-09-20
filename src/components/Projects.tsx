import React from 'react';
import { ExternalLink, MapPin, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Green Valley Residential Complex",
      location: "Mumbai, Maharashtra",
      category: "Residential Development",
      image: "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Completed",
      description: "Sustainable residential complex with 200+ eco-friendly homes featuring solar energy and rainwater harvesting."
    },
    {
      title: "Smart City Infrastructure",
      location: "Pune, Maharashtra",
      category: "Town Planning",
      image: "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "In Progress",
      description: "AI-driven smart city infrastructure project incorporating IoT systems and sustainable energy solutions."
    },
    {
      title: "Heritage Building Restoration",
      location: "Delhi, NCR",
      category: "Renovation",
      image: "https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Completed",
      description: "Complete restoration of colonial-era building while preserving historical architecture and adding modern amenities."
    },
    {
      title: "Tech Park Development",
      location: "Bangalore, Karnataka",
      category: "Commercial Development",
      image: "https://images.pexels.com/photos/3862149/pexels-photo-3862149.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Planning",
      description: "Modern tech park with LEED certification, featuring AI-optimized building management systems."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of innovative projects that showcase our commitment to sustainable development and cutting-edge design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    <Clock className="inline w-4 h-4 mr-1" />
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-emerald-600 text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <button className="flex items-center text-blue-800 hover:text-blue-600 font-semibold transition-colors">
                  View Details
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;