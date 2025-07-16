import React from "react";

const projects = [
  {
    name: "Spam Message Classifier",
    desc: "A machine learning app that classifies messages as spam or ham using Naive Bayes.",
    tech: ["Python", "Streamlit"],
    github: "https://github.com/devarshi2/spam-classifier",
    live: "https://spam-classifier.streamlit.app",
  },
  {
    name: "Tiffin Booking App",
    desc: "Web-based tiffin booking app with thali selection and real-time updates.",
    tech: ["Flask", "JavaScript", "MySQL"],
    github: "https://github.com/devarshi2/tiffin-app",
    live: "",
  },
  {
    name: "Ecommerce Dashboard",
    desc: "Dashboard to analyze monthly sales, profits, and categories using Plotly.",
    tech: ["Python", "Pandas", "Plotly"],
    github: "",
    live: "",
  },
  {
    name: "My Portfolio",
    desc: "This very portfolio you’re browsing!",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/devarshi2/portfolio",
    live: "https://devarshi-portfolio.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-16"
    >
      <h2
        className="text-4xl font-extrabold mb-16 text-center
                   bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
                   bg-clip-text text-transparent"
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-md border border-transparent
                       rounded-2xl p-8 flex flex-col justify-between
                       border-gradient-purple-pink-blue shadow-lg
                       hover:shadow-pink-500/40 hover:scale-[1.03]
                       transition-transform duration-300"
            style={{
              borderImageSlice: 1,
              borderWidth: "2px",
              borderImageSource:
                "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
            }}
          >
            <div>
              <h3
                className="text-2xl font-bold mb-4
                           bg-gradient-to-r from-blue-400 via-purple-600 to-pink-500
                           bg-clip-text text-transparent"
              >
                {project.name}
              </h3>
              <p className="text-gray-300 mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-700 px-4 py-1 rounded-full text-sm font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-purple-500 text-purple-400 rounded-full
                             hover:bg-purple-600 hover:text-white transition"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-pink-500 text-pink-400 rounded-full
                             hover:bg-pink-600 hover:text-white transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
