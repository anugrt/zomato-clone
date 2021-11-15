//Libraries
import React, { useState, useEffect } from "react";

import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import RestaurantNavbar from "../Component/Navbar/RestaurantNavbar";
import ImageGrid from "../Component/Restaurant/ImageGrid";
import RestaurantInfo from "../Component/Restaurant/RestaurantInfo";
import InfoButton from "../Component/Restaurant/InfoButton";
import { BiBookmarkPlus } from "react-icons/bi";
import Tabs from "../Component/Restaurant/Tabs";
import CartContainer from "../Component/Cart/CartContainer";

//Redux
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/Image/Image.action";
import { getCart } from "../Redux/Reducer/Cart/cart.action";

function RestaurantLayout({ children }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
  });

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
        setRestaurant((prev) => ({
          ...prev,
          ...data.payload.image,
        }));
      });
    });
    dispatch(getCart());
  }, []);
  return (
    <>
      <RestaurantNavbar />
      <div className=" container mx-auto px-4 lg:px-32 pb-10 my-6">
        <ImageGrid images={restaurant.images} />

        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
          restaurantTiming={restaurant?.restaurantTiming}
        />
        <div className="flex my-4 flex-wrap gap-3  text-xs font-bold md:text-base ">
          <InfoButton isActive>
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10">
          <Tabs />
        </div>
        {children}
      </div>
      <CartContainer />
    </>
  );
}

export default RestaurantLayout;
