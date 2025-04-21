import React from "react";
import style from './customerBenefits.module.css'
import { cbData } from "./cbData";

const CustomerBenefits = () => {
    return <div className={style.wrapper}>
        <h2 className={style.header}>Why shop with us?</h2>
        <div className={style.container}>
            {cbData.map((item, index) => (
                <div className={style.card} key={index}>
                    <p className={style.icon}>{item.icon}</p>
                    <h3 className={style.title}>{item.title}</h3>
                    <p className={style.description}>{item.description}</p>
                </div>
            ))}
        </div>
    </div>;
};

export default CustomerBenefits;
