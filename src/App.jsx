import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import ProfileImage from "./assets/user profile 1.jpg";

const App = () => {
  return (
    <div className="bg-yellow-500 min-h-screen flex justify-center items-center">
      {/* Main Card with hover flip effect */}
      <div className="card-container relative w-[280px] h-[400px] rounded-lg shadow-xl transition-transform duration-700">
        {/* Front Side of the Card */}
        <div className="card-face card-front flex flex-col justify-center items-center rounded-lg">
          <img
            src={ProfileImage}
            alt="George Chiemerie Chime"
            className="w-32 h-32 rounded-lg mb-4"
          />
          <div className="text-center">
            <h1 className="text-lg font-bold">GEORGE CHIEMERIE CHIME</h1>
            <p className="text-xs font-medium">Full Stack Web Developer | UI/UX Designer</p>
            <p className="text-xs">
              B.Sc. Medical Radiography and Radiological Sciences
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          
          {/* CTA Button */}
          <a
            href="mailto:george@example.com"
            className="inline-block px-4 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-lg mt-4 hover:bg-yellow-400"
          >
            Get in Touch
          </a>
        </div>

        {/* Back Side of the Card */}
        <div className="card-face card-back flex flex-col justify-center items-center rounded-lg">
          <h2 className="text-xl font-bold mb-2">Hello, I'm George!</h2>
          <p className="text-sm text-center px-4">
            I’m a Full-stack Web Developer and an Imaging Scientist, solving
            digital problems one pixel at a time...
          </p>
           {/* Social Media Icons */}
           <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
