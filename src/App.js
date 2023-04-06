import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
