import styles from "./ContactUsContentSection.module.css";

import { MdArrowRightAlt } from "react-icons/md";

function ContactUsContentSection() {
  //! ---> Can add Form validation logic ---

  return (
    <section className={styles["section-content"]}>
      <div className={`${styles["section__container"]} -container`}>
        <div className={styles.title}>We are here for you</div>
        <p className={styles.text}>
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </p>
        <div className={styles.contacts}>
          <div className={styles["contacts__info"]}>
            <div className={styles["info__adress"]}>
              <p>2 Caxton Street, London SW1H 0QW United Kingdom</p>
              <p className={styles["info__adress-map"]}>
                <span>View map</span>
                <a
                  href="https://www.google.com/maps/place/St.+Ermin's+Hotel,+Autograph+Collection/@51.4991371,-0.1366062,17z/data=!3m1!4b1!4m8!3m7!1s0x487604dea89719fd:0xfaa58fd6db10a0cc!5m2!4m1!1i2!8m2!3d51.4991371!4d-0.1344175?hl=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdArrowRightAlt className={styles.arrow} />
                </a>
              </p>
            </div>
            <div className={styles["info__other"]}>
              <p>Phone: +44 55 7777 9999</p>
              <p>Email: luxury_hotels@gmail.com</p>
            </div>
          </div>
          <form className={styles["contact__form"]}>
            <div className={styles["form__input"]}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className={styles["form__input"]}>
              <label htmlFor="email">Email Adress</label>
              <input type="email" id="email" />
            </div>
            <div className={styles["form__input"]}>
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" />
            </div>
            <div className={styles["form__actions"]}>
              <button className={styles.button}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUsContentSection;
