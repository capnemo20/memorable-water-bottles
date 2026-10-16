import { Suspense, useState } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("../public/bottles.json")
.then(res=>res.json())
// const bottlesPromise2 = fetch("https://raw.githubusercontent.com/capnemo20/memorable-bottle-data/refs/heads/main/bottle-data").then(res=>res.json())

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
