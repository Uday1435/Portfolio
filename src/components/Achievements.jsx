import React from "react";
import { FaTrophy, FaAward, FaUserGraduate } from "react-icons/fa";

const achievementsData = [
  {
    title: "Project Presentation",
    description: "Winner of Project Presentation competition.",
    icon: <FaUserGraduate className="text-blue-500 text-2xl" />,
    badge: "Academic",
  },
  {
    title: "Coordinator",
    description: "Coordinated GeoCode and GamerX events in Technovate",
    icon: <FaAward className="text-purple-500 text-2xl" />,
    badge: "Recognition",
  },
  {
    title: "Certifications",
    description: "Completed various certificates on Softwares related to Development and Civil.",
    icon: <FaTrophy className="text-yellow-500 text-2xl" />,
    badge: "Technical",
  },
  {
    title: "Appointed as Technical Head",
    description: "Appointed as Technical Head in CESA",
    icon: <FaTrophy className="text-green-500 text-2xl" />,
    badge: "Skill",
  },
];

const AchievementCard = ({ title, description, icon, badge }) => (
  <div className="bg-gradient-to-br from-gray-50 to-blue-100 shadow-lg rounded-xl p-6 flex flex-col items-start relative">
    {/* Icon */}
    <div className="mb-4">{icon}</div>
    {/* Title */}
    <h3 className="font-bold text-xl mb-2 text-blue-800">{title}</h3>
    {/* Description */}
    <p className="mb-2 text-gray-700">{description}</p>
    {/* Badge */}
    <span className="absolute top-4 right-4 bg-blue-300 text-xs font-semibold px-3 py-1 rounded-full shadow text-white">
      {badge}
    </span>
  </div>
);

const Achievements = () => (
  <section id="achievements" className="py-16 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-8">Achievements</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      {achievementsData.map((achievement, idx) => (
        <AchievementCard key={idx} {...achievement} />
      ))}
    </div>
  </section>
);

export default Achievements;