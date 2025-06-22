import { useState } from 'react';
import { X, Award, Calendar, MapPin } from 'lucide-react';

const CertificationSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      name: 'Shop Act',
      issuer: 'Maharastra Government',
      // validUntil: '2025-12-31',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Certified organic agriculture practices ensuring highest quality standards for all our organic product lines.',
      location: 'United States'
    },
    {
      id: 2,
      name: 'IEC Certified',
      issuer: 'DGFT',
      // validUntil: '2026-06-30',
      image: 'https://images.unsplash.com/photo-1559166631-ef208440c75a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Commitment to fair trade practices ensuring farmers receive fair compensation for their produce.',
      location: 'International'
    },
    // {
    //   id: 3,
    //   name: 'ISO 22000 Food Safety',
    //   issuer: 'International Organization for Standardization',
    //   validUntil: '2025-09-15',
    //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    //   description: 'International standard for food safety management systems throughout the food chain.',
    //   location: 'Global'
    // },
    // {
    //   id: 4,
    //   name: 'Export License',
    //   issuer: 'Department of Commerce',
    //   validUntil: '2026-03-20',
    //   image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    //   description: 'Official government authorization for agricultural product exports to international markets.',
    //   location: 'India'
    // }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifications & Verifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality and compliance is backed by internationally 
            recognized certifications and government verifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {cert.issuer}
                </p>
                {/* <p className="text-sm text-gray-500">
                  Valid until {new Date(cert.validUntil).toLocaleDateString()}
                </p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedCert.name}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 mr-3" />
                    <span><strong>Issued by:</strong> {selectedCert.issuer}</span>
                  </div>
                  {/* <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span><strong>Valid until:</strong> {new Date(selectedCert.validUntil).toLocaleDateString()}</span>
                  </div> */}
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span><strong>Location:</strong> {selectedCert.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationSection;