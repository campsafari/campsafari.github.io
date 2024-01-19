import { useState } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T, expanded: boolean) => JSX.Element;
  className?: string;
};

function ItemGrid<T>({
  items,
  renderItem,
  className = "grid grid-cols-1 md:grid-cols-4 gap-8 print:grid-cols-1",
}: Props<T>) {
  const [expanded] = useState(false);

  return (
    <div className={className}>
      {items.map((item) => (
        <>{renderItem(item, expanded)}</>
      ))}
    </div>
  );
}

export default ItemGrid;
