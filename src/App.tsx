import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowRight, ShoppingBag, Brain, TrendingUp, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with eTail Co
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Expert e-commerce solutions, AI integration, and digital marketing services
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="h-32 bg-gray-50 transform -skew-y-6 origin-top-left"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <ShoppingBag className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
              <p className="text-gray-600">Custom online stores and marketplaces built for success</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <Brain className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-600">Smart automation and personalized user experiences</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">Results-driven strategies for growth and engagement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <p className="text-gray-600">Expert guidance for your digital transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="E-commerce Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fashion E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">Complete e-commerce solution with AI-powered recommendations</p>
                <a href="#" className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700">
                  View Case Study <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt="Marketing Campaign"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Digital Marketing Campaign</h3>
                <p className="text-gray-600 mb-4">Successful marketing strategy with 300% ROI</p>
                <a href="#" className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700">
                  View Case Study <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="AI Integration"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI Shopping Assistant</h3>
                <p className="text-gray-600 mb-4">Smart chatbot increasing customer satisfaction by 45%</p>
                <a href="#" className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700">
                  View Case Study <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help you achieve your goals</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;