import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SocialsBar from "../components/SocialsBar";
import { socialIcons } from "../components/SocialsBar";
import NavBlock from "../components/NavBlock";
import { blockNavList } from "../components/NavBlock";
import Itembox, { keeperItemList } from "../components/Itembox";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";
const keeperBannerList = {
  bannerImg: "keeperBanner",
  title: "Goalkeeper",
  subTitle: "Dive into our latest gear for our Goalkeepers",
};

export default function KeeperPage() {
  const [favNoti, setFavNoti] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Banner {...keeperBannerList} />
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
          {keeperItemList.map((gloves) => {
            return <Itembox {...gloves} item={gloves} key={gloves.id}/>
          })}
        </div>
      </section>
      <NavBlock {...blockNavList} />
      <SocialsBar {...socialIcons} />
      <Footer />
    </>
  );
}
