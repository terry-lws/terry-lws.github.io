import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import SkillsSection from "./components/SkillsSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BioSection from "./components/BioSection"
import DropdownMenu from "./components/DropdownMenu";
import AltHeader from "./components/AltHeader"
import ResumeSection from "./components/ResumeSection";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          {/* <AltHeader /> */}
          <Header />
          {/* <DropdownMenu/> */}
          <LandingSection />
          <BioSection />
          <ResumeSection />
          {/* <SkillsSection />
          <ProjectsSection /> */}
          <ScrollToTopButton />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
