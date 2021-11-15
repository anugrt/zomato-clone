/* eslint-disable react-hooks/exhaustive-deps */
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";
import { Redirect, Route } from "react-router";
import React, { useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./Redux/Reducer/User/user.action";

//Pages
import Home from "./Pages/Home";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Overview from "./Pages/Overview";
import OrderOnline from "./Pages/OrderOnline";
import Reviews from "./Pages/Reviews";
import Menu from "./Pages/Menu";
import Photos from "./Pages/Photos";
import Checkout from "./Pages/Checkout";
import RestaurantRedirect from "./Pages/RestaurantRedirect";
import GoogleAuth from "./Pages/GoogleAuth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMySelf());
  }, []);
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
      <Route path="/restaurant/:id" exact component={RestaurantRedirect} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
    </div>
  );
}

export default App;
