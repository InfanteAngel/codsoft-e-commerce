import React, { useEffect, useState } from "react";
import palcoLogo from "../assets/main/whitePalcoLogoShort.png";
import { Outlet, Link, useLocation } from "react-router-dom";
import { fgCleatList } from "./Itembox";
import ItemPage, { itemInfoList } from "../pages/ItemPage";
import { selectedList } from "../pages/ItemPage";
import { favoriteList } from "./Itembox";

export const navData = {
  sec1: "Footwear",
  sec2: "Training",
  sec3: "Jerseys",
  sec4: "Keeper",
  sec5: "Blog",
  userFavorite: <i className="fa-regular fa-heart"></i>,
  userBag: <i className="fa-solid fa-bag-shopping"></i>,
  navState: "navBar",
};

const burger = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);

const xToggle = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
  </svg>
);

export default function NavBar(props) {
  const { sec1, sec2, sec3, sec4, sec5, userFavorite, userBag, navState } =
    props;
  const [toggle, setToggle] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleMb, setToggleMb] = useState(false);

  return (
    <>
      <header>
        {toggle ? <CheckoutBox setToggle={setToggle} /> : null}
        {toggleFav ? (
          <FavoriteBox setToggleFav={setToggleFav} toggleFav={toggleFav} />
        ) : null}
        <nav className={navState}>
          <ul className="navList">
            <li className="palco-logo">
              <Link to="/">
                <img src={palcoLogo} alt="PalcoLogo" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Footwear">{sec1}</Link>
            </li>
            <li className="nav-item">
              <Link to="/TrainingPage">{sec2}</Link>
            </li>
            <li className="nav-item">
              <Link to="/JerseysPage">{sec3}</Link>
            </li>
            <li className="nav-item">
              <Link to="/KeeperPage">{sec4}</Link>
            </li>
            <li className="nav-item">
              <Link to="/BlogPage">{sec5}</Link>
            </li>
            <li
              className="userFavorite"
              onClick={() => {
                setToggleFav(true);
              }}
            >
              {userFavorite}
            </li>
            <li
              onClick={() => {
                setToggle(true);
              }}
              className="userItem"
              id="user-bag"
            >
              {userBag}
            </li>
          </ul>
        </nav>
      </header>

      <header className="mb-nav">
        {toggle ? <CheckoutBox setToggle={setToggle} /> : null}
        {toggleFav ? (
          <FavoriteBox setToggleFav={setToggleFav} toggleFav={toggleFav} />
        ) : null}
        <div className="button-wrap">
          <div>
            <Link to="/">
              <img src={palcoLogo} alt="PalcoLogo" className="mb-logo" />
            </Link>
          </div>
          {toggleMb ? (
            <div className="x-button">
              <button
                type="button"
                onClick={() => {
                  setToggleMb(false);
                }}
              >
                {xToggle}
              </button>
            </div>
          ) : (
            <div className="burger-button">
              <button
                type="button"
                onClick={() => {
                  setToggleMb(true);
                }}
              >
                {burger}
              </button>
            </div>
          )}
        </div>

        {toggleMb ? (
          <MobileNav
            {...navData}
            setToggle={toggle}
            setToggleFav={toggleFav}
          />
        ) : null}
      </header>
    </>
  );
}

export const CheckoutBox = ({setToggle}) => {
  return (
    <div className="checkout-box" id="checkout-bx">
      <div className="checkout-header">
        <h1>Items Added To Your Bag</h1>
        <button
          className="exit-btn"
          id="exit-toggle-btn"
          onClick={() => {
            setToggle(false);
          }}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>

      <div className="scroll-box">
        {selectedList.length === 0
          ? null
          : selectedList.map((item) => {
              return <Item {...item} key={item.id} />;
            })}
      </div>

      <div className="button-section-checkout">
        <button type="button" className="checkout-btn" id="checkoutButton">
          Go to Checkout
        </button>
        <button
          type="button"
          onClick={() => {
            setToggle(false);
          }}
          className="continue-shopping-btn"
          id="shoppingButton"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const FavoriteBox = ({setToggleFav}) => {
  return (
    <div className="checkout-box" id="checkout-bx">
      <div className="checkout-header">
        <h1>My Favorites</h1>
        <button
          className="exit-btn"
          id="exit-toggle-btn"
          onClick={() => {
            setToggleFav(false);
          }}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>

      <div className="scroll-box">
        {favoriteList.length === 0
          ? null
          : favoriteList.map((item) => {
              return <FavItem {...item} key={item.id} />;
            })}
      </div>

      <div className="button-section-checkout">
        <button type="button" className="checkout-btn" id="checkoutButton">
          Go to Checkout
        </button>
        <button
          type="button"
          onClick={() => {
            setToggleFav(false);
          }}
          className="continue-shopping-btn"
          id="shoppingButton"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export const Item = (props) => {
  let { itemImg, itemName, itemPrice, quantity, size } = props;
  return (
    <div className="item-info-checkout">
      <div className="checkout-img">
        <img src={itemImg} alt="" />
      </div>
      <div className="selection-info">
        <h3>{itemName}</h3>
        <h3>{itemPrice}</h3>
        <p>Quantity: {quantity} </p>
        <p>Size: {size}</p>
      </div>
    </div>
  );
};

export const FavItem = (props) => {
  const { itemImg, itemName, itemPrice } = props;
  return (
    <div className="item-info-checkout">
      <div className="checkout-img">
        <img src={itemImg} alt="" />
      </div>
      <div className="selection-info">
        <h3>{itemName}</h3>
        <h3>{itemPrice}</h3>
      </div>
    </div>
  );
};

const MobileNav = (props) => {
  const {sec1, sec2, sec3, sec4, sec5, userBag, userFavorite } =
    props;
    const [toggle, setToggle] = useState(false);
    const [toggleFav, setToggleFav] = useState(false);
  return (
    <>
      {toggle ? <CheckoutBox setToggle={setToggle} /> : null}
      {toggleFav ? (
        <FavoriteBox setToggleFav={setToggleFav} toggleFav={toggleFav} />
      ) : null}
      <div className="nav-wrap">
        <ul className="mobile-nav-list">
          <li className="nav-item">
            <Link to="/Footwear">{sec1}</Link>
          </li>
          <li className="nav-item">
            <Link to="/TrainingPage">{sec2}</Link>
          </li>
          <li className="nav-item">
            <Link to="/JerseysPage">{sec3}</Link>
          </li>
          <li className="nav-item">
            <Link to="/KeeperPage">{sec4}</Link>
          </li>
          <li className="nav-item">
            <Link to="/BlogPage">{sec5}</Link>
          </li>
          <li
            className="userFavorite"
            onClick={() => {
              setToggleFav(true);
            }}
          >
            {userFavorite}
          </li>
          <li
            onClick={() => {
              setToggle(true);
            }}
            className="userItem"
            id="user-bag"
          >
            {userBag}
          </li>
        </ul>
      </div>
    </>
  );
};
