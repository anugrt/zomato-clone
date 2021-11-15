import { GET_IMAGE } from "./Image.type";

const initialState = {
  Image: [],
};

const ImageReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        Image: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ImageReducer;
