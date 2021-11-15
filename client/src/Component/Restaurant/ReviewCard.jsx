import React,{useState, useEffect} from "react";
import { TiStarFullOutline } from "react-icons/ti";
import dayjs from "dayjs";

// Redux
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/Reducer/User/user.action";

function ReviewCard(props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  useEffect(() => {
    dispatch(getUser(props.user)).then((data) => {
      setUser(data.payload.user.fullName);
    });
  }, []);

  return (
    <>
      <div className="my-2  flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
                alt="avatar"
                className="w-full h-full rounded-full object-center object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{user}</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-1 rounded-lg px-2">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">
              {props.isRestaurantReview ? "Dining" : "Delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).format("MMM DD, YYYY")}
            </small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              {props.reviewText}
            </p>
            <div className='my-2' >
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
