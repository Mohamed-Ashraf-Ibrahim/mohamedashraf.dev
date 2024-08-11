import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  const handleScroll = () => {
    window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          onClick={handleScrollUp}
          className="bg-purple-600 fixed h-[50px] w-[50px] rounded-full right-[30px] bottom-[50px]"
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-primary-hover text-xl font-bold"
          />
        </button>
      )}
    </div>
  );
}
