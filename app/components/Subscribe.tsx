import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient"; // Adjust the import path as needed

export function Subscribe() {
  return (
    <div className=" mt-4 flex justify-center text-center">
      <HoverBorderGradient containerClassName="rounded-lg" as="button">
        <span>Subscribe</span>
      </HoverBorderGradient>
    </div>
  );
}
