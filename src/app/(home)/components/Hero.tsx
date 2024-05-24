import MagicButton from "@/app/components/magic-button";
import React from "react";
import { FaBullhorn } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between h-[87vh]">
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
        <div className="inline-block group">
          <a
            href="mailto:avaikamarcel@gmail.com"
            className="text-xl font-bold group-hover:text-green-500"
          >
            Contact Me 📬
          </a>
          <div className="w-32 h-2 bg-green-500 rounded-full translate-x-2"></div>
          <div className="w-32 h-2 bg-indigo-500 rounded-full"></div>
        </div>
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