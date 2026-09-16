import { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import ProjectsView from "../content/ProjectsView";
import SkillsView from "../content/SkillsView";
import ContactView from "../content/ContactView";
import TabletapView from "../content/TabletapView";

const apps = [
  { id: "projects", label: "Projects", icon: "#documentation-icon", component: ProjectsView },
  { id: "tabletap", label: "TableTap", icon: `${import.meta.env.BASE_URL}tabletap.png`, component: TabletapView },
  { id: "skills", label: "Skills", icon: "#social-icon", component: SkillsView },
  { id: "contact", label: "Contact", icon: `${import.meta.env.BASE_URL}icons8-github-64.png`, component: ContactView },
];

function Desktop() {
  const [openWindows, setOpenWindows] = useState([]);

  const openApp = (app) => {
    if (openWindows.find((w) => w.id === app.id)) return;
    setOpenWindows((prev) => [...prev, app]);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {apps.map((app) => (
          <DesktopIcon key={app.id} app={app} onOpen={openApp} />
        ))}
      </div>
      {openWindows.map((win) => (
        <Window key={win.id} app={win} onClose={closeWindow} />
      ))}
    </div>
  );
}

export default Desktop;
