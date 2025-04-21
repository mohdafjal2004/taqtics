import React from "react";
import Hero from "../../components/Hero/Hero";
import CustomerBenefits from "../../components/customerBenefits/customerBenefits.jsx";
import HeroJewellary from "../../components/JewellaryHero/HeroJewellary.jsx";
import OtherCategories from "../../components/OtherCateg/OtherCategories.jsx";

const Home = () => {
  return <div >
    <div>
      <Hero />
      <CustomerBenefits />
      <HeroJewellary />
      <OtherCategories />
    </div>
  </div>;
};

export default Home;
