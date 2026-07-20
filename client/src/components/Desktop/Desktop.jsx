function Desktop({ onSwitchMode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#16171d",
        color: "#9ca3af",
        fontFamily: "monospace",
        gap: "16px",
      }}
    >
      <p style={{ color: "#c084fc", fontSize: "24px" }}>// desktop mode</p>
      <p>coming soon...</p>
      <button
        onClick={onSwitchMode}
        style={{
          marginTop: "16px",
          padding: "8px 20px",
          background: "transparent",
          border: "1px solid #c084fc",
          color: "#c084fc",
          fontFamily: "monospace",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        &gt; back to terminal
      </button>
    </div>
  );
}

export default Desktop;
