import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <WorkExp />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
