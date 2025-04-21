import React from "react";
import style from './hero.module.css'
import { imageObj } from "../../assets/imageObject";
import { useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/product')
    }
    return <div className={style.wrapper}>
        <div className={style.container} style={{ backgroundImage: `url(${imageObj.desktopHeroImage})` }}>
            <div className={style.text}>
                <h1 className={style.title}>Shop Smarter, Shop Everything.</h1>
                <p className={style.description}>Your Trusted Marketplace for Everything.</p>
                <button className={style.button} onClick={handleNavigate}>Find What You Need</button>
            </div>

        </div>
    </div>;
};

export default Hero;
