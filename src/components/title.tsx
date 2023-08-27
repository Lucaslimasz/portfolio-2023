import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="uppercase font-bold text-sm">{children}</h1>;
}
