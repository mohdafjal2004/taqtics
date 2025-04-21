import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <h2>Taqtics.co</h2>
        <p>Luxury Beyond Limits</p>
      </div>

      <div className={styles.links}>
        <div className={styles.linkColumn}>
          <h3>Shop</h3>
          <a href="/electronics">Electronics</a>
          <a href="/mens-clothing">Men's Fashion</a>
          <a href="/womens-clothing">Women's Fashion</a>
        </div>
        <div className={styles.linkColumn}>
          <h3>Company</h3>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/blog">Blog & Inspiration</a>
        </div>
        <div className={styles.linkColumn}>
          <h3>Support</h3>
          <a href="/shipping">Shipping & Returns</a>
          <a href="/payment-security">Secure Payments</a>
          <a href="/track-order">Track Your Order</a>
        </div>
      </div>

      <div className={styles.social}>
        <h3>Connect With Us</h3>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://pinterest.com">Pinterest</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <div className={styles.legal}>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <p>© 2025 Taqtics.co. All Rights Reserved.</p>
      </div>
      <div className={styles.footerBottom}>
        <p>Designed by Mohd. Afjal with  <span><FaHeart /></span> for <a href="https://taqtics.co/" target="_blank">Taqtics</a></p>

      </div>
    </footer>
  );
};

export default Footer;