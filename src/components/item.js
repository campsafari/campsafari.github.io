import React from "react";
import Markdown from "react-markdown";

function Item({
  title,
  subtitle,
  date,
  details,
  description,
  responsibilities,
  link,
  tools,
}) {
  return (
    <article className="item bottom-space-xlarge">
      <h2 className="item-title">{title}</h2>
      <h3 className="item-subtitle">{subtitle}</h3>
      <div className="item-date">{date}</div>

      {description && (
        <>
          <div className="text-small bottom-space-large print-only">
            <Markdown>{description}</Markdown>
          </div>
        </>
      )}

      {responsibilities && (
        <>
          <h4 className="headline-level-3 bottom-space-medium top-space-medium print-only">
            Responsibilities:
          </h4>
          <div className="text-small bottom-space-large print-only">
            <Markdown>{responsibilities}</Markdown>
          </div>
        </>
      )}
      {tools && (
        <>
          <h4 className="headline-level-3 bottom-space-small print-only">
            Technologies:
          </h4>
          <div className="text-small bottom-space-small print-only">
            {tools}
          </div>
        </>
      )}
      {link && (
        <a className="item-link" href={link}>
          Link
        </a>
      )}
    </article>
  );
}

export default Item;
