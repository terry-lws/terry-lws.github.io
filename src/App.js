import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
// import LandingSection from "./components/LandingSection";
//import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
// import { AlertProvider } from "./context/alertContext";
// import Alert from "./components/Alert";
//import SkillsSection from "./components/SkillsSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BioSection from "./components/BioSection";
//import DropdownMenu from "./components/DropdownMenu";
//import AltHeader from "./components/AltHeader"
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<BioSection />} />
              <Route path="/resume" element={<ResumeSection />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/contact" element={<ContactSection />} />
            </Routes>
            <ScrollToTopButton />
          </main>
          <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
