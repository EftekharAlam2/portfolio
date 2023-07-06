import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="mb-2">Email: eftekharans0@gmail.com</p>
            <p>Phone: +8801860304023</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4 hover:text-gray-400"
            >
              <div className="w-10 h-full flex items-center justify-center">
                <BsFacebook size={24} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4 hover:text-gray-400"
            >
              <div className="w-10 h-full flex items-center justify-center">
                <BsLinkedin size={24} />
              </div>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4 hover:text-gray-400"
            >
              <div className="w-10 h-full flex items-center justify-center">
                <BsGithub size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
