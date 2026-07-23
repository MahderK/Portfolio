import { useState, useEffect } from "react";

const bootMessage = [
  "[BIOS] POST check ............... OK",
  "[MEM] Loading 640K base memory ............... FAIL",
  "     RETRYING ............... FAIL",
  "     RETRYING ............... FAIL",
  "     RETRYING ............... OK",
  "[NET] Initializing uplink ............... OK",
  "[SYS] Checking functionality ............ FAIL",
  "     RETRYING ............... OK",
  "[SYS] MAHDER TERMINAL v1.0.1 - UESC",
  "[AUTH] Guest access granted",
];

function BootSequence({ onComplete }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= bootMessage.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }

    const fullLine = bootMessage[currentLineIndex];

    if (currentCharIndex < fullLine.length) {
      const timer = setTimeout(
        () => {
          setCurrentCharIndex((prev) => prev + 1);
        },
        Math.random() * 30 + 10,
      );
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, fullLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="terminal p-4" onClick={handleSkip}>
      {displayedLines.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}

      {currentLineIndex < bootMessage.length && (
        <div className="flex whitespace-pre-wrap">
          <span>
            {bootMessage[currentLineIndex].slice(0, currentCharIndex)}
          </span>
          <span className="cursor">█</span>
        </div>
      )}
    </div>
  );
}

export default BootSequence;
