import React from "react";

const PageNavSvg = ({ type }) => {
  const svgstyle = `page-nav-svg ${type}-page-svg`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={svgstyle}
    >
      <circle stroke-width="1" cx="12" cy="12" r="10"></circle>
      <polyline points="12 8 8 12 12 16"></polyline>
      <line x1="16" y1="12" x2="8" y2="12"></line>
    </svg>
  );
};

export default PageNavSvg;
