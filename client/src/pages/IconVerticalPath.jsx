// components/IconVerticalPath.jsx
import React from "react";

const IconVerticalPath = ({ className = "" }) => {
  return (
    <svg
      width="10"
      height="160"
      viewBox="0 0 10 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* White Circle */}
      <rect x="1" y="76" width="8" height="8" rx="4" fill="white" />
      {/* Orange Vertical Line Path */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0H0V160L3 160V140C3 138.895 3.89543 138 5 138C6.10457 138 7 138.895 7 140V160L10 160V0H7V20C7 21.1046 6.10457 22 5 22C3.89543 22 3 21.1046 3 20V0ZM1 80C1 77.7909 2.79086 76 5 76C7.20914 76 9 77.7909 9 80C9 82.2091 7.20914 84 5 84C2.79086 84 1 82.2091 1 80Z"
        fill="#FA5500"
      />
    </svg>
  );
};

export default IconVerticalPath;