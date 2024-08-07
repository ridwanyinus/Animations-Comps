"use client";
import React, { useEffect, useState, useRef } from "react";

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [blurPosition, setBlurPosition] = useState({ x: 0, y: 0 });
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });

      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }

      blurTimeoutRef.current = setTimeout(() => {
        setBlurPosition({ x: event.clientX, y: event.clientY });
      }, 5); // Adjust delay as needed
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="cursorBlur"
        style={{
          left: `${blurPosition.x}px`,
          top: `${blurPosition.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
