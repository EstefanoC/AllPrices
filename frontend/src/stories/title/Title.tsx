// React
import React from "react";

interface ButtonProps {
  primary?: boolean;
  className?: string;
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Title = ({ primary = true, className = "", label, ...props }: ButtonProps) => {
  if (primary) {
    return (
      <h1 className={`text-5xl font-bold text-text ${className}`} {...props}>
        {label}
      </h1>
    );
  } else {
    return (
      <h2 className={`text-4xl font-bold text-text ${className}`} {...props}>
        {label}
      </h2>
    );
  }
};
