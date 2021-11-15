import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiTwotoneStar } from "react-icons/ai";

//Redux
import { useDispatch } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/Image.action";

function RestaurantCard(props) {
  const [image, setImage] = useState({
    images: [],
  });

  const [isPro] = useState(true);
  const [isOff] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) =>
        setImage(data.payload.image)
        
      );console.log(props.photos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.photos]);

  return (
    <Link
      to={`/restaurant/${props._id}`}
      className="w-full md:w-1/2 lg:w-1/3 flex justify-center my-4"
    >
      <div
        className="bg-white p-3 mb-4 rounded-2xl transition duration-300 ease-in-out hover:shadow-lg "
        style={{ maxWidth: "24rem" }}
      >
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full bottom-4 flex items-end justify-between">
            <div className="flex items-start flex-col gap-2">
              {props.isPro && (
                <span className="bg-zomato-400 text-white px-2 py-1 rounded-r text-sm">
                  pro extra 10% off
                </span>
              )}
              {props.isOff && (
                <span className="bg-blue-400 text-white px-2 py-1 rounded-r text-sm">
                  $20 OFF
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 px-2 py-1 rounded mr-3 text-xs font-semibold">
              {props.durationOfDelivery} min
            </span>
          </div>
          <img
            src={image.images.length && image.images[0].location }
            alt="food"
            className="w-full h-full rounded-2xl object-cover object-center "
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props.name}</h4>
            <span className="bg-green-400 text-white text-sm font-medium p-1 rounded flex gap-1 items-center">
              {props.restaurantReviewValue}
              <AiTwotoneStar />
            </span>
          </div>
          <div className=" text-xs flex flex-row justify-between">
            <p>{props.cuisine.join(", ")}</p>
            <p>${props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
