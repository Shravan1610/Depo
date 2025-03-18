import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone as PhoneIcon } from 'lucide-react';

function GetInTouch() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400 mb-8">
            Ready to transform your business with AI? Contact us directly through any of these channels.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors">
              <a href="mailto:shravan@ai-agency.solutions" className="flex items-center space-x-4 text-lg hover:text-blue-400 transition-colors">
                <Mail className="w-8 h-8" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-400">shravan@ai-agency.solutions</div>
                </div>
              </a>
            </div>

            <div className="p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-colors">
              <a href="tel:+917823844791" className="flex items-center space-x-4 text-lg hover:text-blue-400 transition-colors">
                <PhoneIcon className="w-8 h-8" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-400">+91 7823844791</div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">Want to discuss your project in detail?</p>
              <Link
                to="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-medium transition-all hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;