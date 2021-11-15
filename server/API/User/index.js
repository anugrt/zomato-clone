import express from "express";

// database Model

import { UserModel } from "../../database/allModel";
import passport from "passport";


const Router = express.Router();



/*
Route           /
Des             Get user data
Params          null
Access          Public
Method          GET
*/
Router.get("/", passport.authenticate("jwt"), (req, res) => {
  try {
    const { email, fullName, phoneNumber, address } =
      req.session.passport.user._doc;

    return res.json({ user: { email, fullName, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /:_id
Des         get user Data
Params      _id
Access      Public
Method      GET    
*/
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const getUser = await UserModel.findById(_id);
    if (!getUser) return res.status(400).json({ user: " User not found" });
    const { fullName } = getUser;
    return res.json({ user: { fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route       /update/userid
Des         update user data
Params      userid
BODY        user data
Access      Public
Method      PUT    
*/
Router.put("/update/userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const { userData } = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(
      userid,
      {
        $set: userData,
      },
      {
        new: true,
      }
    );
    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
