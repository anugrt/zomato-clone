import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import DeliveryCrousel from "./DeliveryCrousel";

//Redux
import { useSelector } from "react-redux";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );
  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    console.log(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <div className="bg-gray-50 px-8 md:px-0 py-10">
        <DeliveryCrousel />
      </div>
      <div className="flex justify-between flex-wrap lg:px-20">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;
