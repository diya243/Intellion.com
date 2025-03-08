import React, { useState } from 'react';

const ContactPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  
  // State for form submission
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been received. We\'ll get back to you within 24 hours.',
    });
    
    // In a real implementation, you would send the data to your backend here
    // and handle success/error states appropriately
  };

  // Service options
  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'saas', label: 'SaaS Solutions' },
    { value: 'digital', label: 'Digital Transformation' },
    { value: 'data', label: 'Data Analytics' },
    { value: 'security', label: 'Cybersecurity' },
    { value: 'cloud', label: 'Cloud Solutions' },
    { value: 'development', label: 'Custom Development' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="pt-16"> {/* pt-16 to accommodate fixed header */}
      {/* Hero Section with Interactive Map Background */}
      <section className="relative bg-blue-900 text-white py-24 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            {/* Digital connection nodes */}
            <circle cx="30" cy="30" r="1" fill="white" />
            <circle cx="70" cy="40" r="1" fill="white" />
            <circle cx="50" cy="60" r="1" fill="white" />
            <circle cx="80" cy="80" r="1" fill="white" />
            <circle cx="20" cy="70" r="1" fill="white" />
            {/* Connection lines */}
            <line x1="30" y1="30" x2="70" y2="40" stroke="white" strokeWidth="0.2" />
            <line x1="70" y1="40" x2="50" y2="60" stroke="white" strokeWidth="0.2" />
            <line x1="50" y1="60" x2="80" y2="80" stroke="white" strokeWidth="0.2" />
            <line x1="80" y1="80" x2="20" y2="70" stroke="white" strokeWidth="0.2" />
            <line x1="20" y1="70" x2="30" y2="30" stroke="white" strokeWidth="0.2" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-200">
              Let's discuss how Intelion can transform your business with innovative technology solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Innovative Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Left Column - Contact Info */}
              <div className="md:col-span-2 bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                
                {/* Global Offices Tabs */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">San Francisco</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full hover:bg-gray-300">London</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full hover:bg-gray-300">Singapore</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full hover:bg-gray-300">Mumbai</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Address</h3>
                        <p className="text-gray-700">601 Montgomery St, Suite 1400<br />San Francisco, CA 94111</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-700">+1 (415) 555-0123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-700">info@intelion.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 6:00 PM PST</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Saturday:</span>
                      <span className="font-medium">By appointment</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
                
                {/* Connect with us */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="md:col-span-3">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  
                  {formStatus.submitted ? (
                    <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      <p className="font-medium text-center">{formStatus.message}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Company"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            {serviceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="5"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us about your project or inquiry..."
                          required
                        ></textarea>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center">
                          <input
                            id="privacy"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            required
                          />
                          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                            I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a>
                          </label>
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Find quick answers to common questions about our services
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-bold text-gray-900">What industries does Intelion serve?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Intelion serves a diverse range of industries including finance, healthcare, retail, manufacturing, education, and government. Our solutions are tailored to address the specific challenges and opportunities within each sector.
                  </p>
                </details>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-bold text-gray-900">How do I get started with Intelion's services?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3">
                    The process begins with a consultation where we discuss your business needs and objectives. Our team then conducts a thorough assessment to identify the best solutions for your specific situation. We'll provide a detailed proposal outlining our recommended approach, timeline, and investment.
                  </p>
                </details>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-bold text-gray-900">What makes Intelion different from other IT solution providers?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3">
                    What sets Intelion apart is our holistic approach to technology solutions. We combine deep technical expertise with business acumen to deliver solutions that not only address immediate challenges but also support long-term strategic goals. Our commitment to ongoing innovation, personalized service, and measurable results has earned us a reputation for excellence.
                  </p>
                </details>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-bold text-gray-900">Do you offer support and maintenance after implementation?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Yes, we provide comprehensive support and maintenance services for all our solutions. Our support packages include regular updates, performance monitoring, troubleshooting, and continuous optimization. We offer different tiers of support to meet varying needs and budgets, ensuring your technology investments continue to deliver value.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      
      
      {/* Newsletter Signup with Modal-style Design */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-blue-200 mb-8">
              Subscribe to our newsletter for the latest industry insights, tech trends, and Intelion news
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="Your email address"
                />
                <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;