import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Cloud Infrastructure Solutions",
      description: "Enterprise-grade cloud infrastructure setup, migration, and management services designed to optimize your business operations.",
      icon: "cloud",
      features: [
        "Cloud architecture design", 
        "Migration strategy & implementation", 
        "Hybrid cloud solutions", 
        "Performance optimization",
        "24/7 monitoring & support"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets from increasingly sophisticated threats in today's landscape.",
      icon: "shield",
      features: [
        "Threat detection & prevention", 
        "Security audit & compliance", 
        "Zero-trust implementation", 
        "Data breach protection",
        "Security awareness training"
      ]
    },
    {
      id: 3,
      title: "Data Analytics Platform",
      description: "Transform your raw data into actionable business intelligence with our advanced analytics tools and services.",
      icon: "chart",
      features: [
        "Big data processing", 
        "Predictive analytics", 
        "Real-time dashboards", 
        "Data warehousing",
        "Machine learning integration"
      ]
    },
    {
      id: 4,
      title: "DevOps Automation",
      description: "Streamline your development pipeline with automated workflows and continuous integration/deployment solutions.",
      icon: "code",
      features: [
        "CI/CD pipeline setup", 
        "Infrastructure as code", 
        "Containerization", 
        "Microservices architecture",
        "Performance monitoring"
      ]
    },
    {
      id: 5,
      title: "Enterprise SaaS Solutions",
      description: "Custom software-as-a-service implementations tailored to your unique business requirements and challenges.",
      icon: "box",
      features: [
        "Custom SaaS development", 
        "API integration", 
        "Scalable architecture", 
        "User experience design",
        "Subscription management"
      ]
    },
    {
      id: 6,
      title: "IT Consulting & Strategy",
      description: "Expert guidance to align your technology investments with business goals and maximize return on IT expenditure.",
      icon: "lightbulb",
      features: [
        "Digital transformation roadmap", 
        "Technology stack assessment", 
        "IT governance", 
        "Cost optimization",
        "Strategic technology planning"
      ]
    }
  ];

  // Icon components
  const Icon = ({ name }) => {
    switch (name) {
      case 'cloud':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'shield':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
        );
      case 'chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'box':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'lightbulb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-blue-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Enterprise IT Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              Driving digital transformation with cutting-edge technology services tailored to your business needs
            </p>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Comprehensive IT Services
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
          >
            From cloud infrastructure to cybersecurity, we provide end-to-end solutions to empower your digital journey
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-50 mb-6">
                  <Icon name={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 py-4 bg-gradient-to-r from-indigo-50 to-blue-50">
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-500 transition-colors duration-300">
                  Learn more
                  <svg className="ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to transform your IT infrastructure?
              </h2>
              <p className="mt-3 text-lg text-indigo-100">
                Schedule a consultation with our experts to discuss your business needs and how our solutions can help you achieve your goals.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
                  Get started
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              See what our clients have to say about our services and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Intelion's cloud infrastructure solutions have transformed our operations, reducing costs by 40% while improving system reliability.",
                author: "Sarah Johnson",
                title: "CTO, TechVenture Inc"
              },
              {
                quote: "The cybersecurity team at Intelion provided us with a comprehensive security overhaul that has protected us from multiple potential breaches.",
                author: "Michael Chen",
                title: "CISO, Global Finance Group"
              },
              {
                quote: "Implementing Intelion's data analytics platform gave us insights we never thought possible, directly contributing to a 28% revenue increase.",
                author: "Jennifer Williams",
                title: "Data Officer, Retail Solutions"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow">
                <svg className="h-12 w-12 text-indigo-200 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-500 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-indigo-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? Find quick answers to common inquiries about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {[
            {
              question: "How quickly can you implement cloud infrastructure solutions?",
              answer: "Implementation timelines vary based on complexity, but we typically complete standard cloud migrations within 4-8 weeks. Our phased approach ensures minimal disruption to your business operations while maintaining data integrity throughout the transition."
            },
            {
              question: "What security compliance standards do your cybersecurity services adhere to?",
              answer: "Our cybersecurity solutions are designed to meet various industry standards including GDPR, HIPAA, SOC 2, ISO 27001, and PCI DSS. We customize our approach based on your specific industry requirements and regularly update our protocols to address emerging threats."
            },
            {
              question: "Can your data analytics platform integrate with our existing systems?",
              answer: "Yes, our data analytics platform is designed with integration capabilities for most major business systems and data sources. We offer custom API development and connector solutions to ensure seamless data flow between your existing infrastructure and our analytics tools."
            },
            {
              question: "Do you offer ongoing support after implementing solutions?",
              answer: "Absolutely. We provide various tiers of ongoing support and maintenance services, including 24/7 monitoring, regular system updates, performance optimization, and dedicated technical support teams. Our service level agreements can be tailored to meet your specific business needs."
            },
            {
              question: "How do you ensure business continuity during major IT transformations?",
              answer: "We implement a carefully planned, phased approach with parallel systems during transitions. Our methodology includes comprehensive testing protocols, rollback capabilities, and contingency planning. We work closely with your team to schedule critical changes during minimal-impact windows."
            }
          ].map((faq, index) => (
            <div key={index} className="py-6">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-500 mt-3">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;