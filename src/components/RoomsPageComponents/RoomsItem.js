import { useDispatch } from "react-redux";
import { roomsPageActions } from "../../store/roomsPageContent-slice";

import iconButtonView from "../../assets/images/icons/rooms_button-view.svg";
import styles from "./RoomsItem.module.css";

function RoomsItem({
  id,
  currentImageIndex,
  images,
  title,
  price,
  description,
}) {
  const dispatch = useDispatch();

  function changeImageHandler(event) {
    if (event.target.id === "") return;

    dispatch(roomsPageActions.changeImage({ id: event.target.id }));
  }

  return (
    <li>
      <div className={styles["item__top"]}>
        <div className={styles["top__img-part"]}>
          <img src={images[currentImageIndex]} alt={title} />
          <div
            className={styles["img-part__navigation"]}
            onClick={changeImageHandler}
          >
            {images.map((_, i) => (
              <input
                key={i}
                type="radio"
                name="navigation-btn"
                id={`${id}__btn-${i}`}
                className={styles["navigation-btn"]}
              />
            ))}
          </div>
          <div className={styles["img-part__overlay"]}></div>
        </div>
        <div className={styles["top__title"]}>{title}</div>
      </div>
      <div className={styles["item__actions"]}>
        <button className={styles["button__view"]}>
          <img src={iconButtonView} alt="Button View" />
          <p>View room details</p>
        </button>
        <button className={styles["button__price"]}>
          {`$${price} ${description}`}
        </button>
      </div>
    </li>
  );
}

export default RoomsItem;
