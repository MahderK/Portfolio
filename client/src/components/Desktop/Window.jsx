function Window({ app, onClose }) {
  const Content = app.component;

  return (
    <div className="window">
      <div className="window-header">
        <span className="window-title">{app.label}</span>
        <button className="window-close" onClick={() => onClose(app.id)}>
          ×
        </button>
      </div>
      <div className="window-content">
        <Content />
      </div>
    </div>
  )
}

export default Window;
