// import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cocktails from "./Components/Cocktails";
import About from "./Components/About";
import Art from "./Components/Art";
import Menu from "./Components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        {/* <div className="h-dvh bg-black"></div> */}
        <Cocktails />
        <About />
        <Art />
        <Menu />
      </main>
    </>
  );
}

export default App;
