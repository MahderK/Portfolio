function DesktopIcon({ app, onOpen }) {
  return (
    <button className="desktop-icon" onDoubleClick={() => onOpen(app)}>
      <img className="desktop-icon-img" src={app.icon} alt={app.label} />
      <span className="desktop-icon-label">{app.label}</span>
    </button>
  )
}

export default DesktopIcon;
