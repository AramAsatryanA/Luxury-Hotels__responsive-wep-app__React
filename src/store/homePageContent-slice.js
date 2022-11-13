import { createSlice } from "@reduxjs/toolkit";

const img_feature_1 = require("../assets/images/home_page/home_feature-1.jpg");
const img_feature_2 = require("../assets/images/home_page/home_feature-2.jpg");

const homePageContentSlice = createSlice({
  name: "homePageContent",
  initialState: {
    items: [
      {
        id: "feature-1",
        title: "Luxury redefined",
        description:
          "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
        button: "Explore",
        image: img_feature_1,
      },
      {
        id: "feature-2",
        title: "Leave your worries in the sand",
        description:
          "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.",
        button: "Explore",
        image: img_feature_2,
      },
    ],
  },
  reducers: {},
});

export const homePageActions = homePageContentSlice.actions;

export default homePageContentSlice;
