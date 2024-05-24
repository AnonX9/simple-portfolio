import React from "react";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <div className={`inline-block group`}>
        {children}
        <div className="w-32 h-2 bg-green-500 rounded-full translate-x-2"></div>
        <div className="w-32 h-2 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
}
