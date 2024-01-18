// React
import React from "react";

interface InputProps {
  primary?: boolean;
  name?: string;
  className?: string;
  type?: "search" | "text" | "number";
  placeholder: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary = true,
  type = "text",
  className = "",
  placeholder,
  onClick,
  ...props
}: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    onClick={onClick}
    className={`border border-borderPrimary shadow-input transition-all outline-none active:border-none focus:border-none focus font-semibold rounded-md cursor-text leading-4 text-base px-2 py-4 ${
      primary ? "bg-primary text-text" : "bg-primary text-secondary"
    } ${className}`}
    {...props}
  />
);
