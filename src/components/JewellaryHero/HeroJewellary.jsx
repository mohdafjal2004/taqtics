import React from "react";
import style from "./HeroJewellary.module.css";
import { imageObj } from "../../assets/imageObject";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

const HeroJewellary = () => {
    
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <p className={style.header}>Discover the Art of Fine Jewelry</p>
        <img src={imageObj.heroJewellary} alt="jewllery" />

        <p className={style.jewellaryExploreSection}>
          <span onClick={() => navigate("/product", { state: "jewelery" })}>
            Shop Jewelry Now{" "}
            <span>
              <FaExternalLinkAlt />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroJewellary;
