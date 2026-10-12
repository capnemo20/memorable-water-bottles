import { Suspense, useState } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("../public/bottles.json")
.then(res=>res.json())

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Buy Awesome Water Bottles</h1>
      <Suspense fallback={<div>Bottles AreLoading...</div>}>
        <Bottles bottlesPromise = {bottlesPromise}>

        </Bottles>
      </Suspense>
    </>
  );
}

export default App;
