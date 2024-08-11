import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { socialLinks } from "../Data";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { github, twitter, linkedin } = socialLinks;
  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-7 h-[70 px] z-30">
      <div className="container mx-auto flex justify-between h-full items-center">
        {/* LOGO  */}

        <a
          href="#home"
          className="text-white text-2xl font-bold lg:text-2xl uppercase "
        >
          Mohamed Ashraf
        </a>

        {/* START NAV  */}
        <nav>
          {/* MOBILE NAV  */}
          <button
            className="lg:hidden cursor-pointer text-white text-3xl"
            onClick={handleToggleMenu}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-4xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          {/* NAV LINKS  */}
          <ul
            className={`fixed w-full top-[70px] left-0 right-0 mx-2 flex flex-col ${isOpen ? "max-h-[500px] p-4" : "max-h-0"} lg:max-h-none lg:p-0 lg:flex-row gap-4 lg:relative lg:top-0 lg:border-none lg:h-full overflow-hidden transition-all duration-400 font-secondary bg-black lg:bg-transparent`}
          >
            <li className="text-primary-title text-md mx-2 hover:text-primary-hover transition-all duration-100">
              <a href="#hero">Home</a>
            </li>
            <li className="text-primary-title text-md mx-2 hover:text-primary-hover transition-all duration-100">
              <a href="#about">About</a>
            </li>
            <li className="text-primary-title text-md mx-2 hover:text-primary-hover transition-all duration-100">
              <a href="#tech-stack">Tech Stack</a>
            </li>
            <li className="text-primary-title text-md mx-2 hover:text-primary-hover transition-all duration-100">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-primary-title text-md mx-2 hover:text-primary-hover transition-all duration-100">
              <a href="#contacts">Contacts</a>
            </li>

            {/* SOCIALS ICONS */}
            <div className="socials">
              <a href={github} target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-primary-title mx-3 text-lg hover:text-primary-hover transition-all duration-100"
                />
              </a>
              <a href={twitter} target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-primary-title mx-3 text-lg hover:text-primary-hover transition-all duration-100"
                />
              </a>
              <a href={linkedin} target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-primary-title mx-3 text-lg hover:text-primary-hover transition-all duration-100"
                />
              </a>
            </div>
          </ul>
          {/* END NAV LINKS  */}
        </nav>
        {/* END NAV  */}
      </div>
    </header>
  );
}
