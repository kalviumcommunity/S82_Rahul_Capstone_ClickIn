import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/image/bgimage.png";
import leaf from "../assets/image/leaf-8.png";
import leaf_1 from "../assets/image/leaf-1.png";
import newImage from "../assets/image/newImage.png";
import thirdImage from "../assets/image/thirdImage.png";
import fourthImage from "../assets/image/fourthImage.png";
import fifthImage from "../assets/image/fifthImage.png";
import IconVerticalPath from "./IconVerticalPath"; // Keep if needed elsewhere
import MenuUI from "./MenuUI"; // Import your new menu component

const leafCount = 6;

export function Home() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSearchKey = (e) => {
    if (e.key === "Enter") navigate("/explore");
  };

  const handleSearchClick = () => navigate("/explore");

  const handleShopNowClick = () => navigate("/shop");

  return (
    <>
      <style>{`
        html, body, #root {
          margin: 0; padding: 0; height: 100%;
          background-color: #F0CBA5;
          overflow-x: hidden;
          scroll-behavior: smooth;
          font-family: Arial, sans-serif;
        }
        .page-container { width: 100vw; overflow-x: hidden; }

        .section-1 {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: #F0CBA5;
        }
        .section-1 img.bg-image {
          position: absolute;
          width: 100%; height: 100%;
          object-fit: cover;
          top: 0; left: 0;
          z-index: 0;
        }

        .search-box {
          position: sticky;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #F0CBA5;
          border-radius: 16px;
          display: flex;
          align-items: center;
          padding: 14px 24px;
          z-index: 20;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: max-content;
          max-width: 90vw;
        }
        .search-box:hover {
          transform: translateX(-50%) scale(1.05);
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }
        .search-icon { font-size: 20px; margin-right: 10px; color: #359550; }
        .search-input {
          background: transparent; border: none; outline: none;
          font-size: 18px; color: #359550; width: 240px;
        }
        .search-input::placeholder { color: #359550; opacity: 0.7; }

        .leaf-container {
          position: absolute; width: 100%; height: 100%;
          top: 0; left: 0;
          pointer-events: none; z-index: 1;
        }
        .leaf {
          position: absolute; width: 40px;
          opacity: 0.8;
          animation: fall linear infinite;
        }
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        ${[...Array(leafCount)].map((_, i) => `
          .leaf${i} {
            left: ${Math.random() * 100}%;
            animation-duration: ${10 + Math.random() * 10}s;
            animation-delay: ${Math.random() * 5}s;
          }
        `).join("")}

        .login-top-right {
          position: absolute;
          top: 30px; right: 20px; z-index: 20;
        }
        .login-button {
          padding: 12px 24px;
          background-color: green;
          color: #fff;
          font-size: 18px;
          border-radius: 8px;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .login-button:hover {
          background-color: darkgreen;
          transform: scale(1.05);
        }

        .image-section {
          width: 100vw; height: 100vh;
          background-color: white;
          position: relative;
          overflow: hidden;
        }
        .section-image {
          position: absolute;
          width: 100%; height: 100%;
          object-fit: cover;
          top: 0; left: 0;
        }

        .shop-now-box {
          position: absolute;
          bottom: 150px; left: 280px;
          background-color: #6D9900;
          color: white;
          font-weight: bold;
          font-size: 18px;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .shop-now-box:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="page-container">
        {/* SECTION 1 */}
        <section className="section-1">
          <img src={bgImage} alt="Background" className="bg-image" />

          {/* Search Box */}
          <div
            className="search-box"
            onClick={handleSearchClick}
            onKeyDown={handleSearchKey}
            tabIndex={0}
          >
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for product"
              className="search-input"
              onKeyDown={handleSearchKey}
            />
          </div>

          {/* Falling Leaves */}
          <div className="leaf-container">
            {[...Array(leafCount)].map((_, i) => (
              <img
                key={`leaf-${i}`}
                src={i % 2 === 0 ? leaf : leaf_1}
                alt="Leaf"
                className={`leaf leaf${i}`}
                draggable={false}
              />
            ))}
          </div>

          {/* Login Button */}
          <div className="login-top-right">
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>

          {/* Menu Box */}
          <MenuUI />
        </section>

        {/* SECTION 2 */}
        <section className="image-section">
          <img src={newImage} alt="Section 2" className="section-image" />
          <div
            className="shop-now-box"
            onClick={handleShopNowClick}
            tabIndex={0}
          >
            Shop Now
          </div>
        </section>

        {/* SECTION 3-5 */}
        {[thirdImage, fourthImage, fifthImage].map((img, idx) => (
          <section className="image-section" key={idx + 3}>
            <img
              src={img}
              alt={`Section ${idx + 3}`}
              className="section-image"
            />
          </section>
        ))}
      </div>
    </>
  );
}

export default Home;