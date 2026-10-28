
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className="container py-5">
        <div className="row gy-4">
          {/* Brand */}
          <div className="col-md-4">
            <Link to="/" className={styles.brand}>
              E-COMM<span>_</span>
            </Link>

            <p className={styles.description}>
              Everything you need, delivered simply.
            </p>

            <span className={styles.systemStatus}>
              <i /> SYSTEM ONLINE
            </span>
          </div>

          {/* Shop */}
          <div className="col-6 col-md-2">
            <h6 className={styles.heading}>01 // SHOP</h6>
            <ul className={styles.linkList}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2">
            <h6 className={styles.heading}>02 // COMPANY</h6>
            <ul className={styles.linkList}>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-4">
            <h6 className={styles.heading}>03 // SUPPORT</h6>
            <p className={styles.description}>
              Need assistance? Connect with our support system.
            </p>
            <a
              className={styles.email}
              href="mailto:support@ecomm.com"
            >
              support@ecomm.com <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomContent}>
            <span>© {currentYear} E-COMM. ALL RIGHTS RESERVED.</span>
            <span className={styles.systemLabel}>
              TRON INTERFACE <i />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
