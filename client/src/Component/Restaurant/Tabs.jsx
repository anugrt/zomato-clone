import React from "react";
import classnames from "classnames";
import { useLocation, Link, useParams } from "react-router-dom";

function Tabs() {
  const location = useLocation();
  const currentpath = location.pathname;

  function Tab(props) {
    const { id } = useParams();

    return (
      <Link to={`/restaurant/${id}/${props.route}`}>
        <div
          className={classnames("text-gray-500 relative font-light ", {
            " text-zomato-400 font-semibold  ": props.isActive,
          })}
          style={{ minWidth: "110px" }}
        >
          <h3 className="text-lg md:text-xl ">{props.title}</h3>
        </div>
      </Link>
    );
  }

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: currentpath.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: currentpath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: currentpath.includes("reviews"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: currentpath.includes("menu"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: currentpath.includes("photos"),
    },
  ];

  return (
    <>
      <div className=" flex relative items-center pb-4 gap-8 md:gap-20 overflow-x-auto border-b-2">
        {tabs.map((tab) => (
          <Tab {...tab} key={`123456${tab.route}`} />
        ))}
      </div>
    </>
  );
}

export default Tabs;
