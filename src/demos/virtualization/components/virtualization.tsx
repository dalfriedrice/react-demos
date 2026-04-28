import { useState } from "react";

const TOTAL_ITEMS = 10000;
const CONTAINER_HEIGHT = 500;
const ITEM_HEIGHT = 40;

export const Virtualization = () => {
  const [scrollTop, setScrollTop] = useState(0);
  let startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  let visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);
  let endIndex = startIndex + visibleCount;
  const totalHeight = TOTAL_ITEMS * ITEM_HEIGHT;

  const items = [];

  for (let i = startIndex; i < endIndex; i++) {
    items.push(
      <div key={i} style={{ height: ITEM_HEIGHT, backgroundColor: "green" }}>
        Item {i}
      </div>
    );
  }

  return (
    <div
      style={{
        height: CONTAINER_HEIGHT,
        backgroundColor: "red",
        overflowY: "auto",
      }}
      onScroll={(e: React.UIEvent<HTMLDivElement>) => setScrollTop((e.currentTarget as HTMLDivElement).scrollTop)}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {/* Visible window */}
        <div
          style={{
            position: "absolute",
            top: startIndex * ITEM_HEIGHT,
            width: "100%",
          }}
        >
          {items}
        </div>
      </div>
      {/* <div
        style={{
          height: CONTAINER_HEIGHT,
          backgroundColor: "yellow",
          position: "absolute",
        }}
      >
        {items}
      </div> */}
    </div>
  );
}
