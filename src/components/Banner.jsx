import React from 'react'
import NavBar from './NavBar';
import { navData } from './NavBar';
import palcoLogo from "../assets/main/whitePalcoLogoShort.png";

const bannerList = {
    bannerImg: " ",
    title: " ",
    subTitle: " ",
}


export default function Banner(props) {
    const {title, subTitle, bannerImg, palcoLogo} = props
  return (
    <>
    <NavBar {...navData}/>
      <div>
        <div className="main-banner" id={bannerImg}>
          <div className="banner-header">
            <div className="header-textBox">
              <h1>{title}</h1>
              <h3>{subTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
