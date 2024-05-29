"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import { IconType } from "react-icons";

export function ProjectCard({
  title,
  image,
  link,
  icons,
}: {
  title: string;
  image: string;
  link: string;
  icons: IconType[];
}) {
  return (
    <CardContainer className="inter-var md:w-11/12 group">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.8] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="div"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-white flex gap-2"
        >
          {icons.map((Icon, idx) => (
            <Icon key={idx} className="size-10" />
          ))}
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-4 ring-2 group-hover:ring-4 ring-indigo-500 rounded-xl p-1 group-hover:ring-green-500"
        >
          <Image
            src={`/${image}`}
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href={`${link}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border-b-4 border-green-500 transition ease-in-out duration-200 hover:border-indigo-500 shadow-xl hover:shadow-indigo-500"
          >
            Show it →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
