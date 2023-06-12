import "./App.scss";
import About from "./components/About";
import Features from "./components/Features";
import Header from "./components/Header";
import Story from "./components/Story";
import Tour from "./components/Tour";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tour />
        <Story />
      </main>
    </>
  );
}

export default App;
