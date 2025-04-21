import React from "react";
import style from "./Header.module.css";
import { imageObj } from "../../assets/imageObject";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <img
            src={imageObj.headerLogo}
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>
        {/* Desktop Items */}
        <div
          className={`${style.hamMenu} ${
            isOpen ? style.active : style.inActive
          }`}
        >
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Sign In</li>
            <li onClick={() => navigate("/cart")}>
              <FaCartShopping />
            </li>
          </ul>
        </div>
        {/* Mobile Items */}
        <div className={style.mobileMenu} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <GrClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
