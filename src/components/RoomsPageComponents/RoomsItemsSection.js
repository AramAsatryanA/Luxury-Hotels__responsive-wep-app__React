import { useSelector } from "react-redux";
import styles from "./RoomsItemsSection.module.css";

import RoomsItem from "./RoomsItem";

function RoomsItemsSection() {
  const items = useSelector((state) => state.roomsPageContent.rooms);

  return (
    <section className={styles["section-items"]} id="rooms__section-items">
      <div className={`${styles["section__container"]} -container`}>
        <div className={styles["section__title"]}>Rooms and rates</div>
        <p className={styles["section__text"]}>
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn't our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature's palette as visible from our
          rooms' sea-view windows and terraces.
        </p>
        <ul className={styles["section__items"]}>
          {items.map((item) => (
            <RoomsItem
              key={item.id}
              id={item.id}
              currentImageIndex={item.currentImageIndex}
              images={item.images}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RoomsItemsSection;
