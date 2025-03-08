const FeaturesSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Intelion</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              We combine technical expertise with business acumen to deliver solutions that drive measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                {/* Replace with actual image */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl aspect-video shadow-2xl"></div>
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-lg shadow-lg">
                  <p className="text-3xl font-bold">98%</p>
                  <p className="font-medium">Client Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Expertise</h3>
                  <p className="text-gray-600">
                    With over 10 years of experience and a team of 100+ certified experts, we've successfully delivered 500+ projects.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">
                    Our proven agile methodology ensures on-time delivery without compromising on quality or scope.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600">
                    We stay at the forefront of technology trends to deliver cutting-edge solutions that give you a competitive edge.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">
                    Our relationship doesn't end at delivery—we provide continuous support and maintenance to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;