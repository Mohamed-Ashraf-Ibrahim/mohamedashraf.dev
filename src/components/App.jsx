import "../index.css";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Technologies } from "./Technologies";
import { Tools } from "./Tools";
import { Projects } from "./Projects";
import { ContactUs } from "./ContactUs";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const renderIcons = (icons) =>
    icons.map((icon) => (
      <img
        src={icon.src}
        className="w-[60px] lg:w-[100px] hover:scale-110 transition-all duration-200"
        alt={`${icon.name} logo`}
        key={icon.name}
      />
    ));
  return (
    <div className="container mx-auto p-4 relative">
      <Nav />
      <Hero />
      <About />
      <Technologies onRenderIcons={renderIcons} />
      <Tools onRenderIcons={renderIcons} />
      <Projects />
      <ContactUs />
      {/* <Footer /> */}
      {/* scrollYProgress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-purple-500 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}

export default App;
