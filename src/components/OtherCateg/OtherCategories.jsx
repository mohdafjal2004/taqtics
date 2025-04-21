import React from "react";
import style from "./OtherCategries.module.css";
import { allcatData } from "./OtherCatData";
import { useNavigate } from "react-router";

const OtherCategories = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <p className={style.header}>Curated Excellence, Everywhere.</p>
      <div className={style.container}>
        {allcatData.map((item, index) => {
          return (
            <div
              key={index}
              className={style.card}
              onClick={() => navigate("/product", { state: item.link })}
            >
              <img src={item.image} alt={item.title} className={style.image} />
              <p className={style.title}>{item.title}</p>
              <p className={style.desc}>{item.description}</p>
              <a href={item.link} className={style.explore}>
                Explore
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherCategories;
