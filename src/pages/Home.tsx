import React from 'react';
import { Bot, Phone, Workflow, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              ai-agency.solutions
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <Link to="/get-in-touch" className="hover:text-blue-400 transition-colors">Get in Touch</Link>
            </div>
            <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-medium transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Supercharge Your Business With A.I.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover AI automation solutions that accelerate growth, reduce costs, and maximize efficiency.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:scale-105 group">
              Start Your AI Journey
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'AI Chatbots',
                description: 'Intelligent conversational agents that engage your customers 24/7.'
              },
              {
                icon: Phone,
                title: 'AI Phone Callers',
                description: 'Automated voice solutions for seamless customer communication.'
              },
              {
                icon: Workflow,
                title: 'Business Automations',
                description: 'Streamline workflows and eliminate repetitive tasks with AI.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all hover:-translate-y-1 cursor-pointer">
                <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transform Your Business</h2>
            <p className="text-xl text-gray-400">Businesses save 80-90% of time previously spent on repetitive tasks</p>
          </div>
          <div className="relative h-96">
            {/* Traditional Process Bar */}
            <div className="absolute top-4 left-0 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Traditional Process</span>
                <span className="text-gray-400">40 hours/week</span>
              </div>
              <div className="h-8 w-full bg-gray-700 rounded-lg">
                <div className="h-full w-full bg-red-500/50 rounded-lg" />
              </div>
            </div>

            {/* AI-Powered Process Bar */}
            <div className="absolute bottom-4 left-0 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">AI-Powered Process</span>
                <span className="text-gray-400">4-8 hours/week</span>
              </div>
              <div className="h-8 w-full bg-gray-700 rounded-lg">
                <div className="h-full w-[20%] bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
              </div>
            </div>

            {/* Connecting Line */}
            <div className="absolute left-1/2 top-[52px] h-[calc(100%-68px)] w-0.5 bg-gradient-to-b from-red-500/50 to-blue-500" />
            
            {/* Time Saved Indicator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-6 py-3 rounded-full border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <span className="text-blue-400 font-bold">85% Time Saved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                ai-agency.solutions
              </div>
              <p className="text-gray-400">
                Transforming businesses with intelligent AI solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <Link to="/get-in-touch" className="block text-gray-400 hover:text-white transition-colors">Get in Touch</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:shravan@ai-agency.solutions" className="block text-gray-400 hover:text-white transition-colors">
                  shravan@ai-agency.solutions
                </a>
                <a href="tel:+917823844791" className="block text-gray-400 hover:text-white transition-colors">
                  +91 7823844791
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
            <div className="flex space-x-6">
              <a href="https://x.com/shravan_chumble" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;