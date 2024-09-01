import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">GMB Audit Tool</span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
              <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-20" style={{background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Optimize Your Google My Business Listing
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Boost your local SEO with our powerful GMB Audit Tool
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">Comprehensive Audits</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">Competitor Analysis</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-white rounded shadow py-2">
              <p className="text-gray-800 text-base px-6 mb-5">Actionable Insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-200">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-gray-800">
            Ready to boost your local presence?
          </h2>
          <Link 
            to="/signup" 
            className="bg-green-500 text-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-green-400 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-2xl font-bold">GMB Audit Tool</a>
            </div>
            <div className="flex-1">
              <p className="uppercase font-bold md:mb-6">Links</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">FAQ</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">Help</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">Support</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-bold md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">Terms</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-bold md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">LinkedIn</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}