import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Itembox from "../components/Itembox";
import SocialsBar from "../components/SocialsBar";
import { socialIcons } from "../components/SocialsBar";
import NavBlock from "../components/NavBlock";
import { blockNavList } from "../components/NavBlock";
import ScrollToTop from "../components/ScrollToTop";

import { kidsFgCleatsList } from "../components/Itembox";
import { kidsIndoorCleatsList } from "../components/Itembox";
import { womansFgCleatList } from "../components/Itembox";
import { womansIndoorCleatList } from "../components/Itembox";

//Cleats Info
import { fgCleatList, indoorCleatItemList } from "../components/Itembox";
import ItemPage from "./ItemPage";
import NavBar from "../components/NavBar";

const bannerListFW = {
  bannerImg: "footwearBanner",
  title: "Footwear",
  subTitle: "Shop our large collection of cleats",
};

const titleContent = {
  seperatorTitle: "Indoor Soccer Cleats",
  seperatorSubTitle: "Shop Our Large Collection Of Indoor Cleats",
};

export const navigationPage = {
  navItem1: "Adult",
  navItem2: "Kids",
  navItem3: "Womans",
  navItem4: "Sale",
};

function Footwear(props) {
  const { navItem1, navItem2, navItem3, id } = props;
  const [favNoti, setFavNoti] = useState(false);
  const [adultActive, setAdult] = useState(!false);
  const [kidsActive, setKids] = useState(false);
  const [womansActive, setWomans] = useState(false);

  const toggleAdult = () => {
    setAdult(true);
    setKids(false);
    setWomans(false);
  };
  const toggleKids = () => {
    setAdult(false);
    setKids(true);
    setWomans(false);
  };
  const toggleWomans = () => {
    setAdult(false);
    setKids(false);
    setWomans(true);
  };

  return (
    <>
      <ScrollToTop />
      <Banner {...bannerListFW} />
      {favNoti ? (
        <div className="noti-wrap">
          <div className="favorite-noti">
            <h1>Added To Favorites!</h1>
          </div>
        </div>
      ) : null}
      <section className="cleats">
        <div className="nav-toggle-bar">
          <ul key={id}>
            <li className="nav-item" id="1" onClick={toggleAdult}>
              <p className={adultActive ? "nav-active" : ""}>Adult</p>
            </li>
            <li className="nav-item" id="2" onClick={toggleKids}>
              <p className={kidsActive ? "nav-active" : ""}>Kids</p>
            </li>
            <li className="nav-item" id="3" onClick={toggleWomans}>
              <p className={womansActive ? "nav-active" : ""}>Womans</p>
            </li>
          </ul>
        </div>
        {adultActive ? (
          <div className="contentGrid">
            {fgCleatList.map((product, id) => {
              return <Itembox {...product} key={id} />;
            })}
          </div>
        ) : null}

        {kidsActive ? (
          <div className="contentGrid">
            {kidsFgCleatsList.map((product, id) => {
              return <Itembox {...product} key={id} />;
            })}
          </div>
        ) : null}

        {womansActive ? (
          <div className="contentGrid">
            {womansFgCleatList.map((product, id) => {
              return <Itembox {...product} key={id} />;
            })}
          </div>
        ) : null}
      </section>

      <section className="indoor-cleats-section" >
        <HeaderSection {...titleContent} />
        {adultActive ? (
          <div className="contentGrid">
            {indoorCleatItemList.map((indoorCleat) => {
              return (
                <Itembox
                  {...indoorCleat}
                  item={indoorCleat}
                  key={indoorCleat.id}
                />
              );
            })}
          </div>
        ) : null}

        {kidsActive ? (
          <div className="contentGrid">
            {kidsIndoorCleatsList.map((indoorCleat) => {
              return (
                <Itembox
                  {...indoorCleat}
                  item={indoorCleat}
                  key={indoorCleat.id}
                />
              );
            })}
          </div>
        ) : null}

        {womansActive ? (
          <div className="contentGrid">
            {womansIndoorCleatList.map((indoorCleat) => {
              return (
                <Itembox
                  {...indoorCleat}
                  item={indoorCleat}
                  key={indoorCleat.id}
                />
              );
            })}
          </div>
        ) : null}
      </section>
      <NavBlock {...blockNavList} />
      <SocialsBar {...socialIcons} />
      <Footer />
    </>
  );
}

export default Footwear;

const HeaderSection = (props) => {
  const { seperatorTitle, seperatorSubTitle } = props;
  return (
    <div className="seperator">
      <h1>{seperatorTitle}</h1>
      <h3>{seperatorSubTitle}</h3>
    </div>
  );
};
