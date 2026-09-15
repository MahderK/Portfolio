import { useState, useEffect } from "react";
import ProjectsView from "../content/ProjectsView";
import SkillsView from "../content/SkillsView";
import ContactView from "../content/ContactView";

const componentMap = {
  ProjectsView,
  SkillsView,
  ContactView,
};

function DesktopIcon({ app, onOpen }) {
  return (
    <button className="desktop-icon" onDoubleClick={() => onOpen(app)}>
      <svg className="desktop-icon-img">
        <use href={app.icon} />
      </svg>
      <span className="desktop-icon-label">{app.label}</span>
    </button>
  )
}

export default DesktopIcon;
