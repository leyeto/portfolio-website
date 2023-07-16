import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LoomPlayer from "./components/LoomPlayer/LoomPlayer";
import Projects from "./components/Projects/Projects";
import Wakatime from "./components/Wakatime/Wakatime";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <LoomPlayer />
        <AboutMe />
        <Wakatime />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
