import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToAnchor from './ScrollToAnchor'
export const blockNavList = {
    block1: "Adult Cleats",
    block2: "Kids Cleats",
    block3: "Mens Jerseys",
    block4: "Women Jerseys",
    block5: "Goalkeeper",
    block6: "Soccer Balls",
}

export default function NavBlock(props) {
  const {block1, block2, block3, block4, block5, block6} = props
  return (
    <div className="navBlockContainer">
      <nav className="navBlocks">
        <ul className="navList-blocks">
          <Link to="/Footwear#cleats-section">
            <li>{block1}</li>
          </Link>
          <Link to="/Footwear">
            <li>{block2}</li>
          </Link>
          <Link to="/JerseysPage">
            <li>{block3}</li>
          </Link>
          <Link to="/JerseysPage">
            <li>{block4}</li>
          </Link>
          <Link to="/eeperPage">
            <li>{block5}</li>
          </Link>
          <Link to="/TrainingPage">
            <li>{block6}</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
