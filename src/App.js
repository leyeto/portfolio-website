import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
