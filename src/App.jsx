import { useState } from "react";
import NavBar from "./components/NavBar";
import NavBlock from "./components/NavBlock";
import { navData } from "./components/NavBar";
import { blockNavList } from "./components/NavBlock";
import Innergrid from "./components/Innergrid";
import { griddyContent } from "./components/Innergrid";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { CheckoutBox } from "./components/NavBar";

//Imported Images

import palcoLogo from "./assets/main/whitePalcoLogoShort.png";
import jerseySelection from "./assets/jerseys/manU_jersey.jpg";
import teamHuddle from "./assets/blog/team_blog.jpg";
import "./App.css";
import SocialsBar, { socialIcons } from "./components/SocialsBar";
import ItemPage from "./pages/ItemPage";




function App() {



  const jerseyImg = document.getElementById("jerseySelectionImg");
  const blogImg = document.getElementById("blogImg");

  const buttonHover = () => {
    jerseyImg.style = "filter: opacity(70%)";
  };

  const noHover = () => {
    jerseyImg.style = "filter: opacity(100%)";
  };

  const blogHover = () => {
    blogImg.style = "filter: opacity(70%)";
  };

  const noBlogHover = () => {
    blogImg.style = "filter:opacity(100%)";
  };

  const mainContent = document.getElementById("contentWrap");
  return (
    <>
      <NavBar {...navData} overlay={mainContent} />
      <div className="mainContentWrap" id="contentWrap">
        <div className="main-banner" id="banner-main">
          <video
            autoPlay
            muted
            loop
            id="soccerVid"
            src="src\assets\videos\arial_match.mp4"
            type="video/mp4"
          ></video>
        </div>

        <div className="second-main-banner">
          <div className="second-banner-wrap">
            <div className="bannerTextbox">
              <h1>Nike Hypervenom</h1>
              <h2>One to rule them all</h2>
              <Link to="/Footwear">
                <button type="button" className="banner-button">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <NavBlock {...blockNavList} />

        <div className="bottom-grid-section bg-gradient">
          <div className="grid-contain ">
            <div className="box1">
              <img
                src={jerseySelection}
                alt="selection of jerseys"
                id="jerseySelectionImg"
              />
              <Link to="/JerseysPage">
                <button
                  className="jerseyButton "
                  id="jerseyButton"
                  aria-hidden="true"
                  onMouseOver={buttonHover}
                  onMouseLeave={noHover}
                >
                  Shop Jerseys
                </button>
              </Link>
            </div>

            <Innergrid {...griddyContent} />

            <div className="box4">
              <img src={teamHuddle} alt="team huddle" id="blogImg" />
              <Link to="/BlogPage">
                <button
                  className="blogButton "
                  id="blogButton"
                  aria-hidden="true"
                  onMouseOver={blogHover}
                  onMouseLeave={noBlogHover}
                >
                  Visit Our Blog Page
                </button>
              </Link>
            </div>
          </div>
        </div>

        <SocialsBar {...socialIcons} />
        <Footer />
      </div>
    </>
  );
}

export default App;
