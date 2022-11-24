import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import UpButton from "./components/UpButton";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
      <UpButton />
    </div>
  );
}

export default App;
