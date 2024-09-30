import React from "react";
import ProfileImage from "../assets/user profile 1.jpg"; // placeholder for black-and-white photo
import Profile2 from "../assets/userprofile2.svg"

function About() {
  return (
    <div className="min-h-screen bg-[#f3e2b3] py-12 px-4 flex justify-center">
      <div className="bg-white max-w-5xl w-full p-6 border border-black shadow-xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center uppercase border-b-4 border-black mb-6">
          NOTORIOUS DEVELOPER
        </h1>

        {/* Subheader */}
        <h2 className="text-center text-2xl font-semibold uppercase mb-2">
          Developer Plans World Biggest Internet Heist
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="col-span-1">
            {/* Placeholder for black and white image */}
            <div className="w-full h-auto mb-4 overflow-hidden">
              <img
                src={ProfileImage}
                alt="George Chiemerie Chime"
                className="w-full h-auto grayscale transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Article snippet on the left */}
            <h3 className="text-lg font-bold uppercase">Alias: <s className="bg-yellow-300 inline-block p-1">Oranyelu</s> </h3>
            <p className="text-sm leading-relaxed mb-4">
              Navigating the digital cosmos, I'm a Full Stack Web Developer by
              day, Graphic Designer by afternoon, and 3D Animator by night - a
              triple threat in the tech world. My code is as clean as my
              sketches, and my animations are as lively as my sense of humor. I
              believe in making users smile, one pixel at a time, and I'm on a
              mission to turn every browsing experience into an unexpected
              adventure.
            </p>

            <h3 className="text-lg font-bold uppercase">Education</h3>
            <p className="text-sm leading-relaxed mb-4">
              I have pursued a dynamic educational path that combines Medical
              Radiography and Web Development, allowing me to develop
              expertise in both fields:
            </p>

            <ul className="list-disc pl-5 text-sm leading-relaxed mb-4">
              <li>
                <strong>Bachelor's Degree in Medical Radiography</strong>
                <br />
                University of Nigeria, Nsukka (In Progress)
                <br />
                Currently, I am advancing my knowledge and practical skills in
                diagnostic imaging, focusing on MRI, CT scans, and X-rays, with
                a special interest in patient safety and medical technology
                integration.
              </li>

              <li>
                <strong>Frontend Web Development Certification</strong>
                <br />
                Genesys Tech-Hub (Completed)
                <br />
                Successfully completed the Genesys Upskill and Learnable
                programs, gaining deep insights into React, JavaScript, and
                UI/UX design.
              </li>

              <li>
                <strong>Backend Web Development Training</strong>
                <br />
                Atuenyi Coding Academy (Completed)
                <br />
                Developed backend skills with Node.js and Express.js, including
                building robust RESTful APIs and database management with
                MongoDB and SQL.
              </li>
            </ul>
          </div>

          {/* Middle Section - Main Article */}
          <div className="col-span-1">
            {" "}
            <h3 className="text-3xl font-bold uppercase mb-2">
              Experience
            </h3>{" "}
            <p className="text-sm leading-relaxed mb-4">
              {" "}
              As a <b>Fullstack Web Developer</b> and Medical Radiographer, I
              have developed a strong foundation in both technical and
              healthcare fields. My journey began with my passion for creating
              seamless user interfaces and solving backend challenges, leading
              me to specialize in Frontend Development with frameworks like
              <b> React</b> and <b>Tailwind CSS</b>, and Backend Development
              using
              <i> Node.js</i> and <i>Express</i>. Over the years, I’ve built and
              contributed to numerous projects, from dynamic websites to
              intricate web applications.{" "}
            </p>{" "}
            <p className="text-sm leading-relaxed mb-4">
              {" "}
              Furthermore, I hold leadership roles as the{" "}
              <i> Lead Developer at George Wood Casket and Furniture </i>, where
              I oversee website operations and marketing strategy. My
              entrepreneurial efforts have allowed me to blend my technical and
              business skills, managing website development, customer relations,
              and innovative service offerings for funeral planning, such as
              casket design and memorial services. I also embrace modern
              marketing approaches, handling <i>email automation</i> for
              customer order confirmations and building customer engagement
              through digital platforms.{" "}
            </p>{" "}
           
          </div>

          {/* Right Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold uppercase">Skills</h3>
            <p className="text-sm leading-relaxed mb-4">
              As a versatile Fullstack Web Developer, I am proficient in both
              frontend and backend technologies. My expertise includes:
            </p>
            <ul className="list-disc pl-5 text-sm leading-relaxed mb-4">
              <li>
                <strong>Frontend Development:</strong> React, Tailwind CSS,
                HTML5, CSS3, JavaScript (ES6+), Responsive Design, and Web
                Accessibility.
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, Express.js,
                RESTful APIs, and working with databases like MongoDB and SQL.
              </li>
              <li>
                <strong>Version Control & Collaboration:</strong> Git, GitHub,
                and Agile methodologies for project management.
              </li>
              <li>
                <strong>UI/UX Design:</strong> Expertise in creating visually
                appealing and user-friendly interfaces, with experience in Figma
                and Adobe XD.
              </li>
              <li>
                <strong>Email Automation:</strong> Setting up email services
                like NodeMailer for automatic order confirmation and
                customer communication.
              </li>
              <li>
                <strong>DevOps & Hosting:</strong> Experience with Vite,
                deployment on Netlify, and continuous integration.
              </li>
            </ul>

            <h3 className="text-3xl font-bold uppercase mb-2">
              PROJECTS
            </h3>{" "}
            <ul className="list-disc pl-5 text-sm leading-relaxed mb-4">
            <li> <a href="https://www.figma.com/design/CI1JGoJUv5FwLbmctC7vje/GEORGE-WOOD?node-id=0-1&t=bj0U7oyKU4rbAxoz-1">George Wood Figma Dashboard</a> </li>
            <li> <a href="https://georgewoodcasket.com" target="_blank" rel="noopener noreferrer">George Wood Casket and Furniture website</a> </li>
            <li> <a href="http://" target="_blank" rel="noopener noreferrer">Learnable Kids [Collaboration] </a></li>
            </ul>

            <div className="w-full h-auto mb-4 overflow-hidden">
              <img
                src={Profile2}
                alt="George Chiemerie Chime"
                className="w-full h-auto grayscale transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <a
              href="mailto:george@example.com"
              className="inline-block px-4 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-lg mt-4 hover:bg-yellow-400"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Footer section */}
        <div className="mt-6 pt-4 border-t-2 border-black">
          <p className="text-center text-sm">
            Published by George Chiemerie Chime - Fullstack Web Developer and
            Medical Radiographer
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
