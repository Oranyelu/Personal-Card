import React from "react";

const projects = [
  {
    title: "George Wood Casket & Furniture",
    description:
      "Crafted a luxury funeral brand's online identity. Developed a full-stack website showcasing products, client services, and tribute submissions. Set in sepia tones with vintage textures.",
    link: "https://georgewoodcasket.com",
  },
  {
    title: "Maison Jorgie",
    description:
      "High-fashion mobile e-commerce app inspired by French couture. Elegant branding meets technical finesse. Features coupon logic, order tracking, admin dashboard.",
    link: "https://github.com/Oranyelu/maison-jorgie",
  },
  {
    title: "Learnable Kids",
    description:
      "Collaborative UI project for an educational platform. Focused on color psychology, friendly UX, and accessibility-first design for young minds.",
    link: "http://",
  },
  {
    title: "George Wood Dashboard (Figma)",
    description:
      "Administrative dashboard interface design for product tracking, bond issuance, and client analytics. Layout inspired by old ledger books meets modern grid logic.",
    link: "https://www.figma.com/design/CI1JGoJUv5FwLbmctC7vje/GEORGE-WOOD?node-id=0-1",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-[#f3e2b3] font-news p-8 bg-[url('/assets/paper-bg.png')] bg-cover">
      <h1 className="text-4xl font-old text-center uppercase border-b-4 border-black mb-8">
        Recent Conquests
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-black p-6 bg-white/90 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg"
          >
            <h2 className="text-2xl font-spectral uppercase mb-2 tracking-wide">
              {project.title}
            </h2>
            <p className="text-sm mb-4 font-news leading-relaxed text-gray-900">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold text-black underline hover:decoration-wavy hover:underline-offset-2"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      <footer className="mt-12 border-t border-black pt-4 text-center text-xs text-gray-800">
        Catalog compiled and published by George Chiemerie Chime, Esq. · Circa 2025
      </footer>
    </div>
  );
}

export default Projects;
