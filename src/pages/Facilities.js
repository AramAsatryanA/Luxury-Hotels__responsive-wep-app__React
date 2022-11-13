import { useState, useEffect } from "react";

import TestimonialsSection from "../components-common/TestimonialsSection";
import TopSection from "../components-common/TopSection";
import FacilitiesItemsSection from "../components/FacilitiesPageComponents/FacilitiesItemsSection";

import facilitiesTopSectionCover from "../assets/images/facilities_page/facilities_cover.jpg";

function FacilitiesPage() {
  const [sectionToScroll, setSectionToScroll] = useState(null);

  useEffect(() => {
    setSectionToScroll(document.getElementById("facilities__section-items"));
  }, []);

  return (
    <>
      <TopSection
        coverImage={facilitiesTopSectionCover}
        section={sectionToScroll}
      />
      <FacilitiesItemsSection />
      <TestimonialsSection />
    </>
  );
}

export default FacilitiesPage;
