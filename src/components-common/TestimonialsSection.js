import { useDispatch, useSelector } from "react-redux";
import { testimonialsActions } from "../store/testimonials-slice";

import styles from "./TestimonialsSection.module.css";

import buttonLeft from "../assets/images/icons/testimonials_button-left.svg";
import buttonRight from "../assets/images/icons/testimonials_button-right.svg";

function TestimonialsSection() {
  const currentItem = useSelector((state) => state.testimonials.itemToShow);

  const dispatch = useDispatch();

  function showNextItemHandler() {
    dispatch(testimonialsActions.showNextItem());
  }

  function showPreviousItemHandler() {
    dispatch(testimonialsActions.showPreviousItem());
  }

  return (
    <section className={styles["section-testimonials"]}>
      <div className={`${styles["section__container"]} -container`}>
        <div className={styles.title}>Testimonials</div>
        <ul className={styles.items}>
          <li key={currentItem.id}>
            <div className={styles["item__title"]}>"{currentItem.title}"</div>
            <div className={styles["item__author"]}>{currentItem.author}</div>
          </li>
        </ul>
        <div className={styles.buttons}>
          <button onClick={showPreviousItemHandler}>
            <img src={buttonLeft} alt="Button Left" />
          </button>
          <button onClick={showNextItemHandler}>
            <img src={buttonRight} alt="Button Right" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
