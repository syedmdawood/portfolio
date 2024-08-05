import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=" mb-8 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <h1 className=" text-2xl">Syed M Dawood</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-2 text-2xl mr-2">
        <a
          href="https://www.linkedin.com/in/syed-muhammad-dawood/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/syedmdawood/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/syeddawood._/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
