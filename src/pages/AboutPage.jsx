import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-16"> {/* pt-16 to accommodate fixed header */}
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Intelion</h1>
            <p className="text-xl text-blue-200">
              Driving digital transformation with innovative technology solutions since 2015
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Intelion was founded in 2015 with a vision to bridge the gap between complex technology and business needs. What started as a small team of passionate developers has grown into a global IT solutions provider with offices in multiple countries.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our journey has been defined by our commitment to innovation, excellence, and client success. We've helped hundreds of businesses across various industries transform their operations, improve efficiency, and drive growth through technology.
            </p>
            <p className="text-lg text-gray-700">
              Today, Intelion stands at the forefront of digital innovation, continuing to push boundaries and create solutions that shape the future of business technology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To empower businesses with innovative technology solutions that solve complex challenges, drive efficiency, and create sustainable growth. We are committed to delivering excellence through collaboration, creativity, and deep technical expertise.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be the global leader in creating transformative digital experiences that enable businesses to thrive in an ever-evolving technological landscape. We envision a world where technology seamlessly enhances human potential and business capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700">
              The principles that guide everything we do at Intelion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We conduct business with honesty, transparency, and ethical standards that earn the trust of our clients and partners.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700">
                We embrace creative thinking, continual learning, and bold ideas to deliver solutions that are ahead of the curve.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of teamwork, diverse perspectives, and strong partnerships to create exceptional outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-700">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SaaS Solutions</h3>
              <p className="text-gray-700">
                Custom cloud-based software applications that scale with your business and provide anywhere, anytime access.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
              <p className="text-gray-700">
                End-to-end strategies and solutions to modernize your business processes and technology infrastructure.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-gray-700">
                Powerful data solutions that transform raw information into actionable business intelligence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-700">
                Comprehensive protection for your digital assets with advanced threat detection and prevention systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Solutions</h3>
              <p className="text-gray-700">
                Secure, scalable, and cost-effective cloud infrastructure and migration services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Development</h3>
              <p className="text-gray-700">
                Tailored software solutions designed to address your unique business challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-lg text-gray-700">
              Serving clients worldwide with local expertise and global capabilities
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">4</h3>
                <p className="text-gray-700 font-medium">Global Offices</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">20+</h3>
                <p className="text-gray-700 font-medium">Countries Served</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">150+</h3>
                <p className="text-gray-700 font-medium">Team Members</p>
              </div>
              
              <div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-700 font-medium">Projects Delivered</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-2">San Francisco</h4>
              <p className="text-gray-700">Global Headquarters</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-2">London</h4>
              <p className="text-gray-700">European Operations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Singapore</h4>
              <p className="text-gray-700">Asia-Pacific Hub</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Mumbai</h4>
              <p className="text-gray-700">Development Center</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-700">
              Meet the experienced team driving Intelion's vision and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-700">
                  With over 20 years of experience in technology leadership, Sarah drives Intelion's strategic vision and growth initiatives.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-700">
                  Michael leads our technical innovation, ensuring Intelion remains at the cutting edge of emerging technologies.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Elena Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Operating Officer</p>
                <p className="text-gray-700">
                  Elena oversees global operations, ensuring excellence in service delivery and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-700">
              Hear from organizations that have transformed their business with Intelion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Global Finance Corp</h3>
                  <p className="text-blue-600">Financial Services</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Intelion's cloud migration strategy helped us reduce infrastructure costs by 40% while improving system performance and security. Their team's expertise and dedication made a complex transition seamless."
              </p>
              <p className="font-medium text-gray-900">— James Wilson, CTO</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">HealthCare Solutions</h3>
                  <p className="text-blue-600">Healthcare</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The custom SaaS platform developed by Intelion revolutionized our patient management process. We've seen a 60% increase in efficiency and significantly improved patient satisfaction scores."
              </p>
              <p className="font-medium text-gray-900">— Dr. Lisa Chen, Director of Operations</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Partner with Intelion to unlock new possibilities and drive sustainable growth through innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule a Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
                Explore Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;