import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar({ className }: { className?: string }) {
  const links = [
    { name: "GitHub", link: "https://github.com/AnonX9", Icon: FaGithub },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/marcel-avaika/",
      Icon: FaLinkedin,
    },
  ];
  return (
    <div className={`${className}`}>
      <h1 className="text-3xl font-bold underline decoration-green-500 underline-offset-8 -rotate-3">
        Nametissa 👨🏾‍💻
      </h1>
      <div className="flex gap-3">
        {links.map((link) => (
          <a key={link.name} href={link.link} target="_blank">
            <link.Icon className="size-6 hover:scale-150 transition ease-in-out duration-300 shadow-lg shadow-green-500 hover:shadow-indigo-500 rounded-md" />
          </a>
        ))}
      </div>
    </div>
  );
}
