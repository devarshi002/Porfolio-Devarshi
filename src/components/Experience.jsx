import React, { useState } from 'react';
import exitodesignzlogo from '../assets/exitodesignzlogo.jpeg'; // Your logo path

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'ExitoDesignz',
    logo: exitodesignzlogo,
    duration: 'June 2024 – Present',
    tech: ['React', 'Tailwind CSS', 'Flask', 'MySQL', 'Vercel', 'GitHub'],
  },
  {
    role: 'Web Development Intern',
    company: 'ExitoDesignz',
    logo: exitodesignzlogo,
    duration: 'Jul 2024 – Dec 2024',
    tech: ['React', 'Tailwind CSS', 'Flask', 'MySQL'],
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const closeModal = () => setSelectedExperience(null);

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white px-6 py-16"
    >
      <h2
        className="text-4xl font-extrabold mb-16 text-center
                   bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                   bg-clip-text text-transparent"
      >
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between
                       border border-transparent"
            style={{
              borderImageSlice: 1,
              borderWidth: '2px',
              borderImageSource:
                'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div>
                <p className="text-xl font-semibold
                              bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500
                              bg-clip-text text-transparent">
                  {exp.role}
                </p>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600
                             text-white px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedExperience(exp)}
              className="self-start px-6 py-2 rounded-full border-2
                         border-pink-500 text-pink-400 font-semibold
                         hover:bg-pink-500 hover:text-white transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div className="bg-black/70 backdrop-blur-md p-8 rounded-3xl max-w-md w-full shadow-2xl relative border-2"
               style={{
                 borderImageSlice: 1,
                 borderWidth: '2px',
                 borderImageSource:
                   'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
               }}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-5 text-4xl text-gray-400 hover:text-pink-500 transition"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3
              className="text-2xl font-extrabold mb-4
                         bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500
                         bg-clip-text text-transparent"
            >
              {selectedExperience.role}
            </h3>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={selectedExperience.logo}
                alt={`${selectedExperience.company} logo`}
                className="w-10 h-10 rounded-full object-cover shadow"
              />
              <p className="text-gray-300 font-semibold text-lg">{selectedExperience.company}</p>
            </div>
            <p className="text-gray-400 italic mb-5">{selectedExperience.duration}</p>
            <div>
              <p className="text-indigo-300 font-semibold mb-2">Tools & Technologies:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {selectedExperience.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
