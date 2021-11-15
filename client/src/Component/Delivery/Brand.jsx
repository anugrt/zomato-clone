import React from "react";
import Slider from "react-slick";

//Arrow component
import { NextArrow, PrevArrow } from "../CrouselArrow";

function Brand() {
  const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
  ];

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,

        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="my-5 p-8 lg:p-12 ">
      <h1 className="text-xl lg:text-3xl mb-4 text-gray-800  font-bold">
        Top brands for you
      </h1>
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="w-38 h-full px-2 lg:px-8 bg-white flex items-center">
            <div className="w-full h-38 border shadow-md rounded-xl p-3 md:p-5 ">
              <img
                src={logo}
                alt="brand"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Brand;
