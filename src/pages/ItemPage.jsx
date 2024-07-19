import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { navData } from "../components/NavBar";
import NavBlock from "../components/NavBlock";
import { blockNavList } from "../components/NavBlock";
import Footer from "../components/Footer";
import SocialsBar from "../components/SocialsBar";
import { socialIcons } from "../components/SocialsBar";
import { Item } from "../components/NavBar";
import ScrollToTop from "../components/ScrollToTop";
import { CheckoutBox } from "../components/NavBar";
import { fgCleatList, indoorCleatItemList } from "../components/Itembox";
import { favoriteList } from "../components/Itembox";
import { trainingItemList } from "../components/Itembox";
import { keeperItemList } from "../components/Itembox";
import { jerseyItemList } from "../components/Itembox";
import Banner from "../components/Banner";

const paymentList = [
  {
    icon: <i className="fa-solid fa-credit-card"></i>,
    title: "Payment",
    subText: "Credit/Debit Card, Paypal",
    id: 1,
  },
  {
    icon: <i className="fa-solid fa-truck-fast"></i>,
    title: "Shipping & Delivery",
    subText: "All products are shipped from Southbound (AG) via EdFex",
    id: 2,
  },
  {
    icon: <i className="fa-solid fa-box"></i>,
    title: "Returns",
    subText: "Hassle Free Returns to Southbound (AG)",
    id: 3,
  },
  {
    icon: <i className="fa-solid fa-handshake-angle"></i>,
    title: "Customer Service",
    subText: "World-Class Service",
    id: 4,
  },
  {
    icon: <i className="fa-solid fa-medal"></i>,
    title: "100% Genuine Product",
    subText: "Pro-Direct are an Authorized Retailer for Leading Brands...",
    id: 5,
  },
];

const sizeListUS = [
  {
    sizeNumber: 6.5,
    id: 1,
  },
  {
    sizeNumber: 7,
    id: 2,
  },
  {
    sizeNumber: 7.5,
    id: 3,
  },
  {
    sizeNumber: 8,
    id: 4,
  },
  {
    sizeNumber: 8.5,
    id: 5,
  },
  {
    sizeNumber: 9,
    id: 6,
  },
  {
    sizeNumber: 9.5,
    id: 7,
  },
  {
    sizeNumber: 10,
    id: 8,
  },
  {
    sizeNumber: 10.5,
    id: 9,
  },
  {
    sizeNumber: 11,
    id: 10,
  },
  {
    sizeNumber: 11.5,
    id: 11,
  },
  {
    sizeNumber: 12,
    id: 12,
  },
  {
    sizeNumber: 12.5,
    id: 13,
  },
  {
    sizeNumber: 13,
    id: 14,
  },
];

const sizeTrainingUS = [
  {
    sizeNumber: 3,
    id: 1,
  },
  {
    sizeNumber: 4,
    id: 1,
  },
  {
    sizeNumber: 5,
    id: 1,
  },
];

const sizeJerseysUS = [
  {
    sizeNumber: "XS",
    id: 1,
  },
  {
    sizeNumber: "S",
    id: 2,
  },
  {
    sizeNumber: "M",
    id: 3,
  },
  {
    sizeNumber: "L",
    id: 4,
  },
  {
    sizeNumber: "XL",
    id: 5,
  },
];

const keeperSizeUS = [
  {
    sizeNumber: 6,
    id: 1,
  },
  {
    sizeNumber: 6.5,
    id: 2,
  },
  {
    sizeNumber: 7,
    id: 3,
  },
  {
    sizeNumber: 7.5,
    id: 4,
  },
  {
    sizeNumber: 8,
    id: 5,
  },
  {
    sizeNumber: 8.5,
    id: 6,
  },
  {
    sizeNumber: 9,
    id: 7,
  },
  {
    sizeNumber: 9.5,
    id: 8,
  },
  {
    sizeNumber: 10,
    id: 9,
  },
  {
    sizeNumber: 10.5,
    id: 10,
  },
  {
    sizeNumber: 11,
    id: 11,
  },
  {
    sizeNumber: 11.5,
    id: 12,
  },
  {
    sizeNumber: 12,
    id: 13,
  },
];

//Sets the size to 0 if no size is selected
let sizeSelect = 0;

//Function that setss the item size based on the users choice of the grid
function sizeClick(sizeItem) {
  sizeSelect = sizeListUS.find(({ id }) => id === sizeItem);
}

