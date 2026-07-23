import { useState } from "react";
import Terminal from "./components/Terminal/Terminal";
import BootSequence from "./components/Terminal/BootSequence";
import Desktop from "./components/Desktop/Desktop";

function App() {
  const [mode, setMode] = useState("booting"); // "terminal" | "desktop"

  return (
    <>
      {mode === "booting" && (
        <BootSequence onComplete={() => setMode("terminal")} />
      )}
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
