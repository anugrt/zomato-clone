import React, {useState, useEffect} from 'react'
import MenuCollection from '../Component/Restaurant/MenuCollection';

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/Image.action"

function Menu() {

    
  const [menus, setMenus] = useState([ ]);

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenus(images);
      });
    }
  }, [reduxState]);

    return (
        <>
            <div className='flex flex-wrap gap-3' >
                <MenuCollection menuTitle='Menu' pages={menus.length}  image={menus} />
            </div>
            <div className='my-20' ></div>
        </>
    )
}

export default Menu
