import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
