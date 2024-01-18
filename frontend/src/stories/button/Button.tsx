// React
import React from "react";

interface ButtonProps {
  primary?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = true, size = "medium", className = "", label, ...props }: ButtonProps) => (
  <button
    type="button"
    className={`border border-borderPrimary shadow-button transition-all hover:scale-105 font-bold rounded-3xl cursor-pointer leading-4 ${
      primary ? "bg-secondary text-primary" : "bg-primary text-secondary"
    } ${
      size === "small" ? "text-xs px-3 py-1" : size === "medium" ? "text-sm px-5 py-3" : "text-base px-6 py-4"
    } ${className}`}
    {...props}
  >
    {label}
  </button>
);
