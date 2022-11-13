import { scrollToSection } from "../store/store";

import iconBook from "../assets/images/icons/top-section_button-book.svg";
import iconScroll from "../assets/images/icons/top-section_button-scroll.svg";

import styles from "./TopSection.module.css";

function TopSection({ coverImage, section }) {
  function scrollHandler() {
    scrollToSection(section);
  }

  return (
    <section className={styles["section-top"]}>
      <span className={styles["section__cover-image"]}>
        <img src={coverImage} alt="Top Cover" />
      </span>
      <span className={styles["section__cover-overlay"]}></span>
      <div className={`${styles["section-container"]} -container`}>
        <div className={styles["section__content"]}>
          <div className={styles["content__description"]}>
            <p>Welcome to</p>
            <p>Luxury</p>
            <p>Hotels</p>
            <p>
              Book your stay and enjoy Luxury redefined at the most affordable
              rates.
            </p>
          </div>
          <div className={styles["content__actions"]}>
            <button className={`${styles.button} + ${styles["button__book"]}`}>
              <span>
                <img src={iconBook} alt="Book Button Icon" />
              </span>
              <p>book now</p>
            </button>
            <div className={styles.scroll}>
              <p>Scroll</p>
              <button
                className={`${styles.button} + ${styles["scroll__button"]}`}
                onClick={scrollHandler}
              >
                <img src={iconScroll} alt="Scroll Button Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSection;
