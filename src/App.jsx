import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import "./App.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh]  flex-center">
        <h1 className="text-3xl text-indigo-300">Hello World</h1>
      </div>
    </>
  );
}

export default App;
