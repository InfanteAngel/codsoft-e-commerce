import React from "react";

export const footerNavContent = {
  title: "Help & Info",
  cont1: "Help & FAQs",
  cont2: "Delivery",
  cont3: "Returns",
  cont4: "Contact US",
};

export const footerNavContent2 = {
  title: "My Account",
  cont1: "Address book",
  cont2: "My Details",
  cont3: "My Orders",
};

export default function Footer() {
  return (
    <div className="myFooter ">
      <div className="footer-grid container">
        <FooterBox {...footerNavContent} />
        <FooterBox2 {...footerNavContent2} />
      </div>
    </div>
  );
}

const FooterBox = (props) => {
  const { title, cont1, cont2, cont3, cont4 } = props;
  return (
    <div>
      <ul>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <a href="">{cont1}</a>
        </li>
        <li>
          <a href="">{cont2}</a>
        </li>
        <li>
          <a href="">{cont3}</a>
        </li>
        <li>
          <a href="">{cont4}</a>
        </li>
      </ul>
    </div>
  );
};

const FooterBox2 = (props) => {
  const { title, cont1, cont2, cont3 } = props;
  return (
    <div>
      <ul>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <a href="">{cont1}</a>
        </li>
        <li>
          <a href="">{cont2}</a>
        </li>
        <li>
          <a href="">{cont3}</a>
        </li>
      </ul>
    </div>
  );
};
