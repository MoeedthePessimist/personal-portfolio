import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Apollo-E",
    description:
      "Apollo-e is a digital logistics platform that connects carriers and dispatchers, providing tools to manage loads, operations, and real-time logistics workflows in one unified system for efficient transportation management.",
    image: "/assets/apolloe.png",
    link: "https://apolloe.com",
  },
  {
    id: 2,
    title: "SoundSpace",
    description:
      "Soundspace is a marketplace platform that helps musicians, creators, and teams discover and book music-focused spaces—such as recording studios, rehearsal rooms, podcast studios, and creative venues—making it easy to find, compare, and reserve spaces for creative work.",
    image: "/assets/sound-space.png",
    link: "https://soundspace.co",
  },
  {
    id: 3,
    title: "AcadeMe Junior",
    description:
      "AcadeMe Junior is an interactive learning platform designed for children to learn English through engaging activities like avatars, songs, and videos, providing a fun and immersive educational experience.",
    image: "/assets/junior.png",
    link: "https://junior.elltechnologies.co",
  },
];

export default function Projects() {
  return (
    <div
      className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16"
      id="projects"
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-white mt-3 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <a href="/projects" className="block mt-10">
        <p className="text-center text-sm/6 lg:text-base text-[#71717A]">
          View All
        </p>
      </a>
    </div>
  );
}
