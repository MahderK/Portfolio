import { contact } from "./contact";

function ContactView() {
  return (
    <div className="contact">
      <p className="contact-intro">// let's build something</p>
      {contact.map((c) => (
        <div key={c.label} className="contact-row">
          <span className="contact-label">{c.label}:</span>
          <a
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="contact-value"
          >
            {c.value}
          </a>
        </div>
      ))}
    </div>
  );
}

export default ContactView;
