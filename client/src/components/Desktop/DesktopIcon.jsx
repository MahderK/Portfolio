import { useRef } from "react";
function DesktopIcon({ app, onOpen, position, onMove }) {
  const startRef = useRef(null);

  const onMouseDown = (e) => {
    e.preventDefault();
    startRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: position.x,
      originY: position.y,
      moved: false,
    };
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", onDragEnd);
  };

  const onDrag = (e) => {
    const s = startRef.current;
    if (!s) return;
    s.moved = true;
    onMove(app.id, {
      x: s.originX + (e.clientX - s.startX),
      y: s.originY + (e.clientY - s.startY),
    });
  };

  const onDragEnd = () => {
    const s = startRef.current;
    window.removeEventListener("mousemove", onDrag);
    window.removeEventListener("mouseup", onDragEnd);
    startRef.current = null;
    if (s && !s.moved) onOpen(app);
  };

  return (
    <div
      className="desktop-icon"
      style={{ position: "absolute", left: position.x, top: position.y }}
      onMouseDown={onMouseDown}
    >
      <img className="desktop-icon-img" src={app.icon} alt={app.label} />
      <span className="desktop-icon-label">{app.label}</span>
    </div>
  );
}

export default DesktopIcon;
