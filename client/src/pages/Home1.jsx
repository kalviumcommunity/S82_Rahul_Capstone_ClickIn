import React from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/image/bgimage.png";
import leaf from "../assets/image/leaf-8.png";
import leaf_1 from "../assets/image/leaf-1.png";
import newImage from "../assets/image/newImage.png";
import thirdImage from "../assets/image/thirdImage.png";
import fourthImage from "../assets/image/fourthImage.png";
import fifthImage from "../assets/image/fifthImage.png";

export function Home() {
  const leafCount = 6;
  const navigate = useNavigate();

  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      navigate("/explore");
    }
  };

  const handleSearchClick = () => {
    navigate("/explore");
  };

  const handleShopNowClick = () => {
    navigate("/shop");
  };

  return (
    <>
      <style>{`
        /* Reset and base */
        html, body, #root {
          margin: 0; 
          padding: 0; 
          height: 100%; 
          background-color: #F0CBA5;
          overflow-x: hidden;
          overscroll-behavior: contain; /* prevent scroll bounce */
          scroll-behavior: smooth;
          font-family: Arial, sans-serif;
        }

        /* Container wraps all content */
        .page-container {
          width: 100vw;
          overflow-x: hidden;
        }

        /* SECTION 1: full screen with bg and leaves */
        .section-1 {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          overscroll-behavior: contain;
          background-color: #F0CBA5;
        }

        /* Background image covers */
        .section-1 img.bg-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          top: 0; left: 0;
          z-index: 0;
          user-select: none;
          pointer-events: none;
        }

        /* Search box sticky at top center */
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
          user-select: none;
        }
        .search-box:hover {
          transform: translateX(-50%) scale(1.05);
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }
        .search-icon {
          font-size: 20px;
          margin-right: 10px;
          color: #359550;
          user-select: none;
        }
        .search-input {
          background: transparent;
          border: none;
          outline: none;
          font-size: 18px;
          color: #359550;
          width: 240px;
        }
        .search-input::placeholder {
          color: #359550;
          opacity: 0.7;
        }

        /* Leaves container */
        .leaf-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0; left: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
          user-select: none;
        }
        .leaf {
          position: absolute;
          width: 40px;
          opacity: 0.8;
          animation: fall linear infinite;
          user-select: none;
        }
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        /* Generate random positions and delays */
        ${[...Array(6)].map((_, i) => `
          .leaf${i} {
            left: ${Math.random() * 100}%;
            animation-duration: ${10 + Math.random() * 10}s;
            animation-delay: ${Math.random() * 5}s;
          }
        `).join("")}

        /* Login buttons top right and top left */
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
          user-select: none;
        }
        .login-button:hover {
          background-color: darkgreen;
          transform: scale(1.05);
        }
        .login-top-right {
          position: absolute;
          top: 30px;
          right: 20px;
          z-index: 20;
        }
        .login-top-left {
          position: absolute;
          top: 30px;
          left: 20px;
          z-index: 20;
        }

        /* SECTION 2 and onwards */
        .image-section {
          width: 100vw;
          height: 100vh;
          background-color: white;
          position: relative;
          overflow: hidden;
        }
        .section-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          top: 0; left: 0;
          user-select: none;
          pointer-events: none;
        }

        /* Shop Now box */
        .shop-now-box {
          position: absolute;
          bottom: 150px;
          left: 280px;
          background-color: #6D9900;
          color: white;
          font-weight: bold;
          font-size: 18px;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
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

          {/* Login Buttons */}
          <div className="login-top-right">
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
          <div className="login-top-left">
            <Link to="/login" className="login-button">
              - Menu
            </Link>
          </div>
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

        {/* SECTION 3, 4, 5 */}
        {[thirdImage, fourthImage, fifthImage].map((img, idx) => (
          <section className="image-section" key={idx + 3}>
            <img src={img} alt={`Section ${idx + 3}`} className="section-image" />
          </section>
        ))}
      </div>
    </>
  );
}

export default Home;
