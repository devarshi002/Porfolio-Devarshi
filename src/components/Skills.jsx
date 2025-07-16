import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiPostman,
  SiMysql,
  SiPython,
  SiPandas,
  SiNumpy,
  SiStreamlit,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Mysql", icon: <SiMysql className="text-green-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  { name: "Pandas", icon: <SiPandas className="text-red-400" /> },
  { name: "Numpy", icon: <SiNumpy className="text-blue-400" /> },
  { name: "Streamlit", icon: <SiStreamlit className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

const Skills = () => {
  return (
    <section
      id="tech"
      className="min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl w-full">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-[2px] rounded-xl"
          >
            <div className="bg-gray-900 rounded-[10px] p-6 h-full w-full flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-200 text-center">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
