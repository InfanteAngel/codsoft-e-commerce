import React from "react";



export const socialIcons = {
  twitterIcon: <i className="fa-brands fa-x-twitter"></i>,
  faceBookIcon: <i className="fa-brands fa-facebook"></i>,
  instagramIcon: <i className="fa-brands fa-instagram"></i>,
  state: "socialsBar",
};


export default function SocialsBar(props) {
  const { twitterIcon, faceBookIcon, instagramIcon, state} = props;
  return (
    <div className={state}>
      <div className="socialsBarWrap container">
        <ul className="socials-list">
          <li className="social-item bg-gradient">{twitterIcon}</li>
          <li className="social-item bg-gradient">{faceBookIcon}</li>
          <li className="social-item bg-gradient">{instagramIcon}</li>
          <li className="seperator-bar">|</li>
        </ul>
      </div>
    </div>
  );
}
