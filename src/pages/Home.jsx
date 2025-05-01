import React from "react";
import { photos } from "../assets/asset";
import { HiUserAdd } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { motion } from "framer-motion";

export const Home = () => {
  const features = [
    {
      title: "Onboarding",
      icon: <HiUserAdd className="text-4xl text-blue-600 mx-auto mb-3" />,
    },
    {
      title: "Attendance",
      icon: <MdAccessTime className="text-4xl text-blue-600 mx-auto mb-3" />,
    },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt className="text-4xl text-blue-600 mx-auto mb-3" />,
    },
    {
      title: "Performance",
      icon: <GiProgression className="text-4xl text-blue-600 mx-auto mb-3" />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-sky-100 to-white min-h-screen px-6 md:px-20 py-10 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section className="md:basis-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
            Welcome to <span className="text-blue-600">HR Cloud</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            HR Cloud is a web-based Human Resource Management System (HRMS)
            designed to help companies efficiently manage their employees and HR
            operations through a centralized, user-friendly digital platform. It
            streamlines tasks such as onboarding, attendance tracking, and
            payroll — all in one place.
          </p>
          <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition">
            Get Started
          </button>
        </section>

        <div className="md:basis-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={photos.first}
            alt="HR Cloud Illustration"
            className="h-80 md:h-96 object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>

      <section className="grid md:grid-cols-4 gap-6 my-16 text-center">
        {features.map(({ title, icon }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 border border-blue-100 bg-white rounded-lg shadow hover:shadow-xl"
          >
            {icon}
            <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
          </motion.div>
        ))}
      </section>

      <section className="bg-gray-100 py-10 px-6 rounded-lg shadow-sm mt-10">
        <h2 className="text-2xl font-bold text-center text-blue-800">
          What Users Say
        </h2>

        <div className="mt-6 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="italic text-gray-700">
              “HR Cloud made our HR process 10x faster!”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-blue-700">Anjali Verma</h4>
              <p className="text-sm text-gray-500">HR Lead, InnovateTech</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="italic text-gray-700">
              “Onboarding new employees has never been this smooth. Our team
              loves it!”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-blue-700">Rohan Malhotra</h4>
              <p className="text-sm text-gray-500">People Ops, TeamCore</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="italic text-gray-700">
              “From attendance to payroll, everything is streamlined. Highly
              recommended.”
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-blue-700">Sanya Gupta</h4>
              <p className="text-sm text-gray-500">
                Operations Head, BrightByte
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
