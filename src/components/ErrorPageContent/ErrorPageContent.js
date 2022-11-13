import { Link, useNavigate } from "react-router-dom";

import { MdErrorOutline } from "react-icons/md";
import { IoHandRight } from "react-icons/io5";

import styles from "./ErrorPageContent.module.css";

function ErrorPageContent({ status, statusText }) {
  const navigate = useNavigate();

  return (
    <section className={styles["section-error"]}>
      <div className={`${styles["section-error__container"]} -container`}>
        <div className={styles.top}>
          <span className={styles.icon}>
            <IoHandRight />
          </span>
          <div className={styles.title}>Error</div>
        </div>
        <div className={styles.info}>
          <p className={styles["info__status"]}>{status}</p>
          <span className={`${styles.icon} ${styles["icon-gray"]}`}>
            <MdErrorOutline />
          </span>
          <p className={styles["info__status-text"]}>{statusText}</p>
        </div>
        <div>
          <div className={`${styles.action} ${styles["action-back"]}`}>
            To go back, click
            <button
              className={`${styles.click} ${styles["back__btn"]}`}
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
          <div className={`${styles.action} ${styles["action-home"]}`}>
            To go to the Home page, click
            <Link to="/home" className={`${styles.click} ${styles["home__link"]}`}>
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPageContent;
