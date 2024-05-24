"use client";

import React from "react";
import Title from "../../components/title";
import { HoverEffect } from "@/app/components/card-hover-effect";
import { skills } from "../../lib/data";

export default function Skills() {
  return (
    <div>
      <Title className="text-center text-2xl font-bold mt-20 md:my-0 -rotate-6">
        Skills 🔪
      </Title>
      <HoverEffect items={skills} />
    </div>
  );
}
