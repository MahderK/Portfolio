import { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import ProjectsView from "../content/ProjectsView";
import SkillsView from "../content/SkillsView";
import ContactView from "../content/ContactView";
import TabletapView from "../content/TabletapView";

const apps = [
  { id: "contact", label: "Contact", icon: `${import.meta.env.BASE_URL}contact.png`, component: ContactView },
  { id: "projects", label: "Projects", icon: `${import.meta.env.BASE_URL}projects.png`, component: ProjectsView },
  { id: "skills", label: "Skills", icon: `${import.meta.env.BASE_URL}skills.png`, component: SkillsView },
  { id: "tabletap", label: "TableTap", icon: `${import.meta.env.BASE_URL}tabletap.png`, component: TabletapView },
];

const defaultPositions = {
  contact: { x: 40, y: 40 },
  projects: { x: 140, y: 40 },
  skills: { x: 150, y: 140 },
  tabletap: { x: 40, y: 140 },
};

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);
  const [positions, setPositions] = useState(defaultPositions);

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

  return (
    <div className="desktop">
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
    </div>
  );
}

export default Desktop;
