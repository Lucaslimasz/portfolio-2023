"use client";
import Title from "./title";

import {
  BiLogoBootstrap,
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { SiChakraui } from "react-icons/si";

export default function Experience() {
  const languages = [
    { icon: <GrReactjs size="26" />, name: "Reactjs" },
    { icon: <GrReactjs size="26" />, name: "React Native" },
    { icon: <TbBrandNextjs size="26" />, name: "Nextjs" },
    { icon: <BiLogoTypescript size="26" />, name: "Typescript" },
    { icon: <BiLogoJavascript size="26" />, name: "Javascript" },
    { icon: <BiLogoFirebase size="26" />, name: "Firebase" },
    { icon: <AiOutlineGithub size="26" />, name: "Git" },
    { icon: <BiLogoNodejs size="26" />, name: "Nodejs" },
    { icon: <BiLogoMongodb size="26" />, name: "MongoDB" },
    { icon: <BiLogoTailwindCss size="26" />, name: "TailwindCSS" },
    { icon: <BiLogoBootstrap size="26" />, name: "Bootstrap" },
    { icon: <SiChakraui size="26" />, name: "ChakraUI" },
    { icon: <BiLogoFigma size="26" />, name: "Figma" },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 mt-10 mb-20">
      <Title>Habilidades e Experiência</Title>
      <div className="w-full mt-6 gap-4 grid grid-cols-2 pd:grid pd:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {languages.map((language, index) => (
          <div key={index} className="flex items-center gap-2 pd:gap-4">
            {language.icon}
            <p className="text-sm pd:text-lg">{language.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
