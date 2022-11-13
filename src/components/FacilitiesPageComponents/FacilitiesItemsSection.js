import { useSelector } from "react-redux";
import styles from "./FacilitiesItemsSection.module.css";

function FacilitiesItemsSection() {
  const items = useSelector((state) => state.facilitiesPageContent.facilities);

  return (
    <section className={styles["section-items"]} id="facilities__section-items">
      <div className={`${styles["section__container"]} -container`}>
        <div className={styles["section__title"]}>Facilities</div>
        <p className={styles["section__text"]}>
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
        <ul className={styles["section__items"]}>
          {items.map((item) => (
            <li className={styles["section__item"]} key={item.id}>
              <div className={styles["item__img"]}>
                <img src={item.image} alt={`${item.id} cover`} />
                <div className={styles["item__img-overlay"]}></div>
              </div>
              <div className={styles["item__title"]}>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FacilitiesItemsSection;
