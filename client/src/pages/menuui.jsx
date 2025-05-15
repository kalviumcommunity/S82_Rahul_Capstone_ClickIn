import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconVerticalPath from "./IconVerticalPath";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Shop-Now", path: "/shop" },
  { label: "Get-In Three steps", path: null },
  { label: "Signup", path: "/explore" },
  { label: "Collaborate", path: "/explore" },
];

const Menu = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`menu-box ${hovered ? "expanded" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setHoveredIndex(null);
      }}
    >
      <div className="menu-header">
        <div className="menu-icon">{hovered ? "•" : "≡"}</div>
        <div className="menu-label">Menu</div>
      </div>

      {/* Expanded Content */}
      <div className={`menu-content ${hovered ? "visible" : ""}`}>
        {/* Indicator SVG */}
        {hoveredIndex !== null && (
          <div
            className="menu-left"
            style={{
              transform: translateY(`${hoveredIndex * 40}px`),
            }}
          >
            <IconVerticalPath />
          </div>
        )}

        {/* Menu Items add
         */}
        <div className="menu-right">
          {menuItems.map((item, index) =>
            item.path ? (
              <Link
                key={index}
                to={item.path}
                className="item"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {item.label}
              </Link>
            ) : (
              <div
                key={index}
                className="item"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {item.label}
              </div>
            )
          )}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .menu-box {
          position: absolute;
          top: 30px;
          left: 30px;
          background-color: #f45100;
          border-radius: 16px;
          padding: 14px 20px;
          width: 120px;
          height: 50px;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .menu-box.expanded {
          width: 240px;
          height: 260px;
          padding: 20px 28px;
        }

        .menu-header {
          display: flex;
          align-items: center;
          color: white;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
        }

        .menu-icon {
          margin-right: 10px;
          font-size: 20px;
        }

        .menu-content {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(0px);
          transition: all 0.3s ease;
          position: relative;
        }

        .menu-content.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .menu-left {
          position: absolute;
          left: -16px;
          top: 4px;
          transition: transform 0.3s ease;
        }

        .menu-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .item {
          font-size: 16px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .item:hover {
          transform: translateX(6px);
          color: #ffdeb3;
        }

        @media (max-width: 768px) {
          .menu-box.expanded {
            width: 100%;
            max-width: 320px;
          }

          .menu-content {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Menu;