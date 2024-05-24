import { GridBackground } from "../components/grid-background";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-black">
      <div className="w-10/12 max-w-7xl mx-auto h-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
