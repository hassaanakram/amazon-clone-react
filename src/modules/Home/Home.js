import React from "react";
import './Home.css';
import Header from "../Header/Header";
import Product from "../Product/Product";

function Home() {
  return (
  <div>
    <Header></Header>
    <div className="home">
    <div className="home__container">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
    <div className="home__row">
      <Product
      id="1"
      title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      />
      <Product
      id="4903850"
      title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
      price={199.99}
      rating={3}
      image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
      />
    </div>
    </div>
    </div>
    </div>
  );
}

export default Home;
