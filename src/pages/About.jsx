// About.js

import ProfileImage from "../assets/WhatsApp Image 2025-06-18 at 00.15.25_190ababd.jpg";
import Profile2 from "../assets/userprofile2.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function About({ projects = [] }) {
  const [sepia, setSepia] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("sepia-mode", sepia);
  }, [sepia]);

  return (
    <div
      className={`min-h-screen bg-[#f3e2b3] py-12 px-4 flex justify-center font-news transition-all duration-700 ease-in-out ${
        sepia ? "sepia" : ""
      }`}
    >
      <div className="bg-[#fffdf5] max-w-5xl w-full p-6 border-[1.5px] border-black shadow-lg print:text-black print:bg-white paper-texture animate-fade-in">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center uppercase border-b-4 border-black mb-2 tracking-widest">
          THE DIGITAL HERALD
        </h1>
        <p className="text-center italic text-xs mb-4">
          Published: June 17, 2025 · Enugu, Nigeria
        </p>

        <h2 className="text-center text-lg italic uppercase mb-6 tracking-wide">
          Exclusive: Fullstack Dev & Radiographer Plots UX Revolution
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="col-span-1">
            <h3 className="text-md font-bold uppercase">
              Codename: <s className="bg-yellow-300 p-1">Oranyelu</s>
            </h3>
            <p className="text-xs leading-relaxed mb-4">
              Fullstack Web Developer. Branding Overlord. Radiographer. I write
              code like poetry and build brands like cathedrals — sturdy,
              sacred, and built to inspire awe. My work is an intersection of
              tech and tenderness, where precision meets flair, and legacy meets
              innovation.
            </p>

            <h3 className="text-md font-bold uppercase">Education</h3>
            <ul className="list-disc pl-5 text-xs mb-4">
              <li>
                <strong>BSc in Medical Radiography</strong>
                <br />
                University of Nigeria, Enugu Campus – Completed
              </li>
              <li>
                <strong>Frontend Web Development</strong>
                <br />
                Genesys Upskill & Learnable Program – React, UI/UX, JavaScript
              </li>
              <li>
                <strong>Backend Development</strong>
                <br />
                Atuenyi Coding Academy – Node.js, Express, MongoDB, SQL
              </li>
              <li>
                <strong>Tech Mentorship</strong>
                <br />
                Instructor, Techxagon Academy – Guided new devs in React/Node
              </li>
            </ul>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-span-1">
            {/* Moved ProfileImage here */}
            <div className="overflow-hidden mb-4 parchment">
              <img
                src={ProfileImage}
                alt="George Chiemerie Chime"
                className="w-full grayscale hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            <h3 className="text-xl font-black uppercase mb-2 border-b border-black">
              Work & Contributions
            </h3>
            <p className="text-xs mb-4 leading-relaxed">
              As Executive Director and Lead Developer at{" "}
              <strong>George Wood Casket</strong>, I fuse tradition with tech —
              building e-commerce platforms, automating customer emails,
              digitizing funeral experiences, and rebranding one of Nigeria’s
              oldest casket companies.
            </p>
            <p className="text-xs mb-4 leading-relaxed">
              Founder of <strong>PawVibe</strong> — a digital pet store for
              Nigeria, and creator of <strong>Maison Jorgie</strong>, a luxury
              fashion e-commerce app made with React Native.
            </p>
            <p className="text-xs mb-4 leading-relaxed">
              My stack? React, Tailwind, Express, MongoDB, Git, NodeMailer,
              Netlify, Vite — but also brand systems, Figma wireframes, and
              content calendars that actually slap.
            </p>
            <p className="text-xs leading-relaxed italic text-gray-700">
              “Innovation is the funeral I give to the old ways. And I always
              show up in black.”
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-1">
            <h3 className="text-md font-bold uppercase mb-2">Tech Stack</h3>
            <ul className="list-disc text-xs pl-5 mb-4">
              <li>React, React Native, Tailwind, JavaScript (ES6+)</li>
              <li>Node.js, Express.js, MongoDB, SQL</li>
              <li>Git, GitHub, Agile, CI/CD, Netlify, Vite</li>
              <li>UI/UX Design (Figma, Adobe XD)</li>
              <li>Email Automation (NodeMailer, marketing flows)</li>
              <li>API Dev, Auth, RESTful architecture</li>
            </ul>

            <h3 className="text-md font-bold uppercase mb-2">Projects</h3>
            <ul className="list-disc text-xs pl-5 mb-4">
              {projects.map((proj, idx) => (
                <li key={idx}>
                  <a
                    href={proj.link}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* View All Projects button */}
            <Link
              to="/projects"
              className="inline-block text-xs font-semibold text-black underline hover:decoration-wavy hover:underline-offset-2 mb-6"
            >
              View All Projects →
            </Link>

            <div className="overflow-hidden mb-4">
              <img
                src={Profile2}
                alt="George Secondary"
                className="w-full grayscale hover:scale-105 transform transition-transform duration-300"
              />
            </div>

            <a
              href="mailto:georgechime91@icloud.com"
              className="inline-block px-4 py-1 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800"
            >
              Send News Tip
            </a>
            <button
              onClick={() => window.print()}
              className="block mx-auto my-4 px-4 py-2 bg-black text-white text-xs rounded hover:bg-gray-700 print:hidden"
            >
              🖨️ Print Article
            </button>
            <button
              onClick={() => setSepia(!sepia)}
              className="block mx-auto mb-4 px-4 py-2 border border-black text-black text-xs rounded hover:bg-yellow-100 print:hidden"
            >
              {sepia ? "🌙 Go Light" : "🧾 Go Sepia"}
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 pt-4 border-t border-black text-center text-[10px] tracking-wide">
          <p>
            Published by George Chiemerie Chime · Fullstack Developer · Medical
            Radiographer · Founder, GWCF Foundation · Copyright ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
