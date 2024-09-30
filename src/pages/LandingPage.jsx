import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import ProfileImage from "../assets/user profile 1.jpg";

const LandingPage = () => {
  return (
    <div className="bg-yellow-500 min-h-screen flex justify-center items-center">
      {/* Main Card with hover flip effect */}
      <div className="card-container relative w-[280px] h-[400px] rounded-lg shadow-xl transition-transform duration-700">
        {/* Front Side of the Card */}
        <div className="card-face card-front flex flex-col justify-center items-center rounded-lg">
          <img
            src={ProfileImage}
            alt="George Chiemerie Chime"
            className="w-32 rounded-lg mb-4 "
          />
          <div className="text-center">
            <h1 className="text-lg font-bold">GEORGE CHIEMERIE CHIME</h1>
            <p className="text-xs font-medium text-yellow-500">Full Stack Web Developer | UI/UX Designer</p>
            <p className="text-xs ">
              B.Sc. Medical Radiography and  <br />Radiological Sciences
            </p>
          </div>
          
          
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/Oranyelu" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/george-chime-a927881b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/chime.george?igsh=MXJjbWNkZDc1cjBiOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/oranyelu_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          <Link to="/about" className='pt-9'>Go to main page &rarr; </Link>
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
            <a href="https://github.com/Oranyelu" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/george-chime-a927881b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/chime.george?igsh=MXJjbWNkZDc1cjBiOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/oranyelu_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          <Link to="/about" className='pt-10'>Go to main page &rarr; </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
