import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SocialsBar from "../components/SocialsBar";
import { socialIcons } from "../components/SocialsBar";
import NavBlock from "../components/NavBlock";
import { blockNavList } from "../components/NavBlock";
import ScrollToTop from "../components/ScrollToTop";
import Itembox, { trainingItemList } from "../components/Itembox";

const trainingBannerList = {
  bannerImg: "trainingImg",
  title: "Training",
  subTitle: "Get match ready with our top of the line training items",
};

export default function TrainingPage() {
  const [favNoti, setFafNoti] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Banner {...trainingBannerList} />
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
          {trainingItemList.map((balls) => {
            return <Itembox {...balls} item={balls} key={balls.id}/>
          })}
        </div>
      </section>
      <NavBlock {...blockNavList} />
      <SocialsBar {...socialIcons} />
      <Footer />
    </>
  );
}
