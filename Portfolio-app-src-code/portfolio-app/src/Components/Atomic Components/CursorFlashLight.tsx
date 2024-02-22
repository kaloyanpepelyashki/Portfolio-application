import { useEffect, useState } from "react";

export default function FlashlightEffect() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursorPos);

    return () => {
      window.removeEventListener("mousemove", updateCursorPos);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: cursorPos.x + "px",
        top: cursorPos.y + "px",
      }}
    />
  );
}
