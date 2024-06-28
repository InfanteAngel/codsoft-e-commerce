import React from 'react'
import palcoLogo from "../assets/main/whitePalcoLogoShort.png";

export default function ErrorPage() {
  return (
    <div className="errorPageBox">
      <div className="textBox">
        <h1>This one is on us, our tech team will be monitoring this error closely.</h1>
        <h2>
          Head back home{" "}
          <span>
            <a href="/">here</a>
          </span>
          .
        </h2>
      </div>
      <div className="logoBox">
        <img src={palcoLogo} alt="palcoLogo" />
      </div>
    </div>
  );
}
