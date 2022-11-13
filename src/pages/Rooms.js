import { useState, useEffect } from "react";

import TestimonialsSection from "../components-common/TestimonialsSection";
import TopSection from "../components-common/TopSection";
import RoomsItemsSection from "../components/RoomsPageComponents/RoomsItemsSection";

import roomsTopSectionCover from "../assets/images/rooms_page/rooms_cover.jpg";

function RoomsPage() {
  const [sectionToScroll, setSectionToScroll] = useState(null);

  useEffect(() => {
    setSectionToScroll(document.getElementById("rooms__section-items"));
  }, []);

  return (
    <>
      <TopSection coverImage={roomsTopSectionCover} section={sectionToScroll} />
      <RoomsItemsSection />
      <TestimonialsSection />
    </>
  );
}

export default RoomsPage;
