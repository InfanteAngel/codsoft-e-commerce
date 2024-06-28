import React, { useEffect, useState } from "react";
import NavBlock from "../components/NavBlock";
import { blockNavList } from "../components/NavBlock";
import SocialsBar from "../components/SocialsBar";
import { socialIcons } from "../components/SocialsBar";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { navData } from "../components/NavBar";
import palcoLogo from "../assets/main/whitePalcoLogo.png"
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import ScrollToTop from "../components/ScrollToTop";


// Blog Image Imports
import kidsGoal from "../assets/blog/kids_goal.jpg";
import pitchPic from "../assets/blog/blog.jpg";
import charity from "../assets/blog/charity_play.jpg";
import uefaPic from "../assets/blog/uefa_soccer.jpg";
import womensSoccer from "../assets/blog/womens-soccer.jpg";
import teamBlog from "../assets/blog/team_blog.jpg";

const blogItems = [
  {
    title: " 'Comets' Soccer Team a spark of brilliance  ",
    image: kidsGoal,
    imageAlt: "Comets Soccer team",
    author: "Kevin Toledo",
    section: "Local Story",
    id: 1,
  },
  {
    title: "Palco's own training facility in the works",
    image: pitchPic,
    imageAlt: "Soccer Pitch Image",
    author: "Palco",
    section: "News",
    id: 2,
  },
  {
    title: "Soccer, Unites",
    image: charity,
    imageAlt: "Charity Image",
    author: "Lauren Bailey",
    section: "Local Story",
    id: 3,
  },
  {
    title: "Palco said to be a sponsor for the upcoming UEFA Tournament",
    image: uefaPic,
    imageAlt: "UEFA Picture Near Pitch",
    author: "Palco",
    section: "News",
    id: 4,
  },
];

const mainContent = {
  title: "High School Women's Soccer Team Make Themselves Present",
  image: womensSoccer,
  imageAlt: "Womens Soccer Team",
  author: "James Gaily",
  section: "Local Story",
  content:
    "In the heart of the bustling city, beneath the glow of stadium lights, a women's soccer team etched their names into history. With determination pulsating through their veins and unity binding them as one, they embarked on a journey that would culminate in a match to be remembered for generations. The sun dipped below the horizon as the referee's whistle pierced the air, signaling the start of the game. Cheers erupted from the stands, echoing the hopes and dreams of every fan. The opposing team was formidable, their skill evident from the first kick. But our heroes stood tall, ready to face whatever challenges lay ahead. Minutes turned into hours as the game waged on, each team fighting tooth and nail for supremacy. ",
  content2:
    "With every pass, every tackle, and every shot on goal, the tension mounted. The scoreboard remained deadlocked, a testament to the fierce competition unfolding on the field. As the final whistle loomed, fatigue threatened to consume the players, but they refused to yield. With seconds remaining, a breakthrough emerged. A swift pass, a perfectly timed run, and then... the roar of the crowd as the ball found the back of the net. ",
  content3:
    "Nerves frayed as the seconds ticked away, each one feeling like an eternity. Then, with a monumental effort, the final whistle blew. The stadium erupted into a cacophony of joyous celebration as the women's soccer team embraced, their triumph etched upon their faces. They had emerged victorious, not just on the scoreboard, but in spirit. For in that moment, they had proven that with unity, determination, and unwavering resolve, anything is possible. As the night sky shimmered with the glow of victory, the women's soccer team stood united, their hearts filled with pride. Their journey had been long and arduous, but in the end, they had emerged as champions, leaving an indelible mark on the annals of sports history.",
};

// const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
export default function BlogPage() {
//   const [myContent, setContent] = useState([]);


//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'e86acd5b0bmsh33a041fc80f0bf9p13435ejsn4a75043e1297',
//       'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
//     }
// };

// // useEffect(() => {
//   // const fetchData = async () => {
//     try {
//       const response = await fetch(url, options);
//       const myContent = await response.json();
//       setContent(myContent);
//       console.log(myContent);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   fetchData();
// }, []);

// console.log(myContent.find(({id}) => id === 102));

// const dataList = [];
// for(let i = 0; i < 10; i++) {
//   const mySelectedItem = myContent.find(({ id }) => id === 1);
//   dataList.push(mySelectedItem);
// }
// console.log(dataList);
  return (
    <>
    <ScrollToTop/>
      <NavBar {...navData} />

      <div className="main-banner" id="blogBanner"></div>

      <section className="blog-section">
        <div className="tile-section">
          <div className="main-grid">
            <BlogContent {...mainContent} />
          </div>
          <div className="blog-grid">
            {blogItems.map((tile, id) => {
              return <BlogItem {...tile} key={id} />;
            })}
          </div>
        </div>
      </section>
      {/* <section className="videoSection">
        <div className="video--tiles">
          {dataList.map((tile, id) => {
            return <VideoBox {...tile} key={id} />;
          })}
        </div>
      </section> */}
      <NavBlock {...blockNavList} />
      <SocialsBar {...socialIcons} />
      <Footer />
    </>
  );
}

const BlogItem = (props) => {
  const { title, image, imageAlt, author, section, id } = props;
  return (
    <div className="item-box" key={id}>
      <LazyLoadImage src={image} alt={imageAlt} className="tile_img" />
      <h1>{title}</h1>
      <p>By {author}</p>
    </div>
  );
};

const BlogContent = (props) => {
  const { title, image, imageAlt, author, content, content2, content3, id } =
    props;
  return (
    <div className="blog-min-page" key={id}>
      <LazyLoadImage src={image} alt={imageAlt} className="tile_img" />
      <p className="subImage">
        photo by{" "}
        <a
          href="https://unsplash.com/@jeffreyflin"
          target="_blank"
          rel="noreferrer"
        >
          Jeffrey F Lin
        </a>
      </p>
      <h1 className="blog-title">{title}</h1>
      <p className="blog-author">By {author}</p>
      <hr></hr>
      <div>
        <p className="contentBlock">{content}</p>
        <br />
        <p className="contentBlock">{content2}</p>
        <br />
        <p className="contentBlock">{content3}</p>
      </div>
      <br />
      <hr />
      <section className="palco-about">
        <div className="about-logo">
          <img src={palcoLogo} alt="palcoLogo" />
        </div>
        <div className="about-block">
          <h1 className="about-title">Our Story</h1>
          <p className="about-content">
            Palco, a vibrant store brand specializing in soccer gear and
            merchandise, began its journey in 2010 with a passion for the
            beautiful game. Founded by a group of former soccer players and
            enthusiasts, Palco aimed to bridge the gap between quality and
            affordability in soccer equipment. With a commitment to excellence, Palco quickly
            gained a reputation for offering high-quality soccer gear, including
            jerseys, cleats, balls, and accessories, all designed to enhance the
            performance and enjoyment of the sport. Over the years, Palco has
            grown into a trusted name in the soccer community, known for its
            dedication to innovation, customer satisfaction, and a deep love for
            the game.
          </p>
        </div>
      </section>
    </div>
  );
};

// let VideoBox = (props) => {
//   const { title, name, thumbnail, date, id , url} = props;


//   return (
//     <div className="videoTile" key={id} id="videoTile"> 
//       <h1>{title}</h1>
//       <iframe src={url} frameborder="0"></iframe>
//     </div>
//   );
// };
