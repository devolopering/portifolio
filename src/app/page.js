import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
   
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4 mt-20">
        <HeroSection/>
        <AchievementsSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
    </div>
  );
}
