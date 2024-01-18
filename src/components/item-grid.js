import React from "react";

function ItemGrid({ title, items, renderItem, classes = "" }) {
  return (
    <section className={`section bottom-space-xlarge ${classes}`}>
      <header className="headline-level-1">{title}</header>
      <div className={"item-grid"}>
        {items.map((item, index) => (
          <div className="cell">{renderItem(item, index)}</div>
        ))}
      </div>
    </section>
  );
}

export default ItemGrid;
