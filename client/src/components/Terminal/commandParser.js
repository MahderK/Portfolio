export const commands = {
  help: () => "Available commands: projects, skills, contact, gui, clear",
  projects: () => ({ type: "component", name: "ProjectsView" }),
  skills: () => ({ type: "component", name: "SkillsView" }),
  contact: () => ({ type: "component", name: "ContactView" }),
  gui: () => ({ type: "mode-switch", target: "desktop" }),
  clear: () => ({ type: "clear" }),
};

export function parseCommand(input) {
  const cmd = input.trim().toLowerCase();
  const handler = commands[cmd];
  if (!handler) return { type: "error", message: `command not found: ${cmd}` };
  return handler();
}
