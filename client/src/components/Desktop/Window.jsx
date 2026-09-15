import { useState, useRef } from "react";

function Window({ app, onClose }) {
  const Content = app.component;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 520, h: 380 });
  const startRef = useRef(null);

  const startDrag = (e) => {
    startRef.current = {
      type: "move",
      startX: e.clientX,
      startY: e.clientY,
      originX: pos.x,
      originY: pos.y,
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const startResize = (e) => {
    e.stopPropagation();
    startRef.current = {
      type: "resize",
      startX: e.clientX,
      startY: e.clientY,
      originW: size.w,
      originH: size.h,
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onMove = (e) => {
    const s = startRef.current;
    if (!s) return;
    if (s.type === "move") {
      setPos({
        x: s.originX + (e.clientX - s.startX),
        y: s.originY + (e.clientY - s.startY),
      });
    } else {
      setSize({
        w: Math.max(320, s.originW + (e.clientX - s.startX)),
        h: Math.max(200, s.originH + (e.clientY - s.startY)),
      });
    }
  };

  const onUp = () => {
    startRef.current = null;
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
  };

  return (
    <div className="window"
      style={{
        left: `calc(50% + ${pos.x}px)`,
        top: `calc(50% + ${pos.y}px)`,
        width: size.w,
        height: size.h,
      }}>
      <div className="window-header" onMouseDown={startDrag}>
        <span className="window-title">{app.label}</span>
        <button className="window-close" onClick={() => onClose(app.id)} onMouseDown={(e) => e.stopPropagation()}>
          ×
        </button>
      </div>
      <div className="window-content">
        <Content />
      </div>
      <div className="window-resize" onMouseDown={startResize} />
    </div>
  );
}

export default Window;
