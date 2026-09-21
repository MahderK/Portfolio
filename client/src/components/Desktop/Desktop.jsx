import { useState, useRef } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import ProjectsView from "../content/ProjectsView";
import SkillsView from "../content/SkillsView";
import ContactView from "../content/ContactView";
import TabletapView from "../content/TabletapView";
import CvView from "../content/CvView";

const apps = [
  { id: "contact", label: "Contact", icon: `${import.meta.env.BASE_URL}contact.png`, component: ContactView },
  { id: "projects", label: "Projects", icon: `${import.meta.env.BASE_URL}projects.png`, component: ProjectsView },
  { id: "skills", label: "Skills", icon: `${import.meta.env.BASE_URL}skills.png`, component: SkillsView },
  { id: "tabletap", label: "TableTap", icon: `${import.meta.env.BASE_URL}tabletap.png`, component: TabletapView },
  { id: "cv", label: "CV", icon: `${import.meta.env.BASE_URL}contact.png`, component: CvView },
];

const defaultPositions = {
  contact: { x: 40, y: 40 },
  projects: { x: 140, y: 40 },
  skills: { x: 150, y: 140 },
  tabletap: { x: 40, y: 140 },
  cv: { x: 40, y: 240 },
};

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [positions, setPositions] = useState(defaultPositions);
  const [selection, setSelection] = useState(null);
  const startRef = useRef(null);

  const openApp = (app) => {
    if (openWindows.find((w) => w.id === app.id)) return;
    setOpenWindows((prev) => [...prev, app]);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const updatePosition = (id, pos) => {
    setPositions((prev) => ({ ...prev, [id]: pos }));
  }

  const onDesktopMouseDown = (e) => {
    if (e.target !== e.currentTarget) return;
    startRef.current = { x: e.clientX, y: e.clientY };
    setSelection({ x: e.clientX, y: e.clientY, w: 0, h: 0 });
    window.addEventListener("mousemove", onDesktopMouseMove);
    window.addEventListener("mouseup", onDesktopMouseUp);
  };

  const onDesktopMouseMove = (e) => {
    const s = startRef.current;
    if (!s) return;
    setSelection({
      x: Math.min(s.x, e.clientX),
      y: Math.min(s.y, e.clientY),
      w: Math.abs(e.clientX - s.x),
      h: Math.abs(e.clientY - s.y),
    });
  };

  const onDesktopMouseUp = () => {
    startRef.current = null;
    setSelection(null);
    window.removeEventListener("mousemove", onDesktopMouseMove);
    window.removeEventListener("mouseup", onDesktopMouseUp);

  }

  return (
    <div className="desktop" onMouseDown={onDesktopMouseDown}>
      <div className="task-bar">
        <div className="start-menu">
          <p className="start-name">Start</p>
        </div>
      </div>
      <div className="desktop-icons">
        {apps.map((app) => (
          <DesktopIcon key={app.id} app={app} onOpen={openApp} position={positions[app.id]} onMove={updatePosition} />
        ))}
      </div>
      {openWindows.map((win) => (
        <Window key={win.id} app={win} onClose={closeWindow} />
      ))}
      {selection && selection.w > 0 && selection.h > 0 && (
        <div
          className="selection-box"
          style={{
            left: selection.x,
            top: selection.y,
            width: selection.w,
            height: selection.h,
          }}
        />
      )}
    </div>
  );
}

export default Desktop;
