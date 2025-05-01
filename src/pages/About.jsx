import React from "react";
import { photos } from "../assets/asset";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-white  ">
      <div className="  lg:mx-20">
        <div className="relative text-center mb-2 mt-5  md:-mx-20 ">
          <img
            className="h-72 w-full object-cover rounded-xl"
            src={photos.six}
            loading="lazy"
            alt="header about us"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-700 ">
            <div className="flex flex-col font-bold text-3xl wow animate__animated animate__pulse sm:mb-5">
              <span>"Innovating today, shaping tomorrow. Together,</span>
              <span>we create the future."</span>
            </div>
            <Link to="/Contact">
              <button className="rounded-full font-bold text-white py-3 px-6 bg-blue-500 hover:bg-blue-700 sm:mt-6 inline-flex items-center gap-2 transition-transform transform hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <section className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="items-center justify-between content-center mx-10">
            <h2 className="text-3xl font-bold text-blue-500 mb-2">Mission </h2>
            <p className="text-gray-700 text-lg ">
              To simplify and empower HR processes through cutting-edge cloud
              technology, helping organizations focus on what truly matters —
              their people.
            </p>
          </div>
          <div className="md:basis-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={photos.second}
              alt=""
              className="h-80 md:h-96 object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-between mx-3">
          <div className="md:basis-1/2 flex justify-center mt-10 md:mt-0 ">
            <img
              src={photos.third}
              alt=""
              className="h-80 md:h-96 object-cover rounded-full"
            />
          </div>
          <div className="items-center justify-between content-cente">
            <h2 className="text-3xl font-bold text-blue-500 mb-2 ">Vision</h2>
            <p className="text-gray-700 text-lg">
              To become the most trusted platform for HR transformation,
              creating seamless, engaging employee experiences across the globe.
            </p>
          </div>
        </section>
        <section className="justify-center mt-20">
          <div>
            <h2 className="text-center text-3xl font-bold text-blue-500 mb-2 ">
              Why HR Cloud?
            </h2>
            <p className="text-center text-gray-700 font-bold mx-2 md:mx-20 my-5 md:my-10">
              HR Cloud was born out of a need for modern, user-friendly HR tools
              that reduce administrative burden and improve employee engagement.
              We believe HR teams deserve tools as innovative as the people they
              serve.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={photos.fourth}
              alt=""
              className="h-80 md:h-96 object-cover items-center"
            />
          </div>
        </section>
        <section className="my-10 p-5 rounded-xl bg-slate-100">
          <h2 className="text-4xl font-bold text-blue-500 mb-5 ">
            Our Core Values
          </h2>
          <ul className="text-2xl list-disc pl-6 text-gray-700 space-y-2">
            <li>Innovation with purpose</li>
            <li>Transparency and trust</li>
            <li>Customer-centric thinking</li>
            <li>People-first mindset</li>
            <li>Continuous improvement</li>
          </ul>
        </section>
        <section className="md:py-5">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Our team is made up of HR professionals, developers, and designers
            with a passion for building tools that make work better. Together,
            we're shaping the future of work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow text-center space-y-2"
              >
                <img
                  src={photos.five}
                  alt={`Team Member ${i + 1}`}
                  className="h-32 w-32 mx-auto rounded-full object-cover"
                />
                <div className="text-lg font-semibold text-blue-900">
                  Ayush Paradkar
                </div>
                <div className="text-sm text-gray-500">Designer</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
