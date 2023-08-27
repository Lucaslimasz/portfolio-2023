"use client";
import { useState } from "react";
import About from "@/components/about";
import Principal from "@/components/principal";
import Title from "@/components/title";
import Projects from "@/components/projects";

import {
  BiLogoBootstrap,
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setPosition({ x: mouseX, y: mouseY });
  };

  const languages = [
    { icon: <BiLogoJavascript size="26" />, name: "Javascript" },
    { icon: <BiLogoTypescript size="26" />, name: "Typescript" },
    { icon: <TbBrandNextjs size="26" />, name: "Nextjs" },
    { icon: <GrReactjs size="26" />, name: "Reactjs" },
    { icon: <GrReactjs size="26" />, name: "React Native" },
    { icon: <BiLogoFirebase size="26" />, name: "Firebase" },
    { icon: <BiLogoNodejs size="26" />, name: "Nodejs" },
    { icon: <BiLogoMongodb size="26" />, name: "MongoDB" },
    { icon: <BiLogoTailwindCss size="26" />, name: "TailwindCSS" },
    { icon: <BiLogoBootstrap size="26" />, name: "Bootstrap" },
  ];

  return (
    <div className="mb-10" onMouseMove={handleMouseMove}>
      <div
        className="square"
        style={{
          position: "fixed",
          left: position.x - 300 + "px",
          top: position.y - 300 + "px",
        }}
      />
      <div className="flex w-full max-w-5xl flex-col py-10 px-4 lg:flex-row lg:py-20 lg:mx-auto lg:gap-10 lg:justify-between">
        <Principal />
        <main className="lg:max-w-lg">
          <About />
        </main>
      </div>
      <section className="w-full max-w-5xl mx-auto px-4 mt-10 mb-20">
        <Title>Habilidades e Experiência</Title>
        <div className="w-full mt-6 gap-4 grid grid-cols-1">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center gap-4">
              {language.icon}
              <p className="text-lg">{language.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Projects />
    </div>
  );
}
