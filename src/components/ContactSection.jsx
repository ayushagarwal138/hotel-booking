import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 rounded border" />
              <input type="email" placeholder="Your Email" className="w-full p-2 rounded border" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded border"></textarea>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-500 mr-2" />
                <span>123 Hotel Street, City, Country</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-500 mr-2" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-500 mr-2" />
                <span>info@resmathotel.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}