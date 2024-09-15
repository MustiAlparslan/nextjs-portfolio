import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Header from "../components/header";
import Social from "../components/social";
import Aboutme from "../components/aboutme";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";
import WarningMessage from "../components/warning";

export default function Home() {

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      {/* Profil ve Temel Bilgiler */}
      <Header />
      {/* Sosyal Medya Bağlantıları */}
      <Social />
      {/* Hakkımda Bölümü */}
      <Aboutme />
      {/* Beceriler */}
      <Skills />
      {/* Projeler */}
      <Projects />
      <WarningMessage />
      {/* İletişim */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

