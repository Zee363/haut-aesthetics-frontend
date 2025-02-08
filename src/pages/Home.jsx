import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pages/Home.css";

const Home = () => {
    return (
      <div className="grid-container">
        <div className="item-image1">
          <img src="./home-pic1.webp" alt="Perfume." />
        </div>
        <div className="item image2">
          <img src="./home-pic3.webp" alt="A display of fashion." />
        </div>
        <div className="item name brand-name">
            <h1>
              {" "}
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
            <br />
            <h1>
              
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
            <h1>
              
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
            <h1>
             
              BEAUTY. <br /> FASHION. <br /> LIFESTYLE.{" "}
            </h1>
          </div>
        <div className="item image3">
          <img src="./home-pic2.webp" alt="Clothes." />
        </div>
        <div className="item image4">
          <img src="./home-pic4.webp" alt="A portrait of Ayanda." />
        </div>
        <div className="item image5">
          <img src="./home-pic5.webp" alt="Skin care products." />
        </div>
      </div>
    );
  };
  
  export default Home;