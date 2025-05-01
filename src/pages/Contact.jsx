import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-white">
      <div className=" py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Contact Information
              </h3>
              <div className="flex items-start gap-4 text-gray-700 mb-3">
                <MapPin className="text-blue-600" />
                <span>
                  123 HRCloud Street, Suite 500, Los Angeles, CA 90001
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-700 mb-3">
                <Phone className="text-blue-600" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <Mail className="text-blue-600" />
                <span>contact@hrcloud.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                Follow us
              </h4>
              <div className="flex gap-4 text-blue-600">
                <a href="#" aria-label="Facebook">
                  <Facebook className="hover:text-blue-800" />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter className="hover:text-blue-800" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="hover:text-blue-800" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram className="hover:text-blue-800" />
                </a>
              </div>
            </div>

            <div className="mt-6">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.793339607547!2d-118.2478472847829!3d34.05223448060609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b8dcb21e19%3A0x186f453e56b1f282!2sLos+Angeles%2C+CA!5e0!3m2!1sen!2sus!4v1632836799999!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
