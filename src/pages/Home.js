import { useState, useEffect } from "react";

import TopSection from "../components-common/TopSection";
import HomeItemsSection from "../components/HomePageComponents/HomeItemsSection";
import TestimonialsSection from "../components-common/TestimonialsSection";

import homeTopSectionCover from "../assets/images/home_page/home_cover.jpg";

function Home() {
  const [sectionToScroll, setSectionToScroll] = useState(null);

  useEffect(() => {
    setSectionToScroll(document.getElementById("home__section-items"));
  }, []);

  return (
    <>
      <TopSection coverImage={homeTopSectionCover} section={sectionToScroll} />
      <HomeItemsSection />
      <TestimonialsSection />
    </>
  );
}

export default Home;
