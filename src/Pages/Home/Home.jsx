import React from "react";
import Hero from "../../components/Hero/Hero";
import CustomerBenefits from "../../components/customerBenefits/customerBenefits";
import HeroJewellary from "../../components/JewellaryHero/HeroJewellary";
import OtherCategories from "../../components/OtherCateg/OtherCategories";

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
