import React from 'react'

import pumaPack from "../assets/main/ftab-puma-phenomenal-group.avif";
import sketchersDiamond from "../assets/main/ftab-sketchers-diamond-ice.avif";
import mizunoCharge from "../assets/main/ftabmizunocharge-dont-use-as-app-bb.avif";

import laFcJersey from "../assets/main/ftab-lafc.avif";
import nyJersey from "../assets/main/ft-new-york-fc-140224-us.avif";
import laGalaxy from "../assets/main/ftab-la-galaxy.avif";




export const griddyContent = [
  {
    img: pumaPack,
    alt: "Puma Pack",
    title: "Dive Into The Puma Pack",
    text: "Phenomenal cleats for phenomenal players",
    id: 1,
  },
  {
    img: sketchersDiamond,
    alt: "Diamond Sketchers",
    title: "The Diamond Collection",
    text: "Play in luxury with the diamond collection",
    id: 2,
  },
  {
    img: mizunoCharge,
    alt: "Mizuno Cleats",
    title: "Mizuno Charge Collection",
    text: "Charge into the filed with the Mizuno charge",
    id: 3,
  },
  {
    img: laFcJersey,
    alt: "LA FC Jersey",
    title: "La FC Home Kit",
    text: "Play in style this new season",
    id: 4,
  },
  {
    img: nyJersey,
    alt: "New York home Kit",
    title: "New York Home Kit",
    text: "Fresh design for a new campaign",
    id: 5,
  },
  {
    img: laGalaxy,
    alt: "La Galaxy Jersey",
    title: "La Galaxy 2024 Home Kit",
    text: "Get the Galaxy new look",
    id: 6,
  },
];



export default function Innergrid() {
  const gridBox1 = griddyContent.find(({id}) => id === 1);
  const gridBox2 = griddyContent.find(({id}) => id === 2);
  const gridBox3 = griddyContent.find(({id}) => id === 3);
  const gridBox4 = griddyContent.find(({id}) => id === 4);
  const gridBox5 = griddyContent.find(({id}) => id === 5);
  const gridBox6 = griddyContent.find(({id}) => id === 6);
  return (
    <>
        <div className="box-grid">
            <InnerBox {...gridBox1} key={griddyContent.id}/>
            <InnerBox {...gridBox2} key={griddyContent.id}/>
            <InnerBox {...gridBox3} key={griddyContent.id}/>
        </div>

        <div className="box-grid">
            <InnerBox {...gridBox4} key={griddyContent.id}/>
            <InnerBox {...gridBox5} key={griddyContent.id}/>
            <InnerBox {...gridBox6} key={griddyContent.id}/>
        </div>
    </>
  );
}


const InnerBox = (props) => {
    const {img, title, text, alt} = props;
    return (
      <div className="innerBox">
        <img src={img} alt={alt} className='main-innerImage' />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
}