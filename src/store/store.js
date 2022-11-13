import { configureStore } from "@reduxjs/toolkit";

import homePageContentSlice from "./homePageContent-slice";
import testimonialsSlice from "./testimonials-slice";
import facilitiesPageContentSlice from "./facilitiesPageContent-slice";
import roomsPageContent from "./roomsPageContent-slice";

const store = configureStore({
  reducer: {
    homePageContent: homePageContentSlice.reducer,
    testimonials: testimonialsSlice.reducer,
    facilitiesPageContent: facilitiesPageContentSlice.reducer,
    roomsPageContent: roomsPageContent.reducer,
  },
});

export const scrollToSection = (section) => {
  window.scrollTo({
    top: section.offsetTop - 30,
    left: section.offsetLeft,
    behavior: "smooth",
  });
};

export default store;