//This list contains each items info that is displayed along the item selected
export const itemInfoList = [];
//This list contains any item that has been selected
export const selectedList = [];

function ItemPage({ toggle }, itemGround) {
  const location = useLocation();
  const data = location.state.data;
  //Takes the id from the "Itembox" component that was set based on the users choice
  //Sets selected item id into the id that the item that was selected has
  const selectedItem = fgCleatList.find(({ id }) => id === data.id);
  const selectedItemSG = indoorCleatItemList.find(({ id }) => id === data.id);
  const selectedKeeperItem = keeperItemList.find(({ id }) => id === data.id);
  const selectedItemTraining = trainingItemList.find(
    ({ id }) => id === data.id
  );
  const selectedJerseyItem = jerseyItemList.find(({ id }) => id === data.id);
  const [noti, setNoti] = useState(false);
  //Initially sets a default item to accept size

  function defaultItem() {
    //Compares the data of the item prop in order to determine which
    // list that was selected will be updated along with the size of said item
    if (data.itemGround === "soft") {
      selectedItemSG.quantity += 0;
      selectedItemSG.size = sizeSelect.sizeNumber;
      if (toggle === undefined) {
        toggle = true;
      }
    } else if (data.itemGround === "ball") {
      selectedItemTraining.quantity += 0;
      selectedItemTraining.size = sizeSelect.sizeNumber;
    } else if (data.itemGround === "gloves") {
      selectedKeeperItem.quantity += 0;
      selectedKeeperItem.size = sizeSelect.sizeNumber;
    } else if (data.itemGround === "jersey") {
      selectedJerseyItem.quantity += 0;
      selectedJerseyItem.quantity = sizeSelect.sizeNumber;
    } else {
      selectedItem.quantity += 0;
      selectedItem.size = sizeSelect.sizeNumber;
      if (toggle === undefined) {
        toggle = true;
      }
    }
  }
  defaultItem();
  // This function is responsible for adding items to the cart
  function handleClick(item) {
    let isPresent = false;
    setNoti(true);
    setTimeout(() => {
      setNoti(false);
    }, 2000);
    selectedList.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      item.quantity += 1;
      item.size = sizeSelect.sizeNumber;
      return;
    }

    //Depending on the item data, said list will be taken and filtered to find the item
    //that will be pushed onto the list that will be displayed in the itempage and checkout

    if (data.itemGround === "soft") {
      selectedList.push(selectedItemSG);
    } else if (data.itemGround === "ball") {
      selectedList.push(selectedItemTraining);
    } else if (data.itemGround === "gloves") {
      selectedList.push(selectedKeeperItem);
    } else if (data.itemGround === "jersey") {
      selectedList.push(selectedJerseyItem);
    } else {
      selectedList.push(selectedItem);
    }

    // // data.itemGround === "soft"
    // //   ? selectedList.push(selectedItemSG)
    // //   : selectedList.push(selectedItem);

    // if (toggle === undefined) {
    //   toggle = true;
    // }
  }

  //Adds an item to the favorite list based on the list that was selected
  function addToFavorite(item) {
    let isPresent = false;
    favoriteList.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      return;
    }
    if (data.itemGround === "soft") {
      favoriteList.push(selectedItemSG);
    } else if (data.itemGround === "ball") {
      favoriteList.push(selectedItemTraining);
    } else if (data.itemGround === "gloves") {
      favoriteList.push(selectedKeeperItem);
    } else if (data.itemGround === "jersey") {
      favoriteList.push(selectedJerseyItem);
    } else {
      favoriteList.push(selectedItem);
    }
  }

  const [activeImg, setImage] = useState(data.itemImg);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  function clearAll() {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  }

  return (
    <>
      <ScrollToTop />
      <NavBar {...navData} navState="navBar bg-dark " />
      <div>
        <div className="item-banner" >
          <div className="banner-header">
            <div className="header-textBox">
            </div>
          </div>
        </div>
      </div>
      <div className="notification-wrap">
        {noti ? (
          <div className="cart-noti primary-ff">
            <h1>Item Added To Cart!</h1>
          </div>
        ) : null}
        <div className="modern-layout">
          <div className="main-item-image">
            {data.itemGround === "soft" ? (
              <>
                <div className="childImages">
                  <img
                    src={data.itemImg}
                    alt={data.imgAlt}
                    className={active1 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg);
                      setActive1(true);
                    }}
                  />
                  <img
                    src={data.itemImg1}
                    alt={data.imgAlt}
                    className={active2 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg1);
                      setActive2(true);
                    }}
                  />
                  <img
                    src={data.itemImg2}
                    alt={data.imgAlt}
                    className={active3 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg2);
                      setActive3(true);
                    }}
                  />
                  <img
                    src={data.itemImg3}
                    alt={data.imgAlt}
                    className={active4 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg3);
                      setActive4(true);
                    }}
                  />
                </div>

                <img src={activeImg} alt={data.imgAlt} />

                <div className="mobile_selector">
                  <div className="mb_childImages">
                    <img
                      src={data.itemImg}
                      alt={data.imgAlt}
                      className={active1 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                    <img
                      src={data.itemImg1}
                      alt={data.imgAlt}
                      className={active2 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg1);
                        setActive2(true);
                      }}
                    />
                    <img
                      src={data.itemImg2}
                      alt={data.imgAlt}
                      className={active3 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg2);
                        setActive3(true);
                      }}
                    />
                    <img
                      src={data.itemImg3}
                      alt={data.imgAlt}
                      className={active4 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg3);
                        setActive4(true);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}
            {data.itemGround === "firm" ? (
              <>
                <div className="childImages">
                  <img
                    src={data.itemImg}
                    alt={data.imgAlt}
                    className={active1 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg);
                      setActive1(true);
                    }}
                  />
                  <img
                    src={data.itemImg1}
                    alt={data.imgAlt}
                    className={active2 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg1);
                      setActive2(true);
                    }}
                  />
                  <img
                    src={data.itemImg2}
                    alt={data.imgAlt}
                    className={active3 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg2);
                      setActive3(true);
                    }}
                  />
                  <img
                    src={data.itemImg3}
                    alt={data.imgAlt}
                    className={active4 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg3);
                      setActive4(true);
                    }}
                  />
                </div>

                <img src={activeImg} alt={data.imgAlt} />

                <div className="mobile_selector">
                  <div className="mb_childImages">
                    <img
                      src={data.itemImg}
                      alt={data.imgAlt}
                      className={active1 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                    <img
                      src={data.itemImg1}
                      alt={data.imgAlt}
                      className={active2 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg1);
                        setActive2(true);
                      }}
                    />
                    <img
                      src={data.itemImg2}
                      alt={data.imgAlt}
                      className={active3 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg2);
                        setActive3(true);
                      }}
                    />
                    <img
                      src={data.itemImg3}
                      alt={data.imgAlt}
                      className={active4 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg3);
                        setActive4(true);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}

            {data.itemGround === "ball" ? (
              <>
                <div className="childImages">
                  <img
                    src={data.itemImg}
                    alt={data.imgAlt}
                    className={active1 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg);
                      setActive1(true);
                    }}
                  />
                </div>

                <img src={activeImg} alt={data.imgAlt} />

                <div className="mobile_selector">
                  <div className="mb_childImages">
                    <img
                      src={data.itemImg}
                      alt={data.imgAlt}
                      className={active1 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}

            {data.itemGround === "gloves" ? (
              <>
                <div className="childImages">
                  <img
                    src={data.itemImg}
                    alt={data.imgAlt}
                    className={active1 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg);
                      setActive1(true);
                    }}
                  />

                  <img
                    src={data.itemImg2}
                    alt={data.imgAlt}
                    className={active3 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg2);
                      setActive3(true);
                    }}
                  />
                  <img
                    src={data.itemImg3}
                    alt={data.imgAlt}
                    className={active4 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg3);
                      setActive4(true);
                    }}
                  />
                </div>

                <img src={activeImg} alt={data.imgAlt} />

                <div className="mobile_selector">
                  <div className="mb_childImages">
                    <img
                      src={data.itemImg}
                      alt={data.imgAlt}
                      className={active1 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                    <img
                      src={data.itemImg2}
                      alt={data.imgAlt}
                      className={active3 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                    <img
                      src={data.itemImg}
                      alt={data.imgAlt3}
                      className={active4 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}

            {data.itemGround === "jersey" ? (
              <>
                {" "}
                <div className="childImages">
                  <img
                    src={data.itemImg}
                    alt={data.imgAlt}
                    className={active1 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg);
                      setActive1(true);
                    }}
                  />

                  <img
                    src={data.itemImg2}
                    alt={data.imgAlt}
                    className={active3 ? "active-img" : null}
                    onClick={() => {
                      clearAll();
                      setImage(data.itemImg2);
                      setActive3(true);
                    }}
                  />
                </div>
                <img src={activeImg} alt={data.imgAlt} />
                <div className="mobile_selector">
                  <div className="mb_childImages">
                    <img
                      src={data.itemImg}
                      alt={data.imgAlt}
                      className={active1 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                    <img
                      src={data.itemImg2}
                      alt={data.imgAlt}
                      className={active2 ? "active-img" : null}
                      onClick={() => {
                        clearAll();
                        setImage(data.itemImg);
                        setActive1(true);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <div className="main-item-title container">
            <h1 className="item-title">{data.itemName}</h1>
            <h2 className="item-description">{data.description}</h2>
            <h3 className="item-price">{data.itemPrice}</h3>
          </div>

          <div className="item-payment container">
            {paymentList.map((tile, id) => {
              return <PaymentTile {...tile} key={id} />;
            })}
          </div>

          <div className="size-section container">
            {data.itemGround === "soft" ? (
              <div className="item-sizes">
                {sizeListUS.map((sizeNumber) => {
                  return (
                    <ItemSizeBox
                      {...sizeNumber}
                      active=""
                      key={sizeNumber.id}
                      onClick
                    />
                  );
                })}
              </div>
            ) : null}

            {data.itemGround === "firm" ? (
              <div className="item-sizes">
                {sizeListUS.map((sizeNumber) => {
                  return (
                    <ItemSizeBox
                      {...sizeNumber}
                      active=""
                      key={sizeNumber.id}
                      onClick
                    />
                  );
                })}
              </div>
            ) : null}

            {data.itemGround === "ball" ? (
              <div className="item-sizes">
                {sizeTrainingUS.map((sizeNumber) => {
                  return (
                    <ItemSizeBox
                      {...sizeNumber}
                      active=""
                      key={sizeNumber.id}
                      onClick
                    />
                  );
                })}
              </div>
            ) : null}

            {data.itemGround === "gloves" ? (
              <div className="item-sizes">
                {keeperSizeUS.map((sizeNumber) => {
                  return (
                    <ItemSizeBox
                      {...sizeNumber}
                      active=""
                      key={sizeNumber.id}
                      onClick
                    />
                  );
                })}
              </div>
            ) : null}

            {data.itemGround === "jersey" ? (
              <div className="item-sizes">
                {sizeJerseysUS.map((sizeNumber) => {
                  return (
                    <ItemSizeBox
                      {...sizeNumber}
                      active=""
                      key={sizeNumber.id}
                      onClick
                    />
                  );
                })}
              </div>
            ) : null}

            <div className="buttonsContainer">
              <button
                id="addBagButton"
                className="addBag-button"
                onClick={() => {
                  if (itemGround === "soft") {
                    handleClick(selectedItemSG);
                  } else if (itemGround === "ball") {
                    handleClick(selectedItem);
                  } else if (itemGround === "gloves") {
                    handleClick(selectedItem);
                  } else if (itemGround === "jersey") {
                    handleClick(selectedItem);
                  } else {
                    handleClick(selectedItem);
                  }
                }}
              >
                Add To Bag
              </button>
              <button
                className="favorite-button"
                onClick={() => {
                  if (itemGround === "soft") {
                    addToFavorite(selectedItem);
                  } else if (itemGround === "ball") {
                    addToFavorite(selectedItem);
                  } else if (itemGround === "gloves") {
                    addToFavorite(selectedItem);
                  } else if (itemGround === "jersey") {
                    addToFavorite(selectedItem);
                  } else {
                    addToFavorite(selectedItem);
                  }
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>

          <div className="item-info">
            <p>{data.itemInfo}</p>
          </div>
        </div>
        <SocialsBar {...socialIcons} state="altSocialsBar" />
        <Footer />
      </div>
    </>
  );
}

const PaymentTile = (props) => {
  const { icon, title, subText, id } = props;
  return (
    <div className="myTile container" key={id}>
      <div className="tileGrid">
        <div className="iconbox">{icon}</div>
        <div className="tileContent">
          <h4>{title}</h4>
          <p>{subText}</p>
        </div>
      </div>
    </div>
  );
};

const ItemSizeBox = (props) => {
  const { sizeNumber, id } = props;
  // const [selected, setSelected] = useState(false);
  // const selectedList = [];
  return (
    <div
      className="sizesBox"
      onClick={() => {
        sizeClick(id);
      }}
      key={id}
    >
      <p>{sizeNumber}</p>
    </div>
  );
};

export default ItemPage;
