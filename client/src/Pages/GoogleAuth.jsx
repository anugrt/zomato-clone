import React,{useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { googleAuth } from "../Redux/Reducer/Auth/auth.action";
import  { useDispatch} from 'react-redux'

function GoogleAuth() {
  const { token } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
        dispatch(googleAuth(token)).then(() => history.push("/"))
    }
  }, [token])
  return <div>Loading, Please wait...</div>;
}

export default GoogleAuth;
