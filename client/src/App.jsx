import { useState } from "react";
import Terminal from "./components/Terminal/Terminal";
import Desktop from "./components/Desktop/Desktop";

function App() {
  const [mode, setMode] = useState("terminal"); // "terminal" | "desktop"

  return (
    <>
      {mode === "terminal" && (
        <Terminal onSwitchMode={() => setMode("desktop")} />
      )}
      {mode === "desktop" && (
        <Desktop onSwitchMode={() => setMode("terminal")} />
      )}
    </>
  );
}

export default App;
