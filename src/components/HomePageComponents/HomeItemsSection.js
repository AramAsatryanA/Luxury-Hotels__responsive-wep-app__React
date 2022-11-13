import { useSelector } from "react-redux";
import styles from "./HomeItemsSection.module.css";

function HomeItemsSection() {
  const items = useSelector((state) => state.homePageContent.items);

  return (
    <section className={styles["section-items"]} id="home__section-items">
      <div className={`${styles["section__container"]} -container`}>
        <div className={styles["section__title"]}>
          All our room types are including complementary breakfast
        </div>
        <ul className={styles["section__items"]}>
          {items.map((item) => (
            <li className={styles["section__item"]} key={item.id}>
              <div className={styles["item__content"]}>
                <div className={styles["item__title"]}>{item.title}</div>
                <p className={styles["item__description"]}>
                  {item.description}
                </p>
                <button className={styles["item__button"]}>
                  {item.button}
                </button>
                <div className={styles["item__border"]}></div>
              </div>
              <div className={styles["item__img"]}>
                <img src={item.image} alt={`${item.id} cover`} />
                <div className={styles["item__img-overlay"]}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeItemsSection;
