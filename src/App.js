import "./App.scss";
import About from "./components/About";
import Features from "./components/Features";
import Header from "./components/Header";
import Tour from "./components/Tour";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tour />
      </main>
    </>
  );
}

export default App;
