import React from "react";
import { cn } from "../utils/cn";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-3xl font-bold", className)}>
      <div className={`inline-block group`}>
        {children}
        <div className="w-48 h-2 bg-green-500 rounded-full translate-x-2"></div>
        <div className="w-48 h-2 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
}
