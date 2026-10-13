import "./Faq.css";

function Faq({ eyebrow, title, items, variant = "light", id }) {
  if (!items?.length) return null;
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      className={`faq faq--${variant}`}
      aria-labelledby={headingId}
    >
      <div className="faq__inner">
        {eyebrow && <span className="faq__eyebrow">{eyebrow}</span>}
        <h2 id={headingId} className="faq__title">{title}</h2>
        <div className="faq__list">
          {items.map(({ q, a }) => (
            <details key={q} className="faq__item">
              <summary className="faq__question">
                <span>{q}</span>
                <svg className="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="faq__answer">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
