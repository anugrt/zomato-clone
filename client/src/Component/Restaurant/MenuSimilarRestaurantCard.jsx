import React from "react";
import { TiStar } from "react-icons/ti";

function MenuSimilarRestaurantCard(props) {
  return (
    <>
      <div className="mx-2">
        <div className="bg-white shadow rounded-md my-4">
          <div className="w-full h-48">
            <img
              src={props.image}
              alt="food"
              className="w-full h-full object-cover object-center rounded-t-md"
            />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <h3 className="font-semibold text-lg">{props.title}</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <span className="flex items-center gap-1 font-medium bg-green-500 text-white p-1 rounded">
                  3.0 <TiStar />
                </span>
                Dining
              </span>
            </div>
            <h4>Street Food, Beverages, Tea</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuSimilarRestaurantCard;
