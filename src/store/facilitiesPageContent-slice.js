import { createSlice } from "@reduxjs/toolkit";

const img_gym = require("../assets/images/facilities_page/facilities_gym.jpg");
const img_poolside_bar = require("../assets/images/facilities_page/facilities_poolside-bar.jpg");
const img_spa = require("../assets/images/facilities_page/facilities_spa.jpg");
const img_swimming_pool = require("../assets/images/facilities_page/facilities_swimming-pool.jpg");
const img_restaurant = require("../assets/images/facilities_page/facilities_restaurant.jpg");
const img_laundry = require("../assets/images/facilities_page/facilities_laundry.jpg");

const facilitiesPageContentSlice = createSlice({
  name: "facilitiesPageContent",
  initialState: {
    facilities: [
      {
        id: "gym",
        title: "The gym",
        image: img_gym,
      },
      {
        id: "poolside-bar",
        title: "Poolside bar",
        image: img_poolside_bar,
      },
      {
        id: "spa",
        title: "The spa",
        image: img_spa,
      },
      {
        id: "swimming-pool",
        title: "Swimming pool",
        image: img_swimming_pool,
      },
      {
        id: "resturant",
        title: "Restaurant",
        image: img_restaurant,
      },
      {
        id: "laundry",
        title: "Laundry",
        image: img_laundry,
      },
    ],
  },
  reducers: {},
});

export const facilitiesPageActions = facilitiesPageContentSlice.actions;

export default facilitiesPageContentSlice;
