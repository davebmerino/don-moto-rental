import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import Reviewitem from "./Reviewitem";

const reviewsData = [
  { userName: "Dave", comment: "Nice bike", stars: 4 },
  { userName: "James", comment: "Bike is Good conditition", stars: 5 },
  { userName: "Muhammad", comment: "Owner is easy to deal with", stars: 4 },
  {
    userName: "Joshua",
    comment: "Great bike, we long ride for 5hrs and its good",
    stars: 3,
  },
  { userName: "Leo", comment: "Bikes are new and Good condition", stars: 5 },
  { userName: "Rico", comment: "We have fun", stars: 5 },
  { userName: "Jay", comment: "Nice bike", stars: 5 },
  { userName: "Abdul", comment: "Affordable bikes", stars: 5 },
];

export default function Reviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-3/4 m-auto my-8 pb-4">
        <h1 className="text-[#0f172a] text-4xl font-bold text-center mt-20 ">
          Reviews
        </h1>
        <div className="mt-10">
          <Slider {...settings} className="text-[0f172a]">
            {reviewsData.map((data) => (
              <div key={data.userName} style={{ scrollSnapAlign: "start" }}>
                <Reviewitem data={data} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
