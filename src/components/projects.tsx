"use client";
import Image from "next/image";
import Title from "./title";
import { useEffect, useState } from "react";

interface IProjects {
  id: string;
  description: string;
  url: string;
  languages_url: string;
  name: string;
  topics: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<IProjects[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://api.github.com/users/Lucaslimasz/repos?per_page=200",
        {
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );
      const res: IProjects[] = await data.json();
      setProjects(
        res.flatMap((item) => {
          if (!item.topics.includes("portfolio")) return [];

          return {
            ...item,
            topics: item.topics.filter((topic) => topic !== "portfolio"),
          };
        })
      );
    })();
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto px-4">
      <Title>Projetos</Title>
      <div className="flex gap-4 mt-4 overflow-x-hidden">
        {projects?.map((item) => {
          return (
            <div
              key={item.id}
              className="min-w-[340px] bg-[#1C0425] border-[#2C043C] border-2 rounded-xl flex flex-col justify-between"
            >
              <div className="pt-8 px-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <div className="flex text-xs mt-6 flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <p
                      key={topic}
                      className="py-1 px-3 bg-[#530072] rounded-full"
                    >
                      {topic}
                    </p>
                  ))}
                </div>
                <p className="text-sm my-6">
                  {item.description?.length >= 160
                    ? item.description?.substring(0, 160) + "..."
                    : item.description}
                </p>
              </div>
              <Image
                src="https://user-images.githubusercontent.com/76819323/211413174-84698301-e65d-4251-87e3-c018ba9f3326.png"
                alt="project"
                width={150}
                height={150}
                className="w-full h-[200px] rounded-b-lg"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
