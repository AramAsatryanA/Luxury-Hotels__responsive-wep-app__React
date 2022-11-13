import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <footer>
      <div className={`${styles["footer__container"]} -container`}>
        <div className={styles.info}>
          <div className={styles["info-name"]}>
            <p>Luxury</p>
            <p>hotels</p>
          </div>
          <div className={styles["info-contacts"]}>
            <p>2 Caxton Street, London SW1H 0QW United Kingdom</p>
            <p>+44 55 7777 9999</p>
            <p>luxury_hotels@gmail.com</p>
          </div>
        </div>
        <div className={styles["pages-links"]}>
          <Link to="#">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="#">Terms & Conditions</Link>
        </div>
        <div className={styles["social-links"]}>
          <div className={styles["social-links__icons"]}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrFacebookOption />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram />
            </a>
          </div>
          <div className={styles["social-links__links"]}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.subscribe}>
          <p>Subscribe to our newsletter</p>
          <div className={styles["subscribe-email"]}>
            <input type="email" placeholder="Email Address"></input>
            <button>OK</button>
          </div>
        </div>
      </div>
      <div className={styles["my-style"]}>
        /// Development by <span>Aram Asatryan</span> ///
      </div>
    </footer>
  );
}

export default Footer;
