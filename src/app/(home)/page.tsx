import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-black">
      <div className="w-10/12 max-w-7xl mx-auto h-auto">
        <Navbar />
        <Hero />
        <Skills />
      </div>
    </div>
  );
}
