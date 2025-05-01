import React from "react";
import {
  UserCheck,
  CalendarCheck,
  DollarSign,
  ClipboardCheck,
  BarChart2,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Employee Tracking",
    description:
      "Monitor and manage employee performance, roles, and milestones with precision.",
    icon: <UserCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Attendance Management",
    description:
      "Automated attendance tracking integrated with check-in systems and work hours.",
    icon: <CalendarCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Payroll Insights",
    description:
      "Real-time payroll analytics and financial breakdowns for better HR decisions.",
    icon: <DollarSign className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Leave Approvals",
    description:
      "Streamlined leave request, review, and approval process for both employees and managers.",
    icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Performance Analytics",
    description:
      "Advanced analytics tools to assess and improve workforce performance.",
    icon: <BarChart2 className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Team Collaboration",
    description:
      "HR tools that support team feedback, surveys, and employee engagement activities.",
    icon: <Users className="w-10 h-10 text-blue-600" />,
  },
];

export const Services = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-100 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-950 mb-4">
            Services We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            HR Cloud provides a powerful suite of tools to modernize your HR
            operations and enhance employee experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
