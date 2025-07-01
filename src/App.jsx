import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <div className="h-dvh bg-black"></div>
      </main>
    </>
  );
}

export default App;
