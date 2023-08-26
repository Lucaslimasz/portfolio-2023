"use client";
import About from "@/components/about";
import Principal from "@/components/principal";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setPosition({ x: mouseX, y: mouseY });
  };

  return (
    <div
      className="
        flex w-full max-w-5xl min-h-screen flex-col py-10 px-4 lg:flex-row lg:py-20 lg:mx-auto lg:gap-10 lg:justify-between
      "
      onMouseMove={handleMouseMove}
    >
      <div
        className="square"
        style={{
          left: position.x - 300 + "px",
          top: position.y - 300 + "px",
        }}
      ></div>
      <Principal />
      <main className="lg:max-w-lg">
        <About />
      </main>
    </div>
  );
}
