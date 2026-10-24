import Navbar from "./navbar/navbar";
import Introduction from "./introduction/introduction";
import AboutMe from "./about me/aboutme";
import Projects from "./projects/projects";
import Skills from "./skills/skills"
import ContactMe from "./contact me/contactme";

function App() {
  return (
    <div>
     <Navbar />
     <Introduction />
     <AboutMe />
     <Projects />
     <Skills/>
     <ContactMe />
    </div>
  );
}

export default App;
