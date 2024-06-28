import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SocialsBar from "../components/SocialsBar";
import { socialIcons } from "../components/SocialsBar";
import NavBlock from "../components/NavBlock";
import { blockNavList } from "../components/NavBlock";
import { jerseyItemList } from "../components/Itembox";
import Itembox from "../components/Itembox";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";

const jerseyBannerList = {
  bannerImg: "jerseyBanner",
  title: "Jerseys",
  subTitle: "Play in style with our latest premium Jerseys",
};

export default function JerseysPage() {
  const [favNoti, setFavNoti] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Banner {...jerseyBannerList} />
      {favNoti ? (
        <div className="noti-wrap">
          <div className="favorite-noti">
            <h1>Added To Favorites!</h1>
          </div>
        </div>
      ) : null}
      <section></section>

      <section>
        <div className="contentGrid">
          {jerseyItemList.map((jerseys) => {
            return <Itembox {...jerseys} item={jerseys} key={jerseys.id} />;
          })}
        </div>
      </section>
      <NavBlock {...blockNavList} />
      <SocialsBar {...socialIcons} />
      <Footer />
    </>
  );
}
