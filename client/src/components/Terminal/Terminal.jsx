import { useState } from "react";
import { parseCommand } from "./commandParser";
import ProjectsView from "../content/ProjectsView";
import SkillsView from "../content/SkillsView";
import ContactView from "../content/ContactView";

const componentMap = {
  ProjectsView,
  SkillsView,
  ContactView,
};

function Terminal({ onSwitchMode }) {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = parseCommand(input);

    if (result.type === "mode-switch") {
      onSwitchMode();
      return;
    }
    if (result.type === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [...prev, { command: input, result }]);
    setInput("");
  };

  return (
    <div className="terminal">
      <div className="history">
        {history.map((entry, i) => (
          <div key={i}>
            <p>&gt; {entry.command}</p>
            {entry.result.type === "component" ? (
              (() => {
                const Comp = componentMap[entry.result.name];
                return <Comp />;
              })()
            ) : (
              <p>{entry.result.message}</p>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <span className="prompt">&gt;&nbsp;</span>
          <div className="input-wrapper">
            {/* The real input is hidden but functional */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoFocus
              className="terminal-input"
            />
            {/* The visual fake input that correctly sizes to the text */}
            <div className="fake-input">
              <span>{input}</span>
              {focused && <span className="block-cursor">█</span>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Terminal;
