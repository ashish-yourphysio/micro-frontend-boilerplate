import React from "react";
import "./App.css";
//@ts-expect-error
import PButton from "producer/Button";
import CButton from "./Button";

function App() {
  return (
    <div className="App">
      Consumer App
      <React.Suspense fallback="loading">
        <PButton />
        <CButton />
      </React.Suspense>
    </div>
  );
}

export default App;
