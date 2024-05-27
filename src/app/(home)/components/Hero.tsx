import MagicButton from "@/app/components/magic-button";
import Title from "@/app/components/title";
import React from "react";
import { FaBullhorn } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between h-[87vh] md:h-[70vh]">
      <div className="space-y-8 w-full text-center md:text-left">
        <h2 className="font-bold text-4xl lg:text-7xl">
          Nice to meet you! 👋🏾
          <br /> I&apos;m Nametissa
        </h2>
        <p>
          Based in Cameroon, I&apos;m a Fullstack developer passionate about{" "}
          <br />
          building a modern web application that users love.
        </p>
        <Title className="hover:shadow-2xl rounded-xl hover:shadow-indigo-500 inline-block">
          <a
            href="mailto:avaikamarcel@gmail.com"
            className=" group-hover:text-green-500 group-hover:cursor-pointer"
          >
            Contact Me 📬
          </a>
        </Title>
      </div>

      <div className="translate-x-4 md:translate-x-10 xl:-translate-x-10 h-[50%] ">
        <div className="flex justify-center items-center md:items-start scale-50 md:scale-[0.85] lg:scale-100">
          <div className="-rotate-[25deg]">
            <div className="space-y-4 -space-x-8">
              <div className="flex gap-4 mx-auto">
                <div className="size-32 bg-green-500 rounded-xl"></div>
                <div className="size-32 bg-indigo-500 rounded-full"></div>
              </div>
              <div className="flex gap-4">
                <div className="size-32 bg-indigo-500 rounded-xl"></div>
                <div className="size-32 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <MagicButton className="-translate-y-20 flex justify-center -translate-x-4 md:justify-start lg:-translate-x-20 ">
          <span className="flex gap-2 items-center">
            <FaBullhorn className="text-indigo-300" /> Available for Work
          </span>
        </MagicButton>
      </div>
    </div>
  );
}
