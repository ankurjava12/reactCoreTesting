import { useState } from "react";
import "./App.css";
import Index from "./Components/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <Index />
    </>
  );
}

export default App;
