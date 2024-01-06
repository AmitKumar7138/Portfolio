import "./app.scss"
import Contacts from "./components/contacts/Contacts";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Mystory from "./components/mystory/Mystory";


const App = () => {
  return (<div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>

    <section id="Skills">
      <Skills />
    </section>

    <section id="Recent Works">
      <Parallax type="projects" />
    </section>

    <Projects />

    <section id="About Me">
      <Parallax type="aboutme" />
    </section>

    <section id="Education">
      <Education />
    </section>

    <section id="MyStory">
      <Mystory />
    </section>

    <section id="Contacts">
      <Contacts />
    </section>

  </div>
  );
};

export default App;
