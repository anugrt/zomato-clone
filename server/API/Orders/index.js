import express from "express";
import passport from "passport";

// database Model

import { OrderModel } from "../../database/allModel";

const Router = express.Router();

/*
Route       /order/:_id
Des         get all order based on id
Params      _id
Access      Public
Method      GET    
*/
Router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;

      const getorders = await OrderModel.findOne({ user: _id });

      if (!getorders) {
        return res.status(404).json({ error: "User not found!!" });
      }
      return res.status(200).json({ orders: getorders });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/*
Route       /order/new
Des         Add new order
Params      _id
Access      Public
Method      POST    
*/
Router.post(
  "/new/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const { orderDetails } = req.body;

      const addNewOrder = await OrderModel.findOneAndUpdate(
        {
          user: _id,
        },
        {
          $push: { orderDetails },
        },
        {
          new: true,
        }
      );
      return res.json({ order: addNewOrder });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
