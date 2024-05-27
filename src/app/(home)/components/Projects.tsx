"use client";

import Title from "@/app/components/title";
import React from "react";
import { projects } from "../../lib/data";
import { cn } from "@/app/utils/cn";
import { ProjectCard } from "../../components/project-card";

export default function Projects() {
  return (
    <div>
      <Title className="mt-20 rotate-6 text-center">Projects 🎨</Title>

      <div
        className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-14")}
      >
        {projects.map((item, idx) => (
          <div key={idx}>
            <ProjectCard
              title={item.title}
              image={item.image}
              link={item.link}
              icons={item.icons}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
