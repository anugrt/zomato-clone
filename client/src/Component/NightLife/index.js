import React from "react";

//component
import NightLifeCarousel from "./NightLifeCarsousel";

function NightLife() {
  return (
    <div>
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold lg:px-12">
        NightLife Restaurant in NCR
      </h1>
      <NightLifeCarousel />
    </div>
  );
}

export default NightLife;
