import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-black animate-move-up">
      <div className="w-10/12 max-w-7xl mx-auto h-auto  dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2]">
        <Navbar className="flex justify-between py-5 md:py-14 animate-move-down" />
        <Hero />
        <Skills />
        <Projects />
        <div className="flex flex-col justify-center items-center">
          <div className="w-full md:w-7/12 lg:w-5/12 h-5 shadow-xl mb-5 shadow-green-500"></div>

          <Navbar className="flex flex-col justify-center items-center gap-10 mb-5 md:mb-10" />
        </div>
      </div>
    </div>
  );
}
