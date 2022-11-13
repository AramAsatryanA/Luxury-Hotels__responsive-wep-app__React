import { createSlice } from "@reduxjs/toolkit";

const img_room_single = require("../assets/images/rooms_page/rooms_room-single.jpg");
const img_room_double = require("../assets/images/rooms_page/rooms_room-double.jpg");
const img_room_twin = require("../assets/images/rooms_page/rooms_room-twin.jpg");

const roomsPageContent = createSlice({
  name: "roomsPageContent",
  initialState: {
    rooms: [
      {
        id: "room-single",
        currentImageIndex: 0,
        images: [img_room_single, img_room_double, img_room_twin],
        title: "Single room",
        price: 147,
        description: "Avg/Night",
      },
      {
        id: "room-double",
        currentImageIndex: 0,
        images: [img_room_double, img_room_single, img_room_twin],
        title: "Double room",
        price: 155,
        description: "Avg/Night",
      },
      {
        id: "room-twin",
        currentImageIndex: 0,
        images: [img_room_twin, img_room_single, img_room_double],
        title: "Twin room",
        price: 155,
        description: "Avg/Night",
      },
    ],
  },
  reducers: {
    changeImage(state, action) {
      //todo ---> The logic is to get the current item and update it's "currentImageIndex" in order to change image shown on the screen ...

      const currentItemId = action.payload.id.slice(0, -7);
      const currentItem = state.rooms.find((item) => item.id === currentItemId);

      const updatedCurrentImageIndex = +action.payload.id.slice(-1);

      currentItem.currentImageIndex = updatedCurrentImageIndex;
    },
  },
});

export const roomsPageActions = roomsPageContent.actions;

export default roomsPageContent;
