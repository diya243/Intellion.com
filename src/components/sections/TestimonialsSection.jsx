import { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Intelion transformed our business operations with their custom ERP solution. Their team's technical expertise and understanding of our industry needs were exceptional.",
      author: "Sarah Johnson",
      position: "CTO, Global Logistics Inc.",
      image: "/src/assets/images/testimonial-1.jpg" // Replace with actual image
    },
    {
      id: 2,
      content: "Working with Intelion on our cloud migration was a game-changer. Their methodical approach and attention to security details ensured a smooth transition with zero downtime.",
      author: "Michael Chen",
      position: "IT Director, FinTech Solutions",
      image: "/src/assets/images/testimonial-2.jpg" // Replace with actual image
    },
    {
      id: 3,
      content: "The SaaS platform developed by Intelion helped us scale our operations globally. Their ongoing support and regular updates keep our system running smoothly and secure.",
      author: "Emily Rodriguez",
      position: "CEO, TechStart Innovations",
      image: "/src/assets/images/testimonial-3.jpg" // Replace with actual image
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Don't just take our word for it—hear from the businesses we've helped transform
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            <div className="relative testimonial-content">
              <p className="text-xl md:text-2xl font-medium mb-8">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  {/* Replace with actual image */}
                  <div className="w-12 h-12 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <p className="font-bold">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-400">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute right-8 bottom-8 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;