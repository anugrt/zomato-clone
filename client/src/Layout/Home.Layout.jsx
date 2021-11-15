import React, { useEffect } from "react";
import FoodTab from "../Component/FoodTabs";

//Components
import Navbar from "../Component/Navbar";

//Redux
import { useDispatch } from "react-redux";
import { getCart } from "../Redux/Reducer/Cart/cart.action";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20">{children}</div>
    </div>
  );
}

export default HomeLayout;
