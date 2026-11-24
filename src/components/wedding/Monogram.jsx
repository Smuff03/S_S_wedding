import React from "react";

// Simple placeholder Lotus/Monogram component – a rotating SVG used as background decoration.
// It accepts className so the existing JSX can control size, position and animation.
export const Lotus = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    // The original design used a gold‑ish color; you can adjust via Tailwind utilities.
  >
    <path d="M50 5L61 35l31 2-25 19 9 30-27-18-27 18 9-30-25-19 31-2z" />
  </svg>
);
