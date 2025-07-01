import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import gsap from "gsap";
import Navbar from "./Components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Navbar />
      </main>
    </>
  );
}

export default App;
